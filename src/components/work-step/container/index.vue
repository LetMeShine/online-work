<template>
    <div class="work-step-container">
        <div class="node-container">
            <div class="node-name"><p>开始</p></div>
            <div
                class="node-name"
                v-for="(node, i) in nodeList"
                :key="node.id + i"
            >
                <p
                    @click="selectNode(node)"
                    :class="activeId == node.id && 'active'"
                >
                    {{ node.nodeName }}
                </p>
            </div>
            <div class="node-name"><p>结束</p></div>
        </div>
        <div class="node-info-contianer">
            <SelectTheme />
            <!-- <component :is="activeCmpt"></component> -->
        </div>
    </div>
</template>
<script>
// 响应式
import { reactive, toRefs } from "@vue/reactivity";
import SelectTheme from "../views/select-theme.vue";
export default {
    components: {
        SelectTheme,
        // SelectTheme: import("../views/select-theme.vue"),
        // Upload: import("../views/upload.vue"),
        // ReserveMeeting: import("../views/reserve-meeting.vue"),
        // SelectPeople: import("../views/select-people.vue"),
        // DocumentSign: import("../views/document-sign.vue"),
        // StartMeeting: import("../views/start-meeting.vue"),
    },
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
            activeCmpt: null,
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
        // 选择节点
        const selectNode = (item) => {
            console.log(item);
            state.activeId = item.id;
            getCurCmpt(item.nodeType);
        };
        // 节点对应组件
        const getCurCmpt = (nodeType) => {
            switch (nodeType) {
                case 1:
                    state.activeCmpt = "SelectTheme";
                    break;

                case 2:
                    state.activeCmpt = "Upload";
                    break;

                case 3:
                    state.activeCmpt = "ReserveMeeting";
                    break;

                case 4:
                    state.activeCmpt = "SelectPeople";
                    break;

                case 5:
                    state.activeCmpt = "DocumentSign";
                    break;
                case 6:
                    state.activeCmpt = "StartMeeting";
                    break;
            }
        };
        return { ...toRefs(state), selectNode };
    },
};
</script>

<style scoped lang="less">
.work-step-container {
    width: 100%;
    height: 100%;
    .node-container {
        display: flex;
        .node-name {
            margin: 10px 12px;
            p {
                border: 2px solid green;
                border-radius: 8px;
                padding: 4px 12px;
                cursor: pointer;
                &:hover {
                    color: green;
                    background-color: rgb(223, 247, 225);
                }
            }
            .active {
                color: green;
                background-color: rgb(223, 247, 225);
            }
        }
    }
    .node-info-contianer {
        height: calc(100% - 52px);
    }
}
</style>
