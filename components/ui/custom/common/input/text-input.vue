<script setup lang='ts'>

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  textLimit: {
    type: Number,
    required: false,
    default: null
  },
  showVisibilityIcon: {
    type: Boolean,
    required: false,
    default: false
  },
});

const isTextVisible = defineModel('isTextVisible', {
    type: Boolean,
    default: true,
    required: false
})

const inputText = defineModel('inputText', {
    type: String,
    required: true
})

const isInputFocused = ref(false)

const placeholder = computed ( () => {
    return isInputFocused.value ? "" : props.title
}) 

const isInputActive = computed (() => {
    return isInputFocused.value || inputText.value.length
})

const focusChanged = (isFocused: boolean) => {
    isInputFocused.value=isFocused
}

</script>

<template>
    <div id="top-input-container" :class="{ 'input--active' : isInputActive}">
        <div class="title" v-if="props.title && isInputActive"> 
            {{ title }}
        </div>
        <div v-if="textLimit && isInputActive" :class="{ 'text-counter--maxlength' : inputText.length == textLimit }" class="text-counter" >  
            {{ `${inputText.length}/${textLimit}` }}
        </div>
        <div class="input-container">
            <input type="text" 
                v-model="inputText" 
                @focus="focusChanged(true)" 
                @blur="focusChanged(false)" 
                :placeholder="placeholder"
                :maxlength="props.textLimit"
                :class="{ 'input--has-visibility-icon' : showVisibilityIcon}"
            >
            <div class="visibility-icon-container clickable" v-if="showVisibilityIcon">
                <img v-if="!isTextVisible" src="/assets/svg/invisible-eye.svg" @click="isTextVisible=true">
                <img v-else src="/assets/svg/visible-eye.svg" @click="isTextVisible=false">
            </div>
        </div>

    </div>
</template>

<style lang='scss' scoped>

    .input-container {
        @include main.flex--all-centered;
        width: inherit;
    }

    .visibility-icon-container {
        height: 16px;
        width: 16px;
        position: absolute;
        right: 8px;
        // &:hover img {
        //     color: main.$app--color--blue;
        // }
    }
    #top-input-container {
        width: inherit;
        position: relative;
        & * {
            color: main.$app--color--black;
        }
    }

    .title {
        display: block;
        width: fit-content;
        font-size: 12px;
        position: absolute;
        margin-top: -8px;
        background: white;
        margin-left: 8px;
        padding-inline: 2px;
    }

    .text-counter {
        position: absolute;
        font-size: 10px;
        top: -7px;
        right: 7px;
        background: white;
        padding-inline: 2px;
        color: main.$app--color--blue !important;
    }

    .text-counter--maxlength {
        color: #bb0303 !important;
    }

    input {
        min-width: 100px;
        width: inherit;
        outline: none;
        padding-block: 8px;
        padding-inline: 6px;
        border-radius: 5px;
        border: 1px solid main.$app--color--black;
    }

    .input--has-visibility-icon {
        padding-right: 26px;
    }

    .input--active {
        & input {
            border: 1px solid main.$app--color--blue;
        }
        & div.title {
            color: main.$app--color--blue !important;
        }
    }
</style>