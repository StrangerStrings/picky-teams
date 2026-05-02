<script setup lang="ts">
import PlayerOrdering from './pages/PlayerOrdering.vue'
import TeamLists from './pages/TeamLists.vue'
import { ref } from 'vue'
import { pickBalancedTeams } from './logic/PickBalancedTeams';
import type { Player } from './types/Player';
import { examplePlayers } from './data/examplePlayers';

const players = ref<Player[]>(examplePlayers)
const someBool = ref(true);


function pickTeams()  {
  someBool.value = false;
  players.value = pickBalancedTeams(players.value);
}

function back() {
  someBool.value = true;
}

</script>

<template>
  <div class="layout">
    <header>
      <h1>Picky Teams</h1>
      <button
        v-if="someBool" 
        :disabled="players.length%2 !== 0"
        @click="pickTeams"
      >Pick</button>
      <button
        v-else
        @click="back"
      >Back</button>
    </header>
    <PlayerOrdering
      v-if="someBool"
      v-model="players" 
    />
    <TeamLists 
      v-else
      :players="players" 
    />
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  background: #A3A9AF;
  font-family: 'Orbitron', sans-serif;
  font-size: 40px;
  color: #4E565E;
  font-weight: 700;
  letter-spacing: 0.05em;
  transform: skewX(-12deg);
}

@media (max-width: 450px) {
  h1 {
    font-size: 22px;
  }
}
</style>
