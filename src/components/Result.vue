<script setup lang="ts">
    import Icon from './Icon.vue';
    import Button from './Button.vue';
    import { ref } from 'vue'

    import { rps } from '../constants';
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const pickedId = parseInt(route.params.id);
    const pickedItem = rps[pickedId];
    const randomId = Math.floor(Math.random() * 3);
    const randomPicked = rps[randomId];

    const finalScoreState = ref('');

    switch (true) {
    case pickedId == randomId + 1 || pickedId == 0 && randomId == 2:
        finalScoreState.value = 'you loose'
        break;
    case pickedId + 1 == randomId || pickedId == 2 && randomId == 0:
        finalScoreState.value = 'you win'
        break;
    default:
        finalScoreState.value = 'it\'s a tie'

    console.log(finalScoreState)

}
    
</script>

<template>
    <section class="result-container">
        <div>
            <p>You picked <span>{{ pickedItem }}</span></p>
            <div :class="'pick-icon-' + pickedItem + ' color-' + pickedItem">
                <Icon :class="'pick-icon-' + pickedItem + '-svg'" :name="'icon-' + pickedItem"/>
            </div>
        </div>
        <div>
            <p>{{finalScoreState}}</p>
            <Button link="/">Play again</Button>
        </div>
        
        <div>
            <p>The house picked <span>{{ randomPicked }}</span></p>
            <div :class="'pick-icon-' + randomPicked + ' color-' + randomPicked">
                <Icon :class="'pick-icon-' + randomPicked + '-svg'" :name="'icon-' + randomPicked"/>
            </div>
        </div>
    </section>
    
    
</template>

<style scoped lang="scss">
  @mixin rpsLinkStyle($top, $left, $right, $bottom){
    position: relative;
    width: rem(200);
    height: rem(200);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: rem(100);
    color: $blue;
    &::after{
      content:"";
      position:absolute;
      width: 160px;
      height: 160px;
      left: 20px;
      top: 20px;
      background: white;
      border-radius: 80px;
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
      &-rock{
        @include rpsLinkStyle(calc((200 / 4) * -1px), calc((200 / 4) * -1px), unset, unset);
      }
      &-paper{
        @include rpsLinkStyle(calc((200 / 4) * -1px), unset, calc((200 / 4) * -1px), unset);
      }
      &-scissors{
        @include rpsLinkStyle(unset, calc(50% - (200 / 2) * 1px), unset, 0);
      }
    }
  }

  .result-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin : 100px auto 0 auto;
    max-width: 500px;
  }
</style>