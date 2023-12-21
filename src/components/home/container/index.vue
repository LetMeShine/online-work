<template>
    <div class="home-container">
        <Header />
        <!-- 主体内容 -->
        <div class="content-container">
            <!-- 左侧 -->
            <div class="letf-container">
                <!-- 轮播图 -->
                <Banner :imgs="imgs" />
                <el-button @click="setArr">点击</el-button>
                <p>{{ testArr[0] }}</p>
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
                <!-- 最新评论 -->
                <div class="comment border4px">
                    <h5 class="comment-title">最新评论</h5>
                    <div
                        class="comment-info"
                        v-for="(comment, index) in commentList"
                        :key="index"
                    >
                        <img
                            class="comment-info-avatar"
                            :src="comment.avatar"
                        />
                        <div class="comment-info-right">
                            <div class="comment-info-right-name">
                                {{ comment.name
                                }}{{ comment.commentTime }}前说：
                            </div>
                            <div class="comment-info-right-content">
                                {{ comment.commentContent }}
                            </div>
                        </div>
                    </div>
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
import { reactive, toRefs } from "@vue/reactivity";
// 导航栏
import Header from "../views/header.vue";
export default {
    components: {
        Header,
    },
    setup() {
        let state = reactive({
            testArr: [1, 2],
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
            commentList: [
                {
                    avatar: "https://t10.baidu.com/it/u=2292095202,1784829557&fm=58",
                    name: "angela",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
                {
                    avatar: "https://t14.baidu.com/it/u=1270036662,2724914425&fm=58&app=83&size=w931&n=0&f=JPEG&fmt=auto&maxorilen2heic=2000000",
                    name: "孤芳不自",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
                {
                    avatar: "https://t10.baidu.com/it/u=2292095202,1784829557&fm=58",
                    name: "angela",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
                {
                    avatar: "https://t14.baidu.com/it/u=1270036662,2724914425&fm=58&app=83&size=w931&n=0&f=JPEG&fmt=auto&maxorilen2heic=2000000",
                    name: "孤芳不自",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
                {
                    avatar: "https://t10.baidu.com/it/u=2292095202,1784829557&fm=58",
                    name: "angela",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
                {
                    avatar: "https://t14.baidu.com/it/u=1270036662,2724914425&fm=58&app=83&size=w931&n=0&f=JPEG&fmt=auto&maxorilen2heic=2000000",
                    name: "孤芳不自",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
                {
                    avatar: "https://t10.baidu.com/it/u=2292095202,1784829557&fm=58",
                    name: "angela",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
                {
                    avatar: "https://t14.baidu.com/it/u=1270036662,2724914425&fm=58&app=83&size=w931&n=0&f=JPEG&fmt=auto&maxorilen2heic=2000000",
                    name: "孤芳不自",
                    commentTime: "秒、m,s,d,w,M,y",
                    commentContent: "评论内容",
                },
            ],
        });
        const setArr = () => {
            state.testArr[0] = "hhhhh";
        };
        return { ...toRefs(state), setArr };
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
            .comment {
                width: 300px;
                padding: 12px;
                margin-bottom: 16px;
                background-color: #fff;
                &-title {
                    margin: 0 0 16px 0;
                }
                &-info {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 8px;
                    font-size: 14px;
                    &-avatar {
                        height: 48px;
                        width: 48px;
                        border-radius: 50%;
                        margin-right: 12px;
                    }
                    &-right {
                        font-size: 12px;
                        &-name {
                            font-weight: 700;
                            line-height: 24px;
                        }
                        &-content {
                            color: #ccc;
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
}
</style>
