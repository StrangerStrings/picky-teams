<script setup lang="ts">

import ColouredBlock from './ColouredBlock.vue'

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
  <div class="grid">
    <div v-for="grey in greys2" :key="grey.value">
       <ColouredBlock :color="grey.value" />
       <code>{{ grey.value }}</code>
     </div>
  </div>
   <div class="grid">
    <div v-for="grey in greys" :key="grey.value">
       <ColouredBlock :color="grey.value" />
       <code>{{ grey.value }}</code>
     </div>
  </div>
</template>


<style scoped>

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px
}

code {
  opacity: 0.7;
}
</style>