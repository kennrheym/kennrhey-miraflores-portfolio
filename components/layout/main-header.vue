<script setup lang="ts">
import ColorThemeToggle from '../ui/custom/color-theme-toggle.vue';

</script>

<template>
    <header>
        <div style="justify-content: space-between;">
            <div>
                12
            </div>

            <div style="margin-right: 50px;">
                <color-theme-toggle>
                </color-theme-toggle>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        color: white;
        background: main.$app-background--black;
        height: 50px;
        & > div {
            height: 34px;
            @include main.flex--all-centered; 
            padding: 8px;
        }
    }
</style>