<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from './components/Button.vue';
import Modal from './components/Modal.vue';
import Score from './components/Score.vue'
import Icon from './components/Icon.vue';
import { ref } from 'vue'
import { store } from './store'

const isRuleOpen = ref(false)

function toggleRuleModal() {
  isRuleOpen.value = !isRuleOpen.value
}

</script>

<template>
  <header>
    <Score :score="store.score"></Score>
  </header>

  <RouterView />

  <Button class="rule-button" link="" @click="toggleRuleModal" theme="secondary">Rules</Button>
  <Modal :isOpen="isRuleOpen" @close="isRuleOpen = false">
    <img class="rule-img" src="@/assets/image-rules-bonus.svg">
  </Modal>

</template>

<style lang="scss">
  .rule{
    &-img{
      width: auto;
      height: fit-content;
      max-width: 100%;
    }
    &-button{
      position: fixed;
      bottom: rem(20);
      right: rem(20);
    }
  }
</style>
