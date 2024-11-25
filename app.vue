<script setup lang="ts">
import FixedMainHeader from '@/components/layout/main-header.vue'
import MainContent from './components/layout/main-content.vue';
</script>

<template>
  <div>
    <fixed-main-header></fixed-main-header>
    <main style="padding-inline: 16px;">
      <div class="flex--all-centered" style="margin-top: 56px;">
        <div style="padding-top: 20px;">
          <main-content></main-content>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">

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
    height: calc(100vh - 56px);
    background-color: transparent;
    background: linear-gradient(0, white, #121212);
    & > div {
      // background-color: main.$app-dark-mode--background-color;
      background-color: transparent;
    }
  }

</style>
