<script setup lang="ts">
  import { ref } from 'vue';
import { rps } from '../constants';
  import Icon from './Icon.vue'

  //State
  const rpsIconWidthNumber = ref(0)
  const rpsIconWidth = ref()
  const rpsIconBgWidthNumber = ref()
  const rpsIconBgWidth = ref()
  const rpsIconTop = ref()

  function changeSize(baseSize:number, rpsTop:number){
    rpsIconWidthNumber.value = baseSize
    rpsIconWidth.value = `${rpsIconWidthNumber.value}px`
    rpsIconBgWidthNumber.value = rpsIconWidthNumber.value - 20;
    rpsIconBgWidth.value = `${rpsIconBgWidthNumber.value}px`
    rpsIconTop.value = `${rpsTop}px`
  }

  function changeRpsSize(){
    if(window.innerWidth < 1280){
      changeSize(100, 60)
    }
    else{
      changeSize(150, 90)
    }
  }

  changeRpsSize()

  window.addEventListener('resize', () => {
    changeRpsSize()
  })

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
    width: v-bind(rpsIconWidth);
    height: v-bind(rpsIconWidth);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: rem(100);
    color: $blue;
    box-shadow: inset -1px -4px rgba(0, 0, 125, 0.2);
    &::after{
      content:"";
      position:absolute;
      width: v-bind(rpsIconBgWidth);
      height: v-bind(rpsIconBgWidth);
      left: 10px;
      top: 10px;
      background: white;
      border-radius: 100px;
      box-shadow: inset 1px 4px rgba(0, 0, 125, 0.2);
      transition: .3s ease;
    }
    &-svg{
      z-index: 2;
      transition: .3s ease;
    }
    &:hover{
      &::after{
        box-shadow: inset 4px 8px rgba(0, 0, 125, 0.2);
        transform: scale(0.99);
      }
      & .icon{
        transform: scale(0.90);
      }
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
        width: rem(280);
        @media screen and (min-width: 1280px) {
          width: rem(400);
        }
      }
    }
    &-icon{
      &-paper{
        @include rpsLinkStyle(v-bind(rpsIconTop), unset, calc((v-bind(rpsIconWidthNumber) / 4) * -1px), unset);
      }
      &-lizard{
        @include rpsLinkStyle(unset, 0, unset, calc((v-bind(rpsIconWidthNumber) / 4) * -1px));
      }
      &-spock{
        @include rpsLinkStyle(v-bind(rpsIconTop), calc((v-bind(rpsIconWidthNumber) / 4) * -1px), unset, unset);
      }
      &-scissors{
        @include rpsLinkStyle(calc((v-bind(rpsIconWidthNumber) / 4) * -1px), calc(50% - (v-bind(rpsIconWidthNumber) / 2) * 1px), unset, unset);
      }
      &-rock{
        @include rpsLinkStyle(unset, unset, 0, calc((v-bind(rpsIconWidthNumber) / 4) * -1px));
      }
    }
  }
</style>