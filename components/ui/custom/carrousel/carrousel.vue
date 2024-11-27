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

</script>

<template>
    <div id="carrousel-container">
        <div class="arrow-container clickable">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div id="carrousel-card-container">
            <div style="margin-bottom: 6px;"> {{ cardTitle }} </div>
            <slot name="card"></slot>
            <div id="card-position-circle-container">
                <div v-for="index in dataCount" class="card-position-circle clickable"></div>
            </div>
        </div>
        <div class="arrow-container clickable">
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

    .arrow-container {
        background-color: transparent;
        &:hover {
            background: #cfe3cd;
            & svg {
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
        opacity: 1;
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