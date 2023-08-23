<template>
  <input class="input-box" type="text" :value="value" />
</template>
<script lang="ts" setup>
const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
    default: ''
  },
})
</script>
<style lang="scss" scoped>
$--input-color: rgb(55, 71, 69);
.input-box{
  color: #fff;
  font-size: 16px;
  background-color: $--input-color;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
}
</style>
