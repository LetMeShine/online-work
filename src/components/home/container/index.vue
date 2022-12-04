<template>
    <div class="home-container">
        <Header />
        <!-- 主体内容 -->
        <div class="content-container">
            <!-- 左侧 -->
            <div class="letf-container">
                <!-- 轮播图 -->
                <Banner :imgs="imgs" />
            </div>
            <!-- 右侧 -->
            <div class="right-container">
                <!-- 公告通知 -->
                <div class="notice border4px">
                    <h5 class="notice-title">公告通知</h5>
                    <p
                        class="notice-info"
                        v-for="(notice, index) in noticeList"
                        :key="index"
                    >
                        <span class="notice-info-date"
                            >[{{ notice.date }}]</span
                        >
                        <span class="notice-info-content">{{
                            notice.content
                        }}</span>
                    </p>
                </div>
                <!-- 一周学习计划 -->
                <div class="notice border4px">
                    <h5 class="notice-title">学习计划</h5>
                    <p
                        class="notice-info"
                        v-for="(notice, index) in noticeList"
                        :key="index"
                    >
                        <span class="notice-info-date"
                            >[{{ notice.date }}]</span
                        >
                        <span class="notice-info-content">{{
                            notice.content
                        }}</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- <div class="count-container"> -->
        <!-- 统计表 -->
        <!-- 项目分类 标签 -->
        <!-- </div> -->
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
            noticeList: [
                {
                    date: "2022.12.04",
                    content: "平台上线了",
                },
                {
                    date: "2022.12.04",
                    content: "平台上线了",
                },
                {
                    date: "2022.12.04",
                    content: "平台上线了",
                },
                {
                    date: "2022.12.04",
                    content: "平台上线了",
                },
            ],
        });
        return state;
    },
};
</script>

<style scoped lang="less">
.home-container {
    position: relative;
    width: 100%;
    .content-container {
        background-color: rgb(247, 243, 243);
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 16px;
        .letf-container {
            background-color: pink;
            margin-right: 16px;
        }
        .right-container {
            // background-color: rgb(252, 212, 219);
            .notice {
                width: 300px;
                padding: 12px;
                margin-bottom: 16px;
                background-color: #fff;
                &-title {
                    margin: 0 0 16px 0;
                }
                &-info {
                    margin-bottom: 6px;
                    font-size: 14px;
                    &-date {
                        color: rgb(155, 154, 154);
                        margin-right: 4px;
                    }
                    &-content {
                        &:hover {
                            cursor: pointer;
                            text-decoration: underline;
                            color: rgb(247, 101, 101);
                        }
                    }
                }
            }
        }
    }
}
</style>
