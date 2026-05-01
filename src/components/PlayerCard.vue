<script setup lang="ts">

defineProps<{
  name: string
  position: number
}>();

const emit = defineEmits(['delete']);
</script>

<template>
  <div class="player">
    <div class="position">{{ position }}</div>
    <div class="card">
      <div class="name">{{ name }}</div>
      <div class="handle">
      <svg width="20" height="20" viewBox="0 0 24 24">
        <circle cx="9" cy="5" r="2.1"/>
        <circle cx="15" cy="5" r="2.1"/>
        <circle cx="9" cy="12" r="2.1"/>
        <circle cx="15" cy="12" r="2.1"/>
        <circle cx="9" cy="19" r="2.1"/>
        <circle cx="15" cy="19" r="2.1"/>
      </svg>
</div>
    </div>
    <div class="delete" @click="emit('delete')">x</div>
  </div>
</template>


<style scoped>

.player {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  color: #4E565E;
  font-family: 'Oxanium', sans-serif;

}

.position {
  width: 20px;
  color: #5C646B;
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.card {
  flex:1;
  display: flex;
  gap: 1px;
  align-items: center;
  padding: 5px 5px 3px 15px;
  background: #B0B6BB;
  border: 2px solid #5C646B;
  border-radius: 16px 0 16px 0;
  box-shadow:
    inset 6px 0 0 #d4d8dc,   /* left */
    inset -3px 0 0 #d4d8dc;  /* right */

}

.name {
  flex: 1;
  font-size: 19px;
}

.handle { 
  cursor: grab; 
  padding: 1px 5px;
}

.handle:active { 
  cursor: grabbing; 
}

.handle svg {
  fill: #4E565E;
}

.delete {
  padding: 1px 3px;
  cursor: pointer;
  font-weight: bold;
  visibility: hidden;
}

.player:hover .delete {
  visibility: visible;
}

:global(.dragging .position),
:global(.dragging .delete) {
  opacity: 0;
}

.fonts {
  font-family: 'Orbitron', sans-serif;
  font-family: 'Rajdhani', sans-serif;
  font-family: 'Audiowide', sans-serif;
  font-family: 'Russo One', sans-serif;
  font-family: 'Bebas Neue', sans-serif;
  font-family: 'Exo 2', sans-serif;
}

</style>
