<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<template>
    <RouterLink class="button" v-if="link !== ''" :to="link">
      <slot></slot>
    </RouterLink>
    <div class="button" v-else>
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .button{
        border: 1px white solid;
        border-radius: 5px;
        color: white;
        padding: 5px 10px;
        text-decoration: none;
    }
</style>