<script setup lang="ts">
</script>

<template>
    <div id="carrousel-container">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div>
            <div>

            </div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
        </div>
    </div>

</template>
<style lang="scss">
    #carrousel-container {
        @include main.flex--all-centered;
        display: flex;
        flex-direction: row;
    }
</style>