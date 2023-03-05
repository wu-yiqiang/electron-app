<template>
  <section class="setting">
    <h1 class="title-box">设置</h1>
    <!-- 通用 -->
    <div class="general-box">
      <div class="general-title">通用</div>
      <div class="general-box-item">
        <div class="item-title">主题</div>
      </div>
      <div class="general-box-item">
        <div class="item-title">语言</div>
      </div>
      <div class="general-box-item">
        <div class="item-title">最小化到托盘</div>
        <eleInput value="YES"/>
      </div>
    </div>
    <!-- 接收 -->
    <div class="recevice-box">
      <div class="recevice-title">接收</div>
      <div class="recevice-box-item">
        <div class="item-title">保存目录</div>
      </div>
    </div>
    <!-- 网络 -->
    <div class="network-box">
      <div class="network-title">网络</div>
      <div class="network-box-item">
        <div class="item-title">服务器</div>
        <!-- <eleInput :value="serverName"/> -->
      </div>
      <div class="network-box-item">
        <div class="item-title">别名</div>
        <eleInput :value="alias"/>
      </div>
      <div class="network-box-item">
        <div class="item-title">IP</div>
         <eleInput :value="ip"/>
      </div>
      <div class="network-box-item">
        <div class="item-title">端口</div>
         <eleInput :value="port"/>
      </div>
    </div>
    <!-- <div class="recevice-box">
      <div class="recevice-title">asda1</div>
      <div class="recevice-box-item">sada</div>
      <div class="recevice-box-item">sada</div>
      <div class="recevice-box-item">sada</div>
      <div class="recevice-box-item">sada</div>
    </div>
    <div class="network-box">
      <div class="network-title">网络</div>
      <div class="network-box-item">sada</div>
      <div class="network-box-item">sada</div>
      <div class="network-box-item">sada</div>
      <div class="network-box-item">sada</div>
    </div> -->
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import eleInput from '@/components/ele-input/index.vue'
const alias = ref<String>('哈哈哈')
const port = ref<Number>(3393)
const ip = ref<String>('192.168.0.12')
</script>

<style lang="scss" scoped>
.setting {
  height: calc(100vh - 120px);
  padding: 20px;
  color: white;
  overflow-y: scroll;
  @include box-center();
  &::-webkit-scrollbar {
    display: none;
  }

  .title-box {
    margin: 20px 0;
    // position: sticky;
    // top: 20px;
  }

  .general-box,
  .recevice-box,
  .network-box {
    width: 80%;
    color: black;
    padding: 10px;
    border-radius: 10px;
    // background-color: aquamarine;
    background-color: rgb(47, 54, 53);
    margin-bottom: 20px;

    .general-title,
    .recevice-title,
    .network-title {
      font-size: 24px;
    }

    .general-box-item,
    .recevice-box-item,
    .network-box-item {
       font-size: 20px;
      display: flex;
      justify-content: space-between;
      height: 50px;
      margin: 10px 0;
      .item-title {
        @include box-center();
      }
    }
  }
}</style>
