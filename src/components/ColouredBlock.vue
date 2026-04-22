<script setup lang="ts">
defineProps<{
  color: string
}>()
</script>

<template>
  <div class="color-block" :style="{ backgroundColor: color }" />
</template>

<style scoped>
.color-block {
  width: 80px;
  height: 80px;
  box-sizing: border-box;
}
</style>