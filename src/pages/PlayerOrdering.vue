<script setup lang="ts">
import { computed } from 'vue'
import draggable from 'vuedraggable'
import PlayerCard from '../components/PlayerCard.vue'
import AddPlayer from '../components/AddPlayer.vue'
import type { Player } from '../types/Player'


const props = defineProps<{
  modelValue: Player[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Player[]): void
}>()

// v-model proxy
const players = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// --- internal actions ---

function removePlayer(index: number) {
  const next = [...players.value]
  next.splice(index, 1)
  players.value = next
}

function addPlayer(name: string) {
  const trimmed = name.trim()
  if (!trimmed) return

  // duplicate check (case-insensitive)
  const exists = players.value.some(
    p => p.name.toLowerCase() === trimmed.toLowerCase()
  )
  if (exists) return

  const next = [
    ...players.value,
    { name: trimmed, team: null , score: 0}
  ]

  players.value = next
}
</script>

<template>
  <div class="player-ordering">
    <draggable
      v-model="players"
      item-key="id"
      class="player-list"
      ghost-class="ghost"
      animation="200"
      direction="vertical"
      drag-class="dragging"
      handle=".handle"
    >
      <template #item="{ element, index }">
        <PlayerCard
          :name="element.name"
          :position="index + 1"
          @delete="removePlayer(index)"
          :editable="true"
        />
      </template>
    </draggable>

    <AddPlayer @add="addPlayer" />
  </div>
</template>

<style scoped>
.player-ordering {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 400px;
}

.player-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

.ghost {
  opacity: 0;
}
</style>