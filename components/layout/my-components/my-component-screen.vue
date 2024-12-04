<script setup lang='ts'>
import AllComponents from './all-components.vue';
</script>

<template>
    <div id="screen-container">
            <div id="component-selection-container">
                <div id="selection-title" class="clickable"> My Components </div>

                <div class="component-label-container"> Button </div>
                <div class="component-label-container"> Carrousel</div>
                <div class="component-label-container"> Card</div>
                <div class="component-label-container"> Dropdown</div>
                <div class="component-label-container"> Divider</div>
                <div class="component-label-container"> Input </div>
                <div class="component-label-container"> Navigation</div>
                <div class="component-label-container"> Slider</div>
                <div class="component-label-container"> Table</div>
                <div class="component-label-container"> Toggle</div>

            </div>
            <div id="component-display-container">
                <all-components></all-components>
            </div>
    </div>
</template>

<style lang='scss' scoped>
    #screen-container{
        @include main.flex--all-centered;
        width: 100vw;
        height: calc(100vh - 94px);
        margin-top: 16px;
        font-size: 14px;
        font-weight: 400;
        background: linear-gradient(0, rgba($color: #121212, $alpha: 0.2), #121212);
    }

    #component-selection-container {
        background-color: inherit;
        width: 200px;
        height: calc(100vh - 94px);
        border-left: 1.5px solid rgba($color: #FFF, $alpha: 0.1);
        margin-left: 2px;
        overflow: auto;
        // padding-right: 12px;

        ::-webkit-scrollbar {
            width: 9px;
        }
    }

    #selection-title {
        font-size: 16px; 
        padding-left: 20px; 
        padding-top: 20px; 
        padding-bottom: 20px;
        border-bottom: 1px solid rgba($color: #FFF, $alpha: 0.1);
        &:hover {
            color: main.$app--color--green;
        }
    }
    
    #component-display-container {
        @include main.flex--all-centered;
        background-color: inherit;
        flex-grow: 1;
        height: 100%;
        border-left: 1.5px solid rgba($color: #FFF, $alpha: 0.1);
        overflow: auto;
    }

    .component-label-container {
        @include main.flex--all-centered;
        justify-content: flex-start;
        padding-left: 20px;
        flex-grow: 1;
        height: 30px;
        margin-block: 5px;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
            border-left: 1px solid rgba($color: main.$app--color--green, $alpha: 1);
            border-radius: 0px 6px 6px 0px ;
            background-color: rgba($color: #3d5b3f, $alpha: 0.2);
        }
    }
</style>