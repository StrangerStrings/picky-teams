<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="color-block" :style="{ backgroundColor: color }" />
</template>

<style scoped>
.color-block {
  width: 60px;
  height: 610px;
  box-sizing: border-box;
}
</style>