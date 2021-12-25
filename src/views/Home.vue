<template>
    <div class="">
        <!-- <Banner :imgs="imgs" /> -->
        得瑟得瑟
    </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
export default {
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
        });
        return state;
    },
};
</script>
