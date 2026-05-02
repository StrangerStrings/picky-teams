<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PlayerCard from '../components/PlayerCard.vue'
import type { Player } from '../types/Player'
import { shuffle } from '../logic/Shuffle';

const props = defineProps<{
  players: Player[]
}>()

const shuffledTeamA = ref<Player[]>([])
const shuffledTeamB = ref<Player[]>([])

watch(
  () => props.players,
  () => {
    shuffledTeamA.value = shuffle(
      props.players.filter(p => p.team === 'A')
    )
    shuffledTeamB.value = shuffle(
      props.players.filter(p => p.team === 'B')
    )
  },
  { immediate: true }
)

</script>

<template>
  <div class="teams">
    <div class="team">
      <h2>Team A</h2>

      <PlayerCard
        v-for="(p, i) in shuffledTeamA"
        :key="p.name"
        :name="p.name"
        :position="i + 1"
        :editable="false"
      />
    </div>

    <div class="team">
      <h2>Team B</h2>

      <PlayerCard
        v-for="(p, i) in shuffledTeamB"
        :key="p.name"
        :name="p.name"
        :position="i + 1"
        :editable="false"
      />
    </div>
  </div>
</template>

<style scoped>
.teams {
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
}

.team {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

h2 {
  margin: 5px 10px;
  font-family: 'Orbitron', sans-serif;
  color: #4E565E;
}

.player-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}


@media (max-width: 600px) {
  .teams {
    gap: 0;
  }
}
</style>