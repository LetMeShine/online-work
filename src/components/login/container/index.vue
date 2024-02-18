<template>
    <div class="login-container">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
        >
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                    v-model="ruleForm.password"
                    type="password"
                    placeholder="请输入密码"
                    show-password
                />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input
                    class="code"
                    placeholder="请输入验证码"
                    v-model="ruleForm.code"
                />
                <canvas
                    @click="drawCaptcha()"
                    id="captchaCanvas"
                    width="100"
                    height="40"
                ></canvas>
            </el-form-item>
            <el-form-item>
                <el-button
                    style="width: 100%"
                    type="primary"
                    @click="submitForm(ruleFormRef)"
                    >登录</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";

interface RuleForm {
    name: string;
    password: string;
    code: string;
}

const router = useRouter();

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
    name: "",
    password: "",
    code: "",
});

const rules = reactive<FormRules<RuleForm>>({
    name: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
        },
    ],
    password: [
        {
            required: true,
            message: "请输入密码",
            trigger: "change",
        },
    ],
    code: [
        {
            required: true,
            message: "请输入验证码",
            trigger: "change",
        },
        {
            required: true,
            message: "请输入验证码",
            trigger: "change",
        },
        { validator: validateCaptcha, trigger: "blur" },
    ],
});

// 登录
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log("submit!");
            // 请求接口 TODO
            // 接口返回成功跳转路由
            goToHome();
        } else {
            console.log("error submit!", fields);
        }
    });
};
// 生成验证码
const drawCaptcha = () => {
    const canvas = document.getElementById("captchaCanvas");
    const ctx = canvas.getContext("2d");

    // 清除之前的绘制
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 定义验证码字符集
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // 生成随机验证码字符串
    let captcha = "";
    for (let i = 0; i < 4; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }

    // 设置字体样式
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 绘制验证码字符串
    ctx.fillText(captcha, canvas.width / 2, canvas.height / 2);

    // （可选）添加干扰线条
    for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `rgb(${Math.random() * 255}, ${
            Math.random() * 255
        }, ${Math.random() * 255})`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }

    // 将验证码存储在全局变量中以便验证
    window.generatedCaptcha = captcha;
};

// 校验验证码
function validateCaptcha(rule: any, value: any, callback: any) {
    const userInput = value; //ruleForm.code;
    const generatedCaptcha = window.generatedCaptcha || "";

    if (userInput === generatedCaptcha) {
        console.log("验证码正确！");
        callback();
    } else {
        console.log("验证码错误，请重试。");
        drawCaptcha(); // 重新生成验证码
        callback(new Error("验证码错误，请重试。"));
    }
}

// 跳转到首页
function goToHome() {
    router.push("/home");
}

nextTick().then(() => {
    drawCaptcha();
});
</script>

<style scoped lang="less">
.login-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .demo-ruleForm {
        width: 400px;
        .code {
            width: 60%;
            margin-right: 2%;
        }
    }
}
</style>
