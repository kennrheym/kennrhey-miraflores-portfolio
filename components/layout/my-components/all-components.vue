<script setup lang='ts'>
import ButtonGroup from './button-group.vue';
import InputGroup from './input-group.vue';
</script>

<template>
    <div>

        <button-group></button-group>
        <input-group></input-group>
        <div class="component-group-container">
            <div id="input-group">
                <div class="title"> Input </div>
            </div>
        </div>
        <div class="component-group-container">

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
    }

    .title {
        color: main.$app--color--blue;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    #button-group {
        @include main.flex--all-centered;
        & div {
            margin-right: 10px;
        }
    }
</style>