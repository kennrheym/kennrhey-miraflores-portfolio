<script setup lang='ts'>
import AppButton from '~/components/ui/custom/common/button.vue';

</script>
<template>
    <div class="component-group-container">
        <div class="title"> Buttons </div>
        <div id="button-group">
            <app-button :text="'CONTAINED'"></app-button>
            <app-button :text="'OUTLINED'" :variant="'outlined'"></app-button>
            <app-button :text="'DISABLED'" :variant="'disabled'"></app-button>
        </div>
    </div>

</template>
<style lang='scss' scoped>
    .component-group-container {
        @include main.flex--all-centered;
        flex-direction: column;
        padding: 20px;
        background: white;
        border-radius: 5px;
        margin: 10px;
        box-shadow: 3px 2px 4px 0px #121212;

    }

    #button-group {
        @include main.flex--all-centered;
        & div {
            margin-right: 10px;
        }
    }

    .title {
        color: main.$app--color--blue;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
    }
</style>