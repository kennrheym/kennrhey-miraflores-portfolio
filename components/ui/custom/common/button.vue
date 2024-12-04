<script setup lang='ts'>
enum VariantEnum {
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
    DISABLED = 'disabled'
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



</script>

<template>
    <div class="button-container clickable" 
        :class="{
            'outlined' : props.variant == VariantEnum.OUTLINED,  
            'contained' : props.variant == VariantEnum.CONTAINED,  
            'disabled' : props.variant == VariantEnum.DISABLED,  
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

    .disabled {
        pointer-events: none;
        color: rgba($color: #000000, $alpha: 0.26);
        background-color: rgba($color: #000000, $alpha: 0.12);
    }
</style>