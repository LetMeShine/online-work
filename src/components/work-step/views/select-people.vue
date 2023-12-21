<template>
    <div class="upload-container">邀请参会人员</div>
</template>
<script>
// 响应式
import { reactive, toRefs } from "@vue/reactivity";
export default {
    components: {},
    setup() {
        let state = reactive({
            nodeList: [
                {
                    nodeName: "选择会议主题",
                    nodeType: 1,
                    id: 1,
                },
                {
                    nodeName: "上传附件",
                    nodeType: 2,
                    id: 2,
                },
                {
                    nodeName: "预约会议室",
                    nodeType: 3,
                    id: 3,
                },
                {
                    nodeName: "邀请参会人员",
                    nodeType: 4,
                    id: 4,
                },
                {
                    nodeName: "文书签名",
                    nodeType: 5,
                    id: 5,
                },
                {
                    nodeName: "开始会议",
                    nodeType: 6,
                    id: 6,
                },
            ],
            activeId: "",
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
        const selectNode = (item) => {
            console.log(item);
            state.activeId = item.id;
        };
        return { ...toRefs(state), selectNode };
    },
};
</script>

<style scoped lang="less">
</style>
