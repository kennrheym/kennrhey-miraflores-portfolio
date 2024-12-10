<script setup lang="ts">
import FixedMainHeader from '@/components/layout/main-header.vue'
import MainContent from './components/layout/main-content.vue';
import MainFooter from './components/layout/main-footer.vue';
import MyComponentScreen from './components/layout/my-components/my-component-screen.vue';
import { ScreenEnum } from './components/enums/common-enum';

const activeScreen =  useState('activeScreen', () => ScreenEnum.MAIN_CONTENT)
</script>

<template>
  <div>
    <fixed-main-header></fixed-main-header>
    <main style="justify-content: center;">
        <my-component-screen v-if="activeScreen==ScreenEnum.COMPONENT_SCREEN"/>
        <div  v-else class="flex--all-centered" style="margin-top: 56px;">
          <div style="padding-top: 20px;">
            <main-content/>
          </div>
        </div>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<style lang="scss" scoped>

  .test-container {
    @include main.flex--all-centered;
    height: 30px; 
    width: 30px;
    background-color: transparent;
    border-radius: 15px;
    &:hover {
      transition: background-color 0.3s;
      background-color: rgba($color: rgb(227, 227, 7), $alpha: 0.5);
    }
  }

  html {
    background-color: main.$app-dark-mode--background-color;
    // background: linear-gradient(0, white, #121212);

  }

  main {
    display: flex;
    align-items: center;
    overflow: auto;
    height: 100vh;
    // height: calc(100vh - 56px);
    background-color: transparent;
    background:  radial-gradient(#121212, rgb(58 66 87)); // radial-gradient(#121212, rgb(73 84 112)); //radial-gradient(#000000, #495470f5); // 
    & > div {
      // background-color: main.$app-dark-mode--background-color;
      background-color: transparent;
    }
  }

</style>
