<script setup lang="ts">
import FixedMainHeader from '@/components/layout/main-header.vue'
</script>

<template>
  <div>
    <fixed-main-header></fixed-main-header>
    <main>
      <div class="flex--all-centered">
        <div>
          <paragraph> Hi, my name is Kennrhey! I'm a full-stack developer</paragraph>
        </div>
        <div>

          <div class="test-container">
            <div class="test" style="background-color: white; height: 20px; width: 20px; border-radius: 10px;">
              
            </div>
          </div>
        </div>

      </div>
    </main>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
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
  }

  main {
    margin-top: 56px;
    & > div {
      background-color: main.$app-dark-mode--background-color;
    }
  }

</style>
