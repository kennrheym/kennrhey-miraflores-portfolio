<script setup lang='ts'>
enum VariantEnum {
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
}
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: false,
    default: VariantEnum.CONTAINED
  }
});

const isDisabled = defineModel('isDisabled', {
    type: Boolean,
    default: false,
    required: false
})



</script>

<template>
    <div class="button-container clickable" 
        :class="{
            'outlined' : props.variant == VariantEnum.OUTLINED,  
            'contained' : props.variant == VariantEnum.CONTAINED,  
            'contained-disabled': isDisabled && props.variant == VariantEnum.CONTAINED ,
            'outlined-disabled': isDisabled && props.variant == VariantEnum.OUTLINED,

        }"
    >
        {{ text }}
    </div>
</template>
<style lang='scss' scoped>
    .button-container {
        border-radius: 4px;
        padding-block: 6px;
        padding-inline: 16px;
        font-size: 14px;
        text-align: center;
        font-weight: 500;
    }

    .contained {
        background-color: main.$app--color--blue;
        color: #FFF;
        &:hover {
            background-color: main.$app--color--dark-blue;
        }
    }

    .outlined {
        color: main.$app--color--blue;
        background-color: #FFF;
        border: 1px solid main.$app--color--dull-blue;
        &:hover {
            border: 1px solid main.$app--color--blue;
        }
    }

    .contained-disabled {
        pointer-events: none;
        color: rgba($color: #000000, $alpha: 0.26);
        background-color: rgba($color: #000000, $alpha: 0.12);
    }

    .outlined-disabled {
        pointer-events: none;
        color: rgba($color: #000000, $alpha: 0.26);
        border: 1px solid rgba($color: #000000, $alpha: 0.12);
        background-color: #FFF;

    }
</style>