<template>
    <div class="footer-bar-item">
        <SvgIcon :name="svgName" />
        <p>{{titleName}}</p>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { defineProps } from 'vue'
const props = defineProps({
  titleName: {
    type: String,
    required: true
  },
  svgName: {
    type: String,
    default: ''
  },
  svgSize: {
    type: String,
    default: ''
  }
})
const {svgName, titleName} = props
</script>

<style lang="scss">
</style>