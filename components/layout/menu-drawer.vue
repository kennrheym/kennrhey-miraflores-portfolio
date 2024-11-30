<script setup lang='ts'>
const isOpen = defineModel('isOpen', {
    type: Boolean,
    default: false,
    required: true
})

</script>

<template>
    <div>
        <div class="drawer" :class="{'drawer--open': isOpen }">
            <div id="top-row">
                <div id="container--icon-menu" class="clickable" @click="isOpen=false">
                    <img src="/assets/svg/icon--menu.svg" />
                </div>
            </div>
        </div>
        <div  v-if="isOpen" class="overlay">
        </div>
    </div>
</template>

<style lang='scss' scoped>

#top-row {
    @include main.flex--all-centered; 
    justify-content: flex-start;
    height: 56px;
    padding-inline: 16px;
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
  z-index: 10000;
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