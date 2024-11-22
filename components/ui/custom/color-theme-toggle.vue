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
        width:  36px;
        height: 14px;
        border-radius: 12px;
        &.light-mode:hover > div.ball{
            transition: border-color 0.1s;
            border-radius: 14px;
            border: solid rgba(255, 228, 132, 0.5) 5px;
            margin-inline: -4px;
        }
        &.dark-mode:hover > div.ball{
            transition: border-color 0.1s;
            border-radius: 14px;
            border: solid #484849 5px;
            margin-inline: -4px;
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
        margin-inline: 1px;
        height: 12px;
        width: 12px;
        background-color: orange;
        border-radius: 6px;
        // &:hover {
            // border-radius: 12px;
            // border: solid blue 4px;
            // margin-inline: 0;
        // }
    }
</style>