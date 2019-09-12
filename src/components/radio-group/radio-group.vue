<template>
    <div :class="[`${prefixCls}`, vertical && `${prefixCls}-vertical`]">
        <!-- <Radio v-for="(radio, index) in radioData" 
            :key="radio.value || index" 
            :active="radio.active" 
            :value="radio.value"
            :group="radioGroup"
             /> -->
        <slot></slot>     
    </div>
</template>
<script>

const prefixCls = 'qui-radio-group';
import Radio from '../radio/index'

export default {
    name: 'RadioGroup',
    components: {
        Radio
    },
    props: {
        radioData: {
            type: Array,
            default: () => []
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefixCls,
            radioGroup: true
        }
    },

}
</script>
<style lang="scss" type="text/scss">
    @import '../../styles/components/_radio-group.scss';
</style>