<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')

const emit = defineEmits<{
  (e: 'add', name: string): void
  (e: 'cancel'): void
}>()


const showAddPlayer = ref(false);

function openAddPlayer() {
  showAddPlayer.value = true
}

function closeAddPlayer() {
  showAddPlayer.value = false
}


function handleAdd() {
  const trimmed = name.value.trim()
  if (!trimmed) return
  emit('add', trimmed)
  name.value = ''

  closeAddPlayer();
}
</script>

<template>
  <div class="open-add-player"
    v-if="!showAddPlayer">
    <div class="button"
      @click="openAddPlayer"
      >Add Player</div>
  </div>
  <div class="add-player"
    v-if="showAddPlayer">
    <input
      v-model="name"
      type="text"
      placeholder="Player name"
      @keyup.enter="handleAdd"
    />
    <div class="actions">
      <div class="button" @click="closeAddPlayer">Cancel</div>
      <div class="button" @click="handleAdd">Add</div>
    </div>
  </div>
</template>

<style scoped>

.open-add-player {
  display: flex;
  justify-content: right;
  padding: 12px;
}
.add-player {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}

input {
background: #d4d8dc;;
  padding: 8px;
  border: 2px solid #5F676F;
  border-radius: 16px 0 16px 0;
  font-size: 19px;
  color: #4E565E;
  font-family: 'Oxanium', sans-serif;
  outline: none;
}

.actions {
  display: flex;
  justify-content: space-between;
}
</style>