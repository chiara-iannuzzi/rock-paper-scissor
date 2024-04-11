<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from './components/Button.vue';
import Modal from './components/Modal.vue';
import Score from './components/Score.vue'
import Icon from './components/Icon.vue';
import { ref } from 'vue'

const isRuleOpen = ref(false)

function toggleRuleModal() {
  isRuleOpen.value = !isRuleOpen.value
}

const count = ref(0)
</script>

<template>
  <header>
    <Score :score="count"></Score>
  </header>

  <RouterView />

  <Button link="" @click="toggleRuleModal" theme="secondary">Rules</Button>
  <Modal :isOpen="isRuleOpen" @close="isRuleOpen = false">
    <img src="@/assets/image-rules-bonus.svg">
  </Modal>

</template>

<style scoped>

</style>
