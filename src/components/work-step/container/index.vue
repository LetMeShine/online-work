<template>
  <div class="work-step-container">
    <div class="node-container">
      <div class="node-name">
        <p>开始</p>
      </div>
      <div class="node-name" v-for="(node, i) in state.nodeList" :key="node.id + i">
        <p @click="selectNode(node)" :class="state.activeId == node.id && 'active'">{{ node.nodeName }}</p>
      </div>
      <div class="node-name">
        <p>结束</p>
      </div>
    </div>
    <div class="node-info-contianer">
      <component :is="activeCmpt"></component>
    </div>
  </div>
</template>
<script setup>
// 响应式
import { reactive, shallowRef } from "@vue/reactivity";
import SelectTheme from "../views/select-theme.vue";
import Upload from "../views/upload.vue";
import ReserveMeeting from "../views/reserve-meeting.vue";
import SelectPeople from "../views/select-people.vue";
import DocumentSign from "../views/document-sign.vue";
import StartMeeting from "../views/start-meeting.vue";

let state = reactive({
    nodeList: [
        {
            nodeName: "选择会议主题",
            nodeType: 1,
            comName: shallowRef(SelectTheme),
            id: 1,
        },
        {
            nodeName: "上传附件",
            nodeType: 2,
            comName: shallowRef(Upload),
            id: 2,
        },
        {
            nodeName: "预约会议室",
            nodeType: 3,
            comName: shallowRef(ReserveMeeting),
            id: 3,
        },
        {
            nodeName: "邀请参会人员",
            nodeType: 4,
            comName: shallowRef(SelectPeople),
            id: 4,
        },
        {
            nodeName: "文书签名",
            nodeType: 5,
            comName: shallowRef(DocumentSign),
            id: 5,
        },
        {
            nodeName: "开始会议",
            nodeType: 6,
            comName: shallowRef(StartMeeting),
            id: 6,
        },
    ],
    activeId: 1,
    
});

const activeCmpt = shallowRef(SelectTheme)
const selectNode = (data) => {
    state.activeId = data.id
    activeCmpt.value = data.comName
}

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
