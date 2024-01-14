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
        <el-input v-model="ruleForm.name"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"/>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input class="code" v-model="ruleForm.code"/>
        <canvas @click="drawCaptcha()" id="captchaCanvas" width="100" height="40"></canvas>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { nextTick } from "vue";

interface RuleForm {
    name: string;
    region: string;
    count: string;
    date1: string;
    date2: string;
    delivery: boolean;
    type: string[];
    resource: string;
    desc: string;
}

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
    name: "Hello",
    region: "",
    count: "",
    date1: "",
    date2: "",
    delivery: false,
    type: [],
    resource: "",
    desc: "",
});

const rules = reactive<FormRules<RuleForm>>({
    name: [
        {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
        },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
    region: [
        {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
        },
    ],
    count: [
        {
            required: true,
            message: "Please select Activity count",
            trigger: "change",
        },
    ],
    date1: [
        {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
        },
    ],
    date2: [
        {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
        },
    ],
    type: [
        {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
        },
    ],
    resource: [
        {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
        },
    ],
    desc: [
        {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
        },
    ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
    validateCaptcha();
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log("submit!");
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
    for (let i = 0; i < 6; i++) {
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
function validateCaptcha() {
    const userInput = document
        .getElementById("captchaInput")
        .value.toUpperCase();
    const generatedCaptcha = window.generatedCaptcha || "";

    if (userInput === generatedCaptcha) {
        alert("验证码正确！");
    } else {
        alert("验证码错误，请重试。");
        drawCaptcha(); // 重新生成验证码
    }
}
nextTick().then(() => {
    drawCaptcha();
});
</script>

<style scoped lang="less">
.login-container {
  width: 400px;
  height: 100%;
  .demo-ruleForm {
    .code {
        width: 60%;
        margin-right: 2%;
    }
  }
}
</style>
