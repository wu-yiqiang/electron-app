<template>
  <div class="router">
    <router-view></router-view>
  </div>
  <!-- <FooterBar /> -->
</template>
<script lang="ts" setup>
import FooterBar from '@/components/FooterBar/index.vue'
</script>
<style lang="scss" scoped>
.router {
  // color: #fff;
  height: calc(50vh - $--footer-height);
  // padding: $--pagePadding;
  // background: $--pageBackgroundColor;
  background-color: rgb(214, 111, 111);
}
</style>
