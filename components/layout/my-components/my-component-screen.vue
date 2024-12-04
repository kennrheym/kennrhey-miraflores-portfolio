<script setup lang='ts'>
import AllComponents from './all-components.vue';
import ButtonGroup from './button-group.vue';

enum ComponentEnum {
    All = 'all',
    Button = 'button',
    Carrousel = 'carrousel',
    Card = 'card',
    Divider = 'divider',
    Dropdown = 'dropdown',
    Drawer = 'drawer',
    Input = 'input',
    Loader = 'loader',
    Navigation = 'navigation',
    PopUp = 'popup',
    Slider = 'slider',
    Table = 'table',
    Toggle = 'toggle'
}

const currentComponentScreen = ref(ComponentEnum.All)
const setCurrentComponentScreen  = (screen: ComponentEnum) => {
    currentComponentScreen.value = screen
}
</script>

<template>
    <div id="screen-container">
        <div id="component-selection-container">
            <div id="selection-title" class="clickable" @click="setCurrentComponentScreen(ComponentEnum.All)">  My Components </div>

            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Button)">     Button      </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Carrousel)">  Carrousel   </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Card)">       Card        </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Divider)">    Divider     </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Drawer)">   Drawer    </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Dropdown)">   Dropdown    </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Input)">      Input       </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Loader)">     Loader      </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Navigation)"> Navigation  </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.PopUp)">      Pop-up      </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Slider)">     Slider      </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Table)">      Table       </div>
            <div class="component-label-container" @click="setCurrentComponentScreen(ComponentEnum.Toggle)">     Toggle      </div>

        </div>
        <div id="component-display-container">
            <div>
                <!-- <Transition> -->
                <all-components v-if="currentComponentScreen==ComponentEnum.All"></all-components>
                <button-group v-else-if="currentComponentScreen==ComponentEnum.Button"></button-group>
                <div v-else></div>
                <!-- </Transition> -->
            </div>

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
        & > div {
            @include main.flex--all-centered;
            height: 96%;
            width: 98%;;
            background-color: rgba($color: main.$app--background--black, $alpha: 0.1);
            border-radius: 10px;
        }
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