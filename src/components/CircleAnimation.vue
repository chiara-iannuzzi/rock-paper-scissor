<template>
    <div class="circle-container">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="circle-4"></div>
    </div>
    
</template>

<style lang="scss">
    @for $i from 1 through 4 {
        .circle-#{$i} {
            position:absolute;
            top: 50px;
            left: 50px;
            border-radius: 50px;
            width : 100px;
            height: 100px;
            background: white;
            animation: pulseCircle 12s #{($i - 1) * 4}s linear infinite;
        }
    }
    @keyframes pulseCircle {
        from{ 
            opacity: 0.1;
            transform: scale(1);
        }
        to{ 
            opacity: 0;
            transform: scale(5);
        }
    }
</style>