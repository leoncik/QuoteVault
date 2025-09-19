<script setup lang="ts">
const quotes = ['a', 'b', 'c']
</script>

<template>
  <ul>
    <li v-for="quote in quotes">
      {{ quote }}
    </li>
  </ul>
</template>
