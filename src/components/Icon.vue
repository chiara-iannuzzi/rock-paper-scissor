<template>
    <span class="icon" v-html="icon" :class="{ 'icon--fill': !filled }" />
  </template>
  
  <script setup lang="ts">
  import { ref, watchEffect } from "vue";
  const props = withDefaults(
    defineProps<{
      name: string;
      filled?: boolean;
    }>(),
    { filled: false }
  );
  const icon = ref("");
  watchEffect(async () => {
    try {
      const iconsImport = import.meta.glob("./icons/**/**.svg", {
        as: "raw",
        eager: false,
      });
      const rawIcon: any = await iconsImport[`./icons/${props.name}.svg`]();
      icon.value = rawIcon;
    } catch {
      console.error(
        `[icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
      );
    }
  });
  </script>
  
  <style lang="scss">
  .icon svg {
    vertical-align: middle;
  }
  
  .icon.icon--fill,
  .icon.icon--fill * {
    fill: currentColor !important;
  }
  </style>
  