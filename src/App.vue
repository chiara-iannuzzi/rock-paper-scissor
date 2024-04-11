<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Score from './components/Score.vue'
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <header>
    <Score :score="count"></Score>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
