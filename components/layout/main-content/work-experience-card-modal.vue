<script setup lang='ts'>
import modal from '~/components/ui/custom/common/modal.vue';

const isCardModalVisible = defineModel('isCardModalVisible', {
    type: Boolean,
    default: false,
    required: true

})

</script>
<template>
    <modal v-if="isCardModalVisible" v-model:is-modal-visible="isCardModalVisible">
        <template #modal-content>
            <div style="background-color: #f7f2ff; height: 500px; width: 800px; border-radius: 10px;">
            </div>
        </template>
    </modal>
</template>
<style lang='scss'>
</style>