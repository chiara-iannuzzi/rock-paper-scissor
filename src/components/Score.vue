<script setup lang="ts">
    const props = defineProps({
        score: Number
    })
</script>

<template>
    <div class="score-container">
        <h1 class="score-title">Rock<br>Paper<br>Scissor<br>Lizard<br>Spock</h1>
        <div class="score-count-container">
            <p>Score</p>
            <p class="score-count">{{ score }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .score{
        &-container{
            border-radius: 5px;
            border: 1px solid white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 500px;
            margin: auto;
            padding: rem(10) rem(20);
        }
        &-title{
            font-size: rem(18);
            line-height: 1;
            text-transform: uppercase;
            color: white;
            font-weight: bold;
        }
        &-count{
            font-size: 20px;
            font-weight: bold;
            &-container{
                background: white;
                color: $blue;
                padding: rem(10);
                min-width: rem(100);
                text-align: center;
                border-radius: rem(10);
            }
        }
    }

</style>