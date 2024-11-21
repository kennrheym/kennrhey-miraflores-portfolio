<script setup lang="ts">
import ColorThemeToggle from '../ui/custom/color-theme-toggle.vue';

</script>

<template>
    <header class="fixed--top" style="width: 100%;">
        <div style="justify-content: space-between; padding-inline: 16px;">
            <div>
                12
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