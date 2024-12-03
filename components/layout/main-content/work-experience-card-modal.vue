<script setup lang='ts'>
import modal from '~/components/ui/custom/common/modal.vue';
import type { ICardData } from '../main-content.vue';

const isCardModalVisible = defineModel('isCardModalVisible', {
    type: Boolean,
    default: false,
    required: true
})

const cardData = defineModel('cardData', {
    type: Object as PropType<ICardData>,
    default: {},
    required: true
})
const isContributionDetailsCollapsed = ref(false)
const isTechDetailsCollapsed = ref(true)

watch(isCardModalVisible, (newValue) => {
    if (!newValue) {
        isContributionDetailsCollapsed.value = false
        isTechDetailsCollapsed.value = true
    }
})



</script>
<template>
    <modal v-if="isCardModalVisible" v-model:is-modal-visible="isCardModalVisible">
        <template #modal-content>
            <div style="background-color: #f7f2ff; height: fit-content; width: 800px; border-radius: 10px;">
                <div class="modal-content" style="height: fit-content; width: 760px; padding: 20px;">
                    <div class="content-container">
                        <div class="content-header"> 
                            <div class="container--icon-arrow clickable" @click="isContributionDetailsCollapsed=!isContributionDetailsCollapsed">
                                <img src="/assets/svg/icon--up-arrow.svg" :class="{'img--inverted' : !isContributionDetailsCollapsed}"/>
                            </div>
                            Contributions
                        </div>
                        <transition name="fade">
                            <div v-if="!isContributionDetailsCollapsed" class="content-body">
                                <div v-for="contribution in cardData.contribution" style="padding-left: 10px; margin-bottom: 6px;">{{ contribution }}</div>
                            </div>
                        </transition>
                    </div>
                    
                    <div class="content-container">
                        <div class="content-header"> 
                            <div class="container--icon-arrow clickable"  @click="isTechDetailsCollapsed=!isTechDetailsCollapsed">
                                <img src="/assets/svg/icon--up-arrow.svg" :class="{'img--inverted' : !isTechDetailsCollapsed}"/>
                            </div>
                            Tech Used
                        </div>
                        <transition name="fade">
                            <div v-if="!isTechDetailsCollapsed" class="content-body">
                                <div v-for="tech in cardData.tech" style="padding-left: 10px; margin-bottom: 6px;">{{ tech }}</div>
                            </div>
                        </transition>

                    </div>
                </div>
            </div>
        </template>
    </modal>
</template>
<style lang='scss' scoped>

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.2s ease;
    }
    
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

    .modal-content {
        & * {
            color: main.$app--font-color--black;
            font-weight: 400;
        }
        & ul li {
            font-size: 14px;
        }
    }

    .img--inverted {
        transform: rotate(180deg) !important;
    }

    .content-container {
        // border-radius: 6px;
        // background-color: #ffe1e1; 
        border-radius: 6px;
        background-color: #fcfffe;
        border: 0.5px solid #fcfffe;
        margin-bottom: 10px;
    }

    .container--icon-arrow {
        @include main.flex--all-centered;
        margin-right: 10px;
        height: 26px;
        width: 26px;
        border-radius: 13px;
        background-color: #f9f5f5;
        border: 0.5px solid #f9f5f5;

        & svg {
            stroke: #ffe1e1;
        }

        &:hover {
            border: 0.5px solid #ffe1e1;
        }
    }

    .content-header {
        @include main.flex--all-centered;
        justify-content: flex-start;
        font-weight: 600; 
        padding-block: 4px; 
        padding-inline: 14px;
        // border-radius: 6px;
        // margin-top: 10px;
    }

    .content-body {
        @include main.flex--all-centered;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 400; 
        font-size: 14px;
        padding-left: 55px;
        // background-color: #ffe1e1; 
        padding-block: 4px; 
        padding-inline: 14px;
        // border-radius: 6px;
    }
</style>