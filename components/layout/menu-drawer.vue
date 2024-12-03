<script setup lang='ts'>
import { ScreenEnum } from '../enums/common-enum';


const isOpen = defineModel('isOpen', {
    type: Boolean,
    default: false,
    required: true
})

// const selectedScreen = defineModel('selectedScreen', {
//     type: Boolean,
//     default: false,
//     required: true
// })

const modalContentRef: Ref<HTMLDivElement|null> = ref(null)

const handleModalClick = (event: MouseEvent) => {
    if (modalContentRef.value && !modalContentRef.value.contains(event.target as Node)) {
        isOpen.value = false
    } 
}

const setActiveScreen = (selectedScreen: ScreenEnum) => {
    activeScreen.value = selectedScreen
    isOpen.value = false
}

const activeScreen: Ref<ScreenEnum> = useState('activeScreen')

</script>

<template>
    <div>
        <div class="drawer" :class="{'drawer--open': isOpen }" ref="modalContentRef">
            <div id="top-row">
                <div id="container--icon-menu" class="clickable" @click="isOpen=false">
                    <img src="/assets/svg/icon--menu.svg" />
                </div>
                <div class="logo clickable" style="margin-left: 6px;" @click="setActiveScreen(ScreenEnum.MAIN_CONTENT)">KennM</div>
            </div>
            <div class="menu-option clickable" style="position: relative;" @click="setActiveScreen(ScreenEnum.COMPONENT_SCREEN)">
                <img src="/assets/png/tech/CSS3.png" style="height: 24px; width: 24px; margin-right: 10px;">
                My components
            </div>
            <div class="divider"></div>
        </div>
        <div  v-if="isOpen" class="overlay" @click="handleModalClick">
        </div>
    </div>
</template>

<style lang='scss' scoped>

.logo {
    &:hover {
        color: main.$app--color--green;
    }
}

.sub-menu {
    position: absolute;
    top: 0;
    left: 100%;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    background-color: #333;
}
.sub-menu-option {
    @include main.flex--all-centered; 
    height: 56px;
    border-radius: 5px;
    &:hover {
        color: #ace5cb;
        background-color: rgba($color: #EFEFF1, $alpha: 0.15);
    }
    border-bottom: 1px solid rgba($color: #FFF, $alpha: 0.1) ;
}

.menu-option {
    @include main.flex--all-centered; 
    justify-content: flex-start;
    padding-left: 24px;
    height: 56px;
    & ul {
        display: none;
    }
    &:hover {
        color: #ace5cb;
        background-color: rgba($color: #EFEFF1, $alpha: 0.15);
        & ul {
            display: block;
        }
    }
}

.divider {
    width: 100%;
    background-color: white;
    height: 0.5px;
    opacity: 0.15;
}

#top-row {
    @include main.flex--all-centered; 
    justify-content: flex-start;
    height: 56px;
    padding-inline: 16px;
    border-bottom: 1px solid rgba($color: #FFF, $alpha: 0.15);
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

.drawer {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: left 0.2s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1001;
}

.drawer--open {
    left: 0 !important;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>