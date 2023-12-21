<template>
    <!-- <div> -->
    <router-view />
    <!-- <NavBottom /> -->
    <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"; // 让组件在类型推断更加友好
import { reactive, toRefs } from "@vue/reactivity";
// import { Options, Vue } from "vue-class-component";
// import NavBottom from "./views/NavBottom.vue";

// @Options({
//     components: {
//         NavBottom,
//     },
// })
// export default class App extends Vue {
//     setup() {
//         const state = reactive({});

//         return state;
//     }
// }
export default defineComponent({
    components: {
        // NavBottom,
    },
    setup() {
        const state = reactive({});

        return {
            ...toRefs(state),
        };
    },
});
</script>

<style>
html,
body,
#app {
    width: 100%;
    height: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
