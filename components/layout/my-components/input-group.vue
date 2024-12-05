<script setup lang='ts'>
import TextInput from '~/components/ui/custom/common/input/text-input.vue';
const textInput = ref("")
</script>

<template>
    <div class="component-group-container">
        <div class="title"> Text Input </div>
        <div id="component-group">
            <div style="width: 300px;">
                <text-input :title="'Title'" :show-visibility-icon="true" v-model:input-text="textInput" :text-limit="40"></text-input>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .component-group-container {
        @include main.flex--all-centered;
        flex-direction: column;
        padding: 20px;
        background: white;
        border-radius: 5px;
        margin: 10px;
        box-shadow: 3px 2px 4px 0px #121212;
    }

    #component-group {
        @include main.flex--all-centered;
        & div {
            margin-right: 10px;
        }
    }

    .title {
        color: main.$app--color--blue;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
    }
</style>