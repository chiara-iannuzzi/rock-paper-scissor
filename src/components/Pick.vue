<script setup lang="ts">
  import { rps } from '../constants';
  import Icon from './Icon.vue'

</script>

<template>
  <section class="pick-container">
    <RouterLink :to="'/pick/' + index" v-for="(item, index) in rps" :key="item" :class="'pick-icon-' + item + ' color-' + item">
      <Icon :class="'pick-icon-' + item + '-svg'" :name="'icon-' + item"/>
    </RouterLink>
    <Icon class="pick-container-background" name="bg-triangle"/>
  </section>
  

</template>

<style scoped lang="scss">
  @mixin rpsLinkStyle($top, $left, $right, $bottom){
    position: absolute;
    top: $top;
    bottom: $bottom;
    left: $left;
    right: $right;
    width: rem($rpsIconWidth);
    height: rem($rpsIconWidth);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: rem(50);
    color: $blue;
    &::after{
      content:"";
      position:absolute;
      width: 80px;
      height: 80px;
      left: 10px;
      top: 10px;
      background: white;
      border-radius: 40px;
    }
    &-svg{
      z-index: 2;
    }
  }

  @each $color-name, $color in $color-lists {
    .color-#{$color-name} {
      background: $color;
    }
  }

  .pick{
    &-container{
      position: relative;
      max-width: fit-content;
      margin: rem(200) auto 0 auto;
    }
    &-icon{
      &-paper{
        @include rpsLinkStyle(calc(($rpsIconWidth / 4) * -1px), calc(($rpsIconWidth / 4) * -1px), unset, unset);
      }
      &-scissors{
        @include rpsLinkStyle(calc(($rpsIconWidth / 4) * -1px), unset, calc(($rpsIconWidth / 4) * -1px), unset);
      }
      &-rock{
        @include rpsLinkStyle(unset, calc(50% - ($rpsIconWidth / 2) * 1px), unset, 0);
      }
    }
  }
</style>