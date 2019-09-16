<template>
    <label :class="[
            `${prefixCls}`, 
            disabled && `${prefixCls}-disabled`, 
            active && `${prefixCls}-active`, 
            partial && `${prefixCls}-partial`
            ]">
        <span :class="[`${prefixCls}-icon`]"></span>
        <span :class="[`${prefixCls}-value`]" v-if="value" v-text="value"></span>
    </label>
</template>

<script>
// 是否全部选中或者部分选中，是否disabled需要在业务逻辑代码中做判断
const prefixCls = "qui-checkbox";
export default {
    name: 'CheckBox',
    props: {
        value: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        },
        partial: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            prefixCls
        }
    }  
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_checkbox.scss";
</style>