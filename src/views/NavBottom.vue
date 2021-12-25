<template>
    <div class="nav-bottom">
        <router-link
            active-class="active"
            v-for="(item, index) in nav"
            :key="index"
            :to="item.path"
        >
            <i class="iconfont" :class="item.icon"></i>
            <label>{{ item.title }}</label>
        </router-link>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import * as Type from "@/store/action-type";
import { Store, useStore } from "vuex";
import { IGlobalState } from "@/store";

// 从vuex取值 没有值就发送请求 dispatch
// hooks 组件函数化
function navList(store: Store<IGlobalState>) {
    // console.log(store.state.home.nav, 1212);
    console.log(11);
    // 先从缓存中取数据
    let nav = computed(() => store.state.home.nav);
    onMounted(() => {
        console.log(333);
        // 如果没有数据 那么就得请求接口
        if (nav.value.length === 0) {
            // 触发导航
            store.dispatch(`home/${Type.SET_NAV}`);
        }
    });
    return { nav };
}
export default defineComponent({
    setup() {
        const store = useStore<IGlobalState>();
        let { nav } = navList(store);
        onMounted(() => {
            console.log(222);
        });
        return {
            nav,
        };
    },
});
</script>
