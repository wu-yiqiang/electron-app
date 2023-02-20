<template>
    <div class="tabbar-box">
        <div v-for="(menu, index) in menus" :key="index" class="menu-item {{currIndex==index && 'active'}}" @click="tabClick($event)" :data-index="index">
            <!-- <view class="iconfont {{menu.icon}}"></view> -->
            <SvgIcon :name="menu.icon" />
            <span>{{ menu.name }}</span>
        </div>
        <div class="active-tabbar-box" style="--n:{{currIndex}}"></div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue'
interface MenuItem {
    name: string
    icon: string
}
const menus = reactive<MenuItem[]>([
    { name: '接收', icon: 'wifi' },
    { name: '发送', icon: 'send' },
    { name: '设置', icon: 'setting' }
])
const currIndex = ref(0)
const tabClick = (e) => {
    let {
        index
    } = e.currentTarget.dataset;
    currIndex.value = index
}

</script>

<style lang="scss">

.tabbar-box {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    /* 每个菜单的宽度 */
    $--w: calc(100% / 3);
    /* 页面总宽度 */
    $--t: 100%;
    /* 菜单选中的圆形背景宽度 */
    $--c: 120px;
    /* 背景颜色 */
    $--color: #222;
    /* 菜单选中的背景色 */
    $--bg: orange;
    /* 设置底部安全距离 */
    $--n: 6;
    background: #752626;
    width: 100%;
    height: 120px;
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
        height: 100%;
        position: relative;
    }

    .menu-item .svgicon {
        font-size: 40px;
        /* 添加过渡效果 */
        transition: all .5s;
    }

    .menu-item text {
        font-size: 26px;
        font-weight: bold;
        color: #222;
        position: absolute;
        transform: translateY(50px);
        /* 添加过渡效果 */
        transition: all .5s;
        /* 设置默认不显示 */
        opacity: 0;
    }

    /* 设置菜单选中样式 */
    .menu-item.active .svgicon {
        transform: translateY(-60px);
    }

    .menu-item.active text {
        opacity: 1;
        transform: translateY(22px);
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
        $--left-pad: calc($--t - (4 * $--w));
        left: calc(($--left-pad / 2) + ($--w /2 - ($--c / 2)));
        top: calc(-50% + constant(safe-area-inset-bottom) / 2);
        top: calc(-50% + env(safe-area-inset-bottom) / 2);
        z-index: -1;
        /* 添加过渡效果 */
        transition: all .5s;
        /* 设置选中偏移 */
        transform: translateX(calc($--w * $--n));
    }

    /* 菜单选中圆形样式添加前后圆滑凹凸 */
    .active-tabbar-box::after,
    .active-tabbar-box::before {
        content: '';
        position: absolute;
        top: 50%;
        width: 30px;
        height: 30px;
        background: transparent;
    }

    .active-tabbar-box::before {
        left: -33px;
        border-radius: 0 30px 0 0;
        box-shadow: 0 -15px 0 0 $--color;
    }

    .active-tabbar-box::after {
        right: -33px;
        border-radius: 30px 0 0 0;
        box-shadow: 0 -15px 0 0 $--color;
    }
}
</style>
