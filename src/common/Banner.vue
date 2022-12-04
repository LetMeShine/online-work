<template>
    <div class="banner">
        <img
            class="border4px banner-img"
            v-for="(v, i) in items"
            :key="i"
            :src="v"
            v-show="i === n"
        />
        <div class="banner-circle">
            <ul class="circle-container">
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
            }, 3000);
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

<style scoped lang="less">
.banner {
    position: relative;
    width: 100%;
    .banner-img {
        // width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .banner-circle {
        position: absolute;
        bottom: 0;
        left: 50%;
        .circle-container {
            margin-left: -50%;
            display: flex;
            cursor: pointer;
            li {
                list-style: none;
                // 子元素的设置固定宽度px这些，这样才能撑开父元素
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-right: 8px;
                background-color: #ccc;
                &.selected {
                    background-color: red;
                }
            }
        }
    }
}
</style>
