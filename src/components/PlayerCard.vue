<script setup lang="ts">


defineProps<{
  name: string
  position: number
}>()

const emit = defineEmits(['move-up', 'move-down', 'delete'])
</script>

<template>
  <div class="player">
    <div class="position">{{ position }}</div>
    <div class="card">
      <div class="name">{{ name }}</div>
      <div @click="emit('move-up')">↑</div>
      <div @click="emit('move-down')">↓</div>
    </div>
    <div class="delete" @click="emit('delete')">Delete</div>
  </div>
</template>


<style scoped>

.player {
  display: flex;
  flex-direction: row;
}

.position {
  width: 20px;
}

.card {
  flex:1;
    border: 2px solid #5F676F;
  border-radius: 16px 0 16px 0; /* TL TR BR BL */

}

.name {

}

.delete {

}

</style>
