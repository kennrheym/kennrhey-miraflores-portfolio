<script setup lang="ts">
import Carrousel from '../ui/custom/carrousel/carrousel.vue';

Carrousel
</script>

<template>
    <div id="main-content-container">
        <div style="margin-left: 6px;">
            <div style="font-size: 48px;">
                <div>Hi, my</div>
                <div>name is <span style="color: #ace5cb">Kennrhey</span></div>
            </div>
            <div style="margin-top: 22px;" >
                <div style="font-size: 20px;">
                    I'm a full-stack web developer
                </div>
                <div style="font-size: 13px; margin-top: 5px;">
                    <div>
                        And I'm really passionate with...
                    </div>
                    <div>
                        Creating front-end components, and implementing business logic
                    </div>   
                </div>
            </div>
        </div>
        <div style="margin-left: 100px;">
            <carrousel></carrousel>
        </div>
    </div>

</template>

<style lang="scss">
    #main-content-container {
        @include main.flex--all-centered;
        display: flex;
        flex-direction: row;
    }

</style>