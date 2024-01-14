<template>
    <div class="header">
        <div class="logo">在线文档库</div>
        <div class="menu">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >
                <template v-for="menu in menuList" >
                    <el-sub-menu
                        :key="menu.menuCode"
                        :index="menu.menuCode"
                        v-if="
                            Array.isArray(menu.subMenuList) &&
                            menu.subMenuList.length
                        "
                    >
                        <template #title>{{ menu.menuName }}</template>
                        <el-menu-item
                            v-for="subMenu in menu.subMenuList"
                            :key="subMenu.menuCode"
                            :index="subMenu.menuCode"
                            >{{ subMenu.menuName }}</el-menu-item
                        >
                    </el-sub-menu>
                    <el-menu-item v-else :index="menu.menuCode" :key="menu.menuCode"
                        ><el-icon v-if="menu.icon == 'folder'"
                            ><Folder
                        /></el-icon>
                        <el-icon v-if="menu.icon == 'search'"
                            ><Search /></el-icon
                        >{{ menu.menuName }}</el-menu-item
                    >
                </template>
            </el-menu>
        </div>
        <div class="user">个人中心</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core"; // 让组件在类型推断更加友好
import { reactive, toRefs } from "@vue/reactivity";

export default defineComponent({
    components: {
        // NavBottom,
    },
    setup() {
        const state = reactive({
            menuList: [
                {
                    menuCode: "1",
                    menuName: "在线文档库",
                },
                {
                    menuCode: "2",
                    menuName: "UI组件库",
                    subMenuList: [
                        {
                            menuCode: "2-1",
                            menuName: "ElementUI",
                        },
                        {
                            menuCode: "2-2",
                            menuName: "iView",
                        },
                    ],
                },
                {
                    menuCode: "3",
                    menuName: "我的项目",
                    icon: "folder",
                },
                {
                    menuCode: "4",
                    menuName: "搜索",
                    icon: "search",
                },
            ],
        });

        return {
            ...toRefs(state),
        };
    },
});
</script>
<style scoped lang="less">
.header {
    width: 100%;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    .menu {
        width: calc(100% - 180px);
    }
}
.flex-grow {
    flex-grow: 1;
}
</style>
