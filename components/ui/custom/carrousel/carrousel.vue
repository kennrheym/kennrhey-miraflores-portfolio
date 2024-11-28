<script setup lang="ts">

const activeCardIndex = defineModel('activeCardIndex', {
    type: Number,
    default: 0,
    required: true

})

const dataCount = defineModel('dataCount', {
    type: Number,
    default: 1,
    required: true

})

const cardTitle = defineModel('cardTitle', {
    type: String,
    default: "",
    required: false
})

const changeActiveCardIndex = (nextIndex: number) => {
    if (nextIndex > dataCount.value - 1 || nextIndex < 0) {
        return
    }

    activeCardIndex.value = nextIndex
}

</script>

<template>
    <div id="carrousel-container">
        <div class="arrow-container clickable" @click="changeActiveCardIndex(activeCardIndex - 1)" :class="{'arrow--inactive': activeCardIndex <= 0}">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div id="carrousel-card-container">
            <div style="margin-bottom: 6px;"> {{ cardTitle }} </div>
            <slot name="card"></slot>
            <div id="card-position-circle-container">
                <div v-for="index in dataCount" class="card-position-circle clickable" :class="{ 'active-card-circle': activeCardIndex == index - 1 }" @click="changeActiveCardIndex(index-1)">
                </div>
            </div>
        </div>
        <div class="arrow-container clickable" @click="changeActiveCardIndex(activeCardIndex + 1)" :class="{'arrow--inactive': activeCardIndex >= dataCount - 1}">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    #carrousel-container {
        @include main.flex--all-centered;
        display: flex;
        flex-direction: row;
    }

    .arrow--inactive {
        pointer-events: none !important;
        opacity: 0.2 !important;
    }

    .arrow-container {
        background-color: transparent;
        &:hover {
            // background: #cfe3cd;
            & svg {
                width: 100;
                height: 100;
                stroke: #ace5cb;
            }
        }
        border-radius: 14px;
        margin-inline: 10px;
    }

    #carrousel-card-container {
        @include main.flex--all-centered;
        flex-direction: column;
        background-color: transparent;
    }

    #card-position-circle-container {
        @include main.flex--all-centered;
        margin-top: 10px;
        height: 14px;
    }

    .active-card-circle {
        opacity: 1 !important;
        background-color: #c3f1dc !important;
    }

    .card-position-circle {
        height: 10px;
        width: 10px;
        border-radius: 5px;
        background-color: #FFF;
        margin-inline: 10px;
        opacity: 0.3;
        &:hover {
            height: 14px;
            width: 14px;
            border-radius: 7px;
            opacity: 1;
            margin-inline: 8px;

        }

    }
</style>