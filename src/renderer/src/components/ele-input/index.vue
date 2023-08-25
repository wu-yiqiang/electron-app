<template>
  <input class="input-box" type="text" :value="value" />
</template>
<script lang="ts" setup>
defineProps({
  value: {
    type: [String, Number],
    required: true,
    default: ''
  },
})
</script>
<style lang="scss" scoped>
.input-box{
  color: #fff;
  font-size: $--fontSizeText14;
  background-color: $--input-background-color;
  border-radius: 5px;
  padding: 3px;
  text-align: center;
}
</style>
