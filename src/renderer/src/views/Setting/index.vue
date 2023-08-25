<template>
  <section class="setting">
    <h1 class="title-box">设置</h1>
    <div class="setting-box">
      <!-- 通用 -->
      <div class="general-box">
        <div class="general-title">通用</div>
        <div class="general-box-item">
          <div class="item-title">主题</div>
        </div>
        <!-- <div class="general-box-item">
          <div class="item-title">语言</div>
        </div> -->
        <!-- <div class="general-box-item">
          <div class="item-title">最小化到托盘</div>
          <eleInput value="YES" />
        </div> -->
      </div>
      <!-- 接收 -->
      <div class="recevice-box">
        <div class="recevice-title">接收</div>
        <!-- <div class="recevice-box-item">
          <div class="item-title">保存目录</div>
        </div> -->
      </div>
      <!-- 网络 -->
      <div class="network-box">
        <div class="network-title">网络</div>
        <div class="network-box-item">
          <div class="item-title">服务器</div>
          <!-- <eleInput :value="serverName"/> -->
        </div>
        <!-- <div class="network-box-item">
          <div class="item-title">别名</div>
          <eleInput :value="alias" />
        </div> -->
        <div class="network-box-item">
          <div class="item-title">IP</div>
          <eleInput :value="ip" />
        </div>
        <div class="network-box-item">
          <div class="item-title">端口</div>
          <eleInput :value="port" />
        </div>
      </div>
      <!-- 网络2 -->
      <div class="network-box">
        <div class="network-title">网络</div>
        <div class="network-box-item">
          <div class="item-title">服务器</div>
          <!-- <eleInput :value="serverName"/> -->
        </div>
        <!-- <div class="network-box-item">
          <div class="item-title">别名</div>
          <eleInput :value="alias" />
        </div> -->
        <div class="network-box-item">
          <div class="item-title">IP</div>
          <eleInput :value="ip" />
        </div>
        <div class="network-box-item">
          <div class="item-title">端口</div>
          <eleInput :value="port" />
        </div>
      </div>
    </div>
    <div class="setting-box">
      <!-- 通用 -->
      <div class="general-box">
        <div class="general-title">通用</div>
        <div class="general-box-item">
          <div class="item-title">主题</div>
        </div>
        <!-- <div class="general-box-item">
          <div class="item-title">语言</div>
        </div> -->
        <!-- <div class="general-box-item">
          <div class="item-title">最小化到托盘</div>
          <eleInput value="YES" />
        </div> -->
      </div>
      <!-- 接收 -->
      <div class="recevice-box">
        <div class="recevice-title">接收</div>
        <!-- <div class="recevice-box-item">
          <div class="item-title">保存目录</div>
        </div> -->
      </div>
      <!-- 网络 -->
      <div class="network-box">
        <div class="network-title">网络</div>
        <div class="network-box-item">
          <div class="item-title">服务器</div>
          <!-- <eleInput :value="serverName"/> -->
        </div>
        <!-- <div class="network-box-item">
          <div class="item-title">别名</div>
          <eleInput :value="alias" />
        </div> -->
        <div class="network-box-item">
          <div class="item-title">IP</div>
          <eleInput :value="ip" />
        </div>
        <div class="network-box-item">
          <div class="item-title">端口</div>
          <eleInput :value="port" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import eleInput from '@/components/ele-input/index.vue'
const alias = ref<String>('哈哈哈')
const port = ref<Number>(3393)
const ip = ref<String>('192.168.0.12')
</script>

<style lang="scss" scoped>
$--mainBoxBackgroundColor: rgb(48,54,53);
.setting {
  color: white;
  background-color: aliceblue;
  @include box-center();
  // overflow: hidden;
  .title-box {
    margin-bottom: 10px;
    font-size: $--fontSizeTitle16;
  }
  .setting-box {
    width: 100%;
    overflow: scroll;
    @include scroll-bar-none();
    .general-box,
    .recevice-box,
    .network-box {
      width: 100%;
      color: rgb(244, 244, 244);
      padding: 10px;
      border-radius: 10px;
      background-color: $--mainBoxBackgroundColor;
      margin-bottom: 20px;
      .general-title,
      .recevice-title,
      .network-title {
        font-size: $--fontSizeTitle16;
      }
      .general-box-item,
      .recevice-box-item,
      .network-box-item {
        font-size: $--fontSizeText14;
        display: flex;
        justify-content: space-between;
        height: 40px;
        margin: 10px 0;
        .item-title {
          @include box-center();
        }
      }
      .network-box-item  {
        margin-top: 0;
      }
    }
  }
}
</style>
