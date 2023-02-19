<template>
    <div class="footer-bar" @click="handleSelect">
        <FooterBarItem v-for="item in barItem" :key="item.index" :isSelected="Boolean(item.index === currentIndex)" :titleName="item.titleName" :svgName="item.svgName" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import FooterBarItem from './FooterBarItem.vue';
interface BarItem {
    titleName: string
    svgName: string
    index: number
}
const barItem = reactive<BarItem[]>([
    { titleName: '接收', svgName: 'wifi', index: 0 },
    { titleName: '发送', svgName: 'send', index: 1 },
    { titleName: '设置', svgName: 'setting', index: 2 }
])
const currentIndex = ref(2)

function handleSelect(e) {
    console.log(e, 'asdsa')
}

</script>

<style lang="scss">
.footer-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 20vh;
    background-color: rgb(17, 0, 255);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
