<script setup lang="ts">

const isDarkTheme = ref(true)

</script>
<template>
    <div id="theme-color-toggle-container" class="clickable" :class="[ isDarkTheme ? 'dark-mode' : 'light-mode']" @click="isDarkTheme = !isDarkTheme">
        <div class="ball">

        </div>
    </div>

</template>
<style lang="scss" scoped>
    #theme-color-toggle-container {
        @include main.flex--all-centered;
        justify-content: flex-start;
        background-color: aliceblue;
        width:  60px;
        height: 24px;
        border-radius: 12px;
        &.light-mode:hover > div.ball{
            transition: border-color 0.1s;
            border-radius: 14px;
            border: solid #FFE484 5px;
            margin-inline: -2px;
        }
        &.dark-mode:hover > div.ball{
            transition: border-color 0.1s;
            border-radius: 14px;
            border: solid #484849 5px;
            margin-inline: -2px;
        }
    }

    .light-mode {
        transition: justify-content 1s;
        justify-content: flex-start !important;
        background-color: white;
        & > div.ball {
            background-color: #FFCC33;
        }
    }

    .dark-mode {
        transition: justify-content 1s;
        justify-content: flex-end !important;
        background-color: rgb(114, 110, 110) !important;
        & > div.ball {
            background-color: #151211 !important;
        }
    }

    .ball {
        margin-inline: 3px;
        height: 18px;
        width: 18px;
        background-color: orange;
        border-radius: 9px;
        // &:hover {
            // border-radius: 12px;
            // border: solid blue 4px;
            // margin-inline: 0;
        // }
    }
</style>