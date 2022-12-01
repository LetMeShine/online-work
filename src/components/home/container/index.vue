<template>
    <div class="">
        <Header />
        <!-- 中间主体内容 -->
        <div>
            <!-- 轮播图 -->
            <Banner :imgs="imgs" />
            <!-- 公告通知 -->
        </div>
        <div>
            <!-- 统计表 -->
            <!-- 项目分类 标签 -->
        </div>
    </div>
</template>
<script>
// 响应式
import { reactive } from "@vue/reactivity";
// 导航栏
import Header from "../views/header.vue";
export default {
    components: {
        Header,
    },
    setup() {
        let state = reactive({
            imgs: [
                require("@/assets/img/1.jpg"),
                require("@/assets/img/2.jpg"),
                require("@/assets/img/3.jpg"),
                require("@/assets/img/4.jpg"),
                require("@/assets/img/5.jpg"),
                require("@/assets/img/6.jpg"),
            ],
        });
        return state;
    },
};
</script>
