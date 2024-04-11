<script setup lang="ts">
  import { rps } from '../constants';
  import Icon from './Icon.vue'
  import { ref } from 'vue'

  defineProps<{
    isOpen: Boolean
  }>()

  const emit = defineEmits(["close"]);

  function closeModal() {
    emit("close");
  }

</script>

<template>
  <div class="modal" :class="{ 'is-open' : isOpen }">
    <div class="modal-content">
      <button class="modal-close" @click="closeModal">
        <Icon name="icon-close"></Icon>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background-color: rgba(0,0,0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        &.is-open{
          opacity: 1;
          visibility: visible;
          transition: .3s ease;
          .modal-content{
            transform: translateY(0);
          }
        }
        &-content {
            transition: .3s ease;
            transform: translateY(-20px);
            flex-basis: 600px;
            padding: rem(30);
            background-color: white;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            position: relative;
        }
        &-close{
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          &:hover{
            color: $blue;
          }
        }
    }
</style>