<script setup lang='ts'>
</script>

<template>
    <footer style="">
        <div>
            <img src="/assets/png/tech/HTML5.png" style="margin-left: 0;">
            <img src="/assets/png/tech/CSS3.png">
            <img src="/assets/png/tech/Sass.png">

            <div class="icon-separator"></div>

            <img src="/assets/png/tech/Javascript.png">
            <img src="/assets/png/tech/jQuery.png">
            <img src="/assets/png/tech/React.png">
            <img src="/assets/png/tech/Vue.js.png">

            <div class="icon-separator"></div>

            <img src="/assets/png/tech/PHP.png">
            <img src="/assets/png/tech/Laravel.png">

            <div class="icon-separator"></div>

            <img src="/assets/png/tech/Python.png">
            <img src="/assets/png/tech/Django.png">

            <div class="icon-separator"></div>

            <img src="/assets/png/tech/Kotlin.png">

            <div class="icon-separator"></div>

            <img src="/assets/png/tech/MySQL.png">
            <img src="/assets/png/tech/PostgresSQL.png" style="margin-right: 0;">

        </div>
    </footer>
</template>

<style lang='scss' scoped>
    footer {
        @include main.flex--all-centered;
        background-color: main.$app--background--black;
        opacity: 0.9;
        width: 100%;
        height: 40px; 
        position: fixed; 
        bottom: 0; 
        box-shadow: 0.1px 0.1px #e5dede;
        & > div {
            @include main.flex--all-centered;
            justify-content: space-between;
            height: inherit;
            width: 1100px;
        }
        & img {
            height: 30px;
            width: 30px;
            margin-inline: 10px;
        }
    }

    .icon-separator {
        height: 4px;
        width: 4px;
        background-color: #FFF;
        border-radius: 2px;
        margin-inline: 20px;
    }
    
</style>

