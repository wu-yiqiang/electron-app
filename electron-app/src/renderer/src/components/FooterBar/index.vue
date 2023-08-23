<template>
  <div class="tabbar-box" router>
    <div v-for="(menu, index) in menus" :key="index">
      <div v-if="menu.meta.TabbarShow" :class="['menu-item', currIndex == index && 'active']" @click="tabClick($event, menu.path)" :data-index="index">
        <SvgIcon :name="menu.meta.icon" size="30" :color="currIndex == index ? '#fff' : ''" />
        <span class="title-name-box">{{ menu.name }}</span>
      </div>
      <div class="active-tabbar-box" :style="{ '--n': currIndex }"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { menus } from '../../router/index'
import router from '../../router/index'
import { RouterModel } from '../../router/RouterModels'
const currIndex = ref(0)

let tabbarLen = ref(0)
let isEven = ref(0)
const tabClick = (e, path) => {
  let { index } = e.currentTarget.dataset
  currIndex.value = index
  router.push(path)
}
onMounted(() => {
  // router.push('/receive')
  menus.forEach((v: RouterModel) => {
    if (v?.meta?.TabbarShow) tabbarLen.value++
  });
  isEven.value = tabbarLen.value % 2
  console.log(typeof isEven.value)
})
</script>

<style lang="scss">
.tabbar-box {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  /* 导航栏个数 */
  $--tn: v-bind(tabbarLen);
  /* 每个菜单的宽度 */
  $--w: calc(100vw / $--tn);
  /* 每个菜单的宽度的一半 */
  $--ww: calc(100vw / $--tn / 2);
  /* 奇偶数 */
  $--isEven: 0;
  // $--w: 120px;
  /* 页面总宽度 */
  $--t: 100vw;
  /* 菜单选中的圆形背景宽度 */
  $--c: 60px;
  /* 背景颜色 */
  $--color: $--pageBackgroundColor;
  /* 菜单选中的背景色 */
  $--bg: $--tabBarColor;
  /* 设置底部安全距离 */
  background: $--tabBarColor;
  width: 100%;
  height: 60px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 设置ios底部安全距离 */
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 竖向垂直居中 */
    flex-direction: column;
    width: $--w;
    position: relative;
    .svg-icon {
      font-size: 30px;
      /* 添加过渡效果 */
      transition: all 0.5s;
    }
    .title-name-box {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      position: absolute;
      transform: translateY(-30px);
      /* 添加过渡效果 */
      transition: all 0.5s;
      /* 设置默认不显示 */
      opacity: 0;
    }
  }

  .active {
    /* 设置菜单选中样式 */
    .svg-icon {
      color: '#fff' !important;
      transform: translateY(-30px);
    }
    .title-name-box {
      opacity: 1;
      transform: translateY(15px);
    }
  }

  /* 菜单选中圆形样式 */
  .active-tabbar-box {
    width: $--c;
    height: $--c;
    background: $--bg;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    border: 10px solid $--color;
    $--left-pad: calc($--t - (4 * $--w ));
    left: calc(($--left-pad / 2) + ($--w / 2 - ($--c / 2)));
    top: calc(-50% + constant(safe-area-inset-bottom) / 2);
    top: calc(-50% + env(safe-area-inset-bottom) / 2);
    z-index: -1;
    /* 添加过渡效果 */
    transition: all 0.5s;
    /* 设置选中偏移 */
    // transform: translateX(calc($--w * var(--n)));
    transform: translateX(calc($--w * var(--n) + $--ww));
    // @if $--isEven == 0 {
    //   // transform: translateX(calc($--ww - $--ww))
    //   transform: translateX(calc($--w * var(--n)));
    //   // transform: translateX(calc($--w * var(--n)));
    // } @else {
    //   transform: translateX(calc($--w * var(--n) - $--ww));
    // }
    /* 菜单选中圆形样式添加前后圆滑凹凸 */
    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 30px;
      height: 30px;
      background: transparent;
    }

    &::before {
      left: -33px;
      border-radius: 0 30px 0 0;
      box-shadow: 0 -15px 0 0 $--color;
    }

    &::after {
      right: -33px;
      border-radius: 30px 0 0 0;
      box-shadow: 0 -15px 0 0 $--color;
    }
  }
}
</style>
