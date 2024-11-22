<script setup lang="ts">
import FixedMainHeader from '@/components/layout/main-header.vue'
</script>

<template>
  <div>
    <fixed-main-header></fixed-main-header>
    <main>
      <div style="background-color: #121212;" >
        <!-- <div style="background-color: red; height: 200px;"></div>
        <div style="background-color: blue; height: 200px;"></div>
        <div style="background-color: red; height: 200px;"></div>
        <div style="background-color: blue; height: 200px;"></div>
        <div style="background-color: red; height: 200px;"></div>
        <div style="background-color: blue; height: 200px;"></div> -->

      </div>
    </main>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<style lang="scss">
  html {
    background-color: main.$app-light-mode--background-color;
  }

</style>
