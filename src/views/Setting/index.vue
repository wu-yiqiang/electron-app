<template>
  <section class="setting">
  <h1>设置</h1>
  <!-- 通用 -->
  <div class="general-box">
    <div class="general-box-item">sada</div>
    <div class="general-box-item">sada</div>
    <div class="general-box-item">sada</div>
  </div>
  <!-- 网络 -->
  <div class="network-box">
    <div class="general-box-item">sada</div>
    <div class="general-box-item">sada</div>
    <div class="general-box-item">sada</div>
    <div class="general-box-item">sada</div>
  </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'

</script>
<style lang="scss" scoped>
.setting{
  color: white;
  @include box-center();
  .general-box{
    @include box-center();
    border-radius: 10px;
    background-color: aquamarine;
    margin-bottom: 20px;
  }
  .network-box{
    @include box-center();
    border-radius: 10px;
    background-color: aquamarine;
  }
}
</style>
