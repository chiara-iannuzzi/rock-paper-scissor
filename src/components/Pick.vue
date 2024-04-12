<script setup lang="ts">
  import { rps } from '../constants';
  import Icon from './Icon.vue'

</script>

<template>
  <section class="pick-container">
    <RouterLink :to="'/pick/' + index" v-for="(item, index) in rps" :key="item" :class="'pick-icon-' + item + ' color-' + item">
      <Icon :class="'pick-icon-' + item + '-svg'" :name="'icon-' + item"/>
    </RouterLink>
    <img class="pick-container-background" src="@/assets/bg-pentagon.svg">
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
    border-radius: rem(100);
    color: $blue;
    &::after{
      content:"";
      position:absolute;
      width: rem($rpsIconBgWidth);
      height: rem($rpsIconBgWidth);
      left: 10px;
      top: 10px;
      background: white;
      border-radius: 100px;
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
      margin: rem(150) auto 0 auto;
      &-background{
        width: rem(400);
      }
    }
    &-icon{
      &-paper{
        @include rpsLinkStyle(90px, unset, calc(($rpsIconWidth / 4) * -1px), unset);
      }
      &-lizard{
        @include rpsLinkStyle(unset, 0, unset, calc(($rpsIconWidth / 4) * -1px));
      }
      &-spock{
        @include rpsLinkStyle(90px, calc(($rpsIconWidth / 4) * -1px), unset, unset);
      }
      &-scissors{
        @include rpsLinkStyle(calc(($rpsIconWidth / 4) * -1px), calc(50% - ($rpsIconWidth / 2) * 1px), unset, unset);
      }
      &-rock{
        @include rpsLinkStyle(unset, unset, 0, calc(($rpsIconWidth / 4) * -1px));
      }
    }
  }
</style>