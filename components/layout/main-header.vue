<script setup lang="ts">
// import { ref } from 'vue';
import ColorThemeToggle from '../ui/custom/color-theme-toggle.vue';
import MenuDrawer from './menu-drawer.vue';

enum EColorTheme {
    LIGHT,
    DARK
}

const isMenuOpen = ref(false)

const colorTheme = ref("")
</script>

<template>
    <header class="fixed--top" style="width: 100%;">
        <div style="justify-content: space-between; padding-inline: 16px;">
            <div id="header--start">
                <div id="container--icon-menu" class="clickable" @click="isMenuOpen=true">
                    <img src="/assets/svg/icon--menu.svg" />
                </div>
                <div style="margin-left: 6px;">
                    KennM
                </div>
            </div>
            <div>
                <color-theme-toggle>
                </color-theme-toggle>
            </div>
        </div>
        <menu-drawer v-model:is-open="isMenuOpen"></menu-drawer>
    </header>
</template>

<style scoped lang="scss">
    #header--start {
        @include main.flex--all-centered; 
    }
    .fixed--top {
        position: fixed; 
        top: 0; 
    }

    #container--icon-menu {
        height: 36px;
        width: 36px;
        border-radius: 18px;
        &:hover {
            background-color: rgba($color: #FFF, $alpha: 0.15);
        }
        @include main.flex--all-centered; 

    }

    header {
        color: white;
        background-color: main.$app-background--black;
        height: 56px !important;
        box-shadow: 0.1px 0.1px #e5dede;
        & > div {
            height: 40px;
            @include main.flex--all-centered; 
            padding: 8px;
        }
    }
</style>