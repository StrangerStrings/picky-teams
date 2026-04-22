<script setup lang="ts">
import PlayerCard from './components/PlayerCard.vue'
import { ref } from 'vue'

type Player = {
  name: string
}

const players = ref<Player[]>([
  { name: 'Ben'},
  { name: 'Joe'},
  { name: 'Sami'}
])

function moveUp(index: number) {
  if (index <= 0) return

  const prev = players.value[index - 1]
  const curr = players.value[index]

  if (!prev || !curr) return

  players.value[index - 1] = curr
  players.value[index] = prev
}

function moveDown(index: number) {
  if (index >= players.value.length - 1) return

  const curr = players.value[index]
  const next = players.value[index + 1]

  if (!curr || !next) return

  players.value[index] = next
  players.value[index + 1] = curr
}

function removePlayer(index: number) {
  players.value.splice(index, 1)
}
</script>

<template>
    <div class="layout">
      <header class="title">
      Picky Teams
    </header>

    <div class="content">
      <div class="player-list">
        <PlayerCard
          v-for="(person, idx) in players"
          :key="person.name"
          :name="person.name"
          :position="idx + 1"
          @move-up="moveUp(idx)"
          @move-down="moveDown(idx)"
          @delete="removePlayer"
        />
      </div>
    </div>
  </div>
</template>


<style scoped>

.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  flex-shrink: 0;
  font-weight: bold;
  background: #A3A9AF;
  font-family: 'Orbitron', sans-serif;
  font-size: 40px;
  color: #5C646B;
  font-weight: 700;
  letter-spacing: 0.05em;
  transform: skewX(-12deg);
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.player-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 400px;
}
</style>
