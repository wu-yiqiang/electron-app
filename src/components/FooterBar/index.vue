<template>
    <div class="footer-bar">
        <FooterBarItem titleName="接收" svgName="wifi"/>
        <FooterBarItem titleName="接收" svgName="wifi"/>
        <FooterBarItem titleName="接收" svgName="wifi"/>
    </div>
</template>

<script lang="ts" setup>
import FooterBarItem from './FooterBarItem.vue';
</script>

<style lang="scss">
.footer-bar {
    width: 100%;
    height: 300px;
    color: red;
}
</style>
