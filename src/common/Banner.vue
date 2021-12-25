<template>
    <div class="banner">
        <img v-for="(v, i) in items" :key="i" :src="v" v-show="i === n" />
        <div class="banner-circle">
            <ul>
                <li
                    :class="i === n ? 'selected' : ''"
                    v-for="(item, i) in items"
                    :key="i"
                    @click="n = i"
                    @mouseenter="stopAuto(i)"
                    @mouseleave="startAuto"
                ></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, onMounted, onUnmounted } from "vue";

export default {
    props: {
        imgs: {
            type: Array,
            defalut: [],
        },
    },
    setup(props) {
        let timer = null;
        // 自动轮播
        const autoplay = () => {
            timer = setInterval(() => {
                if (state.n < state.items.length - 1) {
                    state.n++;
                } else {
                    state.n = 0;
                }
            }, 2000);
        };
        // 鼠标移上去 停止轮播
        const stopAuto = (i) => {
            state.n = i; // 移动到哪个小圆点就展示哪个小圆点
            clearInterval(timer);
        };
        // 开始轮播
        const startAuto = () => {
            autoplay();
        };
        let state = reactive({
            n: 0,
            items: props.imgs,
            stopAuto,
            startAuto,
        });
        onMounted(() => {
            autoplay();
        });
        onUnmounted(() => {
            stopAuto();
        });
        return {
            ...toRefs(state),
        };
    },
};
</script>
