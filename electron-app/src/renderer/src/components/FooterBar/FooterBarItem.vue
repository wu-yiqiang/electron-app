<template>
    <div class="footer-bar-item">
        <SvgIcon :name="svgName" />
        <p>{{titleName}}</p>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
const props = defineProps({
  titleName: {
    type: String,
    required: true
  },
  svgName: {
    type: String,
    default: ''
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  svgSize: {
    type: String,
    default: ''
  }
})
const {svgName, titleName} = props
</script>

<style lang="scss">
.footer-bar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 5px;
}
</style>