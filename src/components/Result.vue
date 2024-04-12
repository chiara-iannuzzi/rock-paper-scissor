<script setup lang="ts">
    import Icon from './Icon.vue';
    import Button from './Button.vue';
    import CircleAnimation from './CircleAnimation.vue';
    import { ref } from 'vue'
    
    import { store } from '../store';

    import { rps } from '../constants';
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const pickedId = parseInt(route.params.id[0]);
    const pickedItem = rps[pickedId];
    const randomId = Math.floor(Math.random() * 5);
    const randomPicked = rps[randomId];

    const finalScoreState = ref('');
    const finalScoreWhoWin = ref();

    switch (true) {
    case pickedId == randomId + 1 || pickedId == 0 && randomId == 4:
        finalScoreState.value = 'you loose'
        finalScoreWhoWin.value = 0
        setTimeout(() => {
          store.score--
        }, 2000)
        break;
    case pickedId + 1 == randomId || pickedId == 4 && randomId == 0:
        finalScoreState.value = 'you win'
        finalScoreWhoWin.value = 1
        setTimeout(() => {
          store.score++
        }, 2000)
        break;
        case pickedId == 3 && randomId == 0 || pickedId == 4 && randomId == 1 || pickedId == 0 && randomId == 2 || pickedId == 1 && randomId == 3 || pickedId == 2 && randomId == 4 :
        finalScoreState.value = 'you loose'
        finalScoreWhoWin.value = 0
        setTimeout(() => {
          store.score--
        }, 2000)
        break;
    case pickedId == 0 && randomId == 3 || pickedId == 1 && randomId == 4 || pickedId == 2 && randomId == 0 || pickedId == 3 && randomId == 1 || pickedId == 4 && randomId == 2 :
        finalScoreState.value = 'you win'
        finalScoreWhoWin.value = 1
        setTimeout(() => {
          store.score++
        }, 2000)
        break;
    default:
        finalScoreState.value = 'it\'s a tie'
        finalScoreWhoWin.value = null


}
    
</script>

<template>
    <section class="result-container">
        <div class="result-choice">
            <p class="result-choice-title">You picked</p>
            <div :class="'pick-icon-' + pickedItem + ' color-' + pickedItem">
                <Icon :class="'pick-icon-' + pickedItem + '-svg'" :name="'icon-' + pickedItem"/>
            </div>
            <CircleAnimation class="" :class="{'is-showing' : finalScoreWhoWin == 1}"></CircleAnimation>
        </div>
        <div class="result-middle">
            <p class="result-middle-title">{{finalScoreState}}</p>
            <Button theme="primary" link="/">Play again</Button>
        </div>
        
        <div class="result-choice">
            <p class="result-choice-title">The house picked</p>
            <div class="house-choice-placeholder"></div>
            <div :class="'house-choice pick-icon-' + randomPicked + ' color-' + randomPicked">
                <Icon :class="'pick-icon-' + randomPicked + '-svg'" :name="'icon-' + randomPicked"/>
            </div>
            <CircleAnimation class="" :class="{'is-showing' : finalScoreWhoWin == 0}"></CircleAnimation>
        </div>
    </section>
    
    
</template>

<style scoped lang="scss">
  @mixin rpsLinkStyle(){
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
        @include rpsLinkStyle;
      }
      &-paper{
        @include rpsLinkStyle;
      }
      &-scissors{
        @include rpsLinkStyle;
      }
      &-lizard{
        @include rpsLinkStyle;
      }
      &-spock{
        @include rpsLinkStyle;
      }
    }
  }

  .circle-container{
      position:absolute;
      bottom: 0;
      opacity: 0;
      width:200px;
      height:200px;
      z-index: -1;
      &.is-showing{
          animation: fadeIn .1s 1.5s both;
      }
  }

  .result{
    &-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin : 100px auto 0 auto;
      max-width: 500px;
      animation: containerSpacing .4s 2s ease both;
    }
    &-middle{
      animation: fadeIn .6s 2.3s ease both;
      text-align: center;
      &-title{
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: rem(15);
      }
    }
    &-choice{
      position:relative;
      &-title{
        margin-bottom: 20px;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
      }
    }
  }

  .house-choice{
    animation: fadeIn .3s 1s both;
    &-placeholder{
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 100px;
      position: absolute;
    }
  }

  @keyframes containerSpacing {
    from{ max-width: 500px; }
    to{ max-width: 700px; }
  }

  @keyframes fadeIn {
    from{ opacity: 0 }
    to{ opacity: 1 }
  }

</style>