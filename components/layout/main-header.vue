<script setup lang="ts">
import ColorThemeToggle from '../ui/custom/color-theme-toggle.vue';

</script>

<template>
    <header class="fixed--top" style="width: 100%;">
        <div style="justify-content: space-between; padding-inline: 16px;">
            <div id="container--icon-menu" class="clickable">
                <img src="/assets/svg/icon--menu.svg" />
            </div>

            <div>
                <color-theme-toggle>
                </color-theme-toggle>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .fixed--top {
        position: fixed; 
        top: 0; 
    }

    #container--icon-menu {
        height: 36px;
        width: 36px;
        border-radius: 18px;
        // opacity: 0.1;
        &:hover {
            background-color: rgba($color: #FFF, $alpha: 0.15);

        }
        @include main.flex--all-centered; 

    }

    header {
        color: white;
        background-color: main.$app-background--black;
        height: 56px !important;
        & > div {
            height: 34px;
            @include main.flex--all-centered; 
            padding: 8px;
        }
    }
</style>