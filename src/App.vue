<script setup lang="ts">
import ColouredBlock from './components/ColouredBlock.vue'


const greys = [
  { name: 'Graphite Mist', value: '#8A9198' },
  { name: 'Steel Whisper', value: '#7E878F' },
  { name: 'Cloud Alloy', value: '#A3A9AF' },
  { name: 'Slate Vapor', value: '#6F7780' },
  { name: 'Frosted Zinc', value: '#9DA4AA' },
  { name: 'Gunmetal Haze', value: '#5F676F' },
  { name: 'Cool Pewter', value: '#889096' },
  { name: 'Arctic Grey', value: '#B0B6BB' },
  { name: 'Blue Steel Soft', value: '#76818A' },
  { name: 'Mercury Matte', value: '#949BA1' }
]

const greys2 = [
  // Core overlays
  { name: 'Slate Vapor', value: '#6F7780' },
  { name: 'Steel Whisper (deepened)', value: '#5F676F' },
  { name: 'Gunmetal Haze', value: '#4E565E' },
  { name: 'Graphite Soft', value: '#3F464D' },

  // Text & detail
  { name: 'Charcoal Ink', value: '#2E3236' },
  { name: 'Muted Steel', value: '#5C646B' },
  { name: 'Faded Alloy', value: '#7F878E' },

  // Light accents
  { name: 'Arctic Grey', value: '#B8BEC3' },
  { name: 'Pale Zinc', value: '#C5CBD0' }
]

</script>

<template>
    <div class="layout">
      <header class="title">
      Picky Teams
    </header>

    <div class="content">
      <p v-for="n in 100" :key="n">
        Scrollable content {{ n }}
      </p>
    </div>
  </div>
    <div v-for="grey in greys2" :key="grey.value" class="grid">
      <ColouredBlock :color="grey.value" />
      <code>{{ grey.value }}</code>
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
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}

code {
  opacity: 0.7;
}
</style>
