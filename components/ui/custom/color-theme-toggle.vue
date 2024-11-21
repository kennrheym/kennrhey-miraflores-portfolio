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
        transition: justify-content 0.2s;
    }

    .light-mode {
        background-color: white;
        & > .ball {
            color: orange;
        }
    }

    .dark-mode {
        justify-content: flex-end !important;
        background-color: rgb(114, 110, 110) !important;
        & > div.ball {
            background-color: black !important;
        }
    }

    .ball {
        margin-inline: 3px;
        height: 18px;
        width: 18px;
        background-color: orange;
        border-radius: 9px;
    }
</style>