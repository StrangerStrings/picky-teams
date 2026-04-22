<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')

const emit = defineEmits<{
  (e: 'add', name: string): void
  (e: 'cancel'): void
}>()

function handleAdd() {
  const trimmed = name.value.trim()
  if (!trimmed) return
  emit('add', trimmed)
  name.value = ''
}
</script>

<template>
  <div class="add-player">
    <input
      v-model="name"
      type="text"
      placeholder="Player name"
      @keyup.enter="handleAdd"
    />

    <div class="actions">
      <button @click="emit('cancel')">Cancel</button>
      <button @click="handleAdd">Add</button>
    </div>
  </div>
</template>

<style scoped>
.add-player {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}

input {
  padding: 8px;
  border: 2px solid #5F676F;
  border-radius: 8px;
  outline: none;
}

.actions {
  display: flex;
  justify-content: space-between;
}
</style>