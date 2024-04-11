<script setup lang="ts">
defineProps<{
  link: string,
  theme: 'primary' | 'secondary'
}>()
</script>

<template>
    <RouterLink :class="'button ' + theme" v-if="link !== ''" :to="link">
      <slot></slot>
    </RouterLink>
    <button :class="'button ' + theme" v-else>
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .button{
        border: 1px white solid;
        border-radius: 5px;
        color: white;
        padding: 10px 15px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
        text-decoration: none;
        transition: .3s ease;
        cursor: pointer;
        &.primary{
            background: white;
            color: $blue;
            &:hover{
                background: transparent;
                color: white;
            }
        }
        &.secondary{
            background: transparent;
            color: white;
            &:hover{
                background: white;
                color: $blue;
            }
        }
    }
</style>