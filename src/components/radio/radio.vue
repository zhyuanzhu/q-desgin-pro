<template>
    <label :class="[`${prefixCls}`, 
        currentValue && `${prefixCls}-active`, 
        disabled && `${prefixCls}-disabled`, 
        `${[prefixCls]}-${theme}`]"
        >
        <span :class="`${prefixCls}-icon`">
            <input type="radio" 
                ref="ipt"
                :name="radioName" 
                :class="`${prefixCls}-ipt`"
                :disabled="disabled"
                :checked="currentValue"
                @change="change"
                :value="value"
                @click="handleClick"
                >
        </span>
        <span :class="`${prefixCls}-value`" v-if="label" v-text="label"></span>
    </label>
</template>
<script>
import { hasParam, findComponentParents } from '../../utils/util';

const prefixCls = "qui-radio";

export default {
    name: 'Radio',
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'default',
            validator (value) {
                const valueList = ['default', 'primary'];
                return hasParam(value, valueList)
            }
        },
        name: {
            type: String
        },
        label: [String, Number, Boolean]
    },
    data() {
        return {
            prefixCls,
            isActive: false,
            group: false,
            radioName: this.name,
            parent: findComponentParents(this, 'RadioGroup'),
            currentValue: '',
            single: false
        }
    },
    methods: {
        handleClick () {
            const { group, disabled, currentValue } = this;
            if (disabled || group) return;
            this.currentValue = !currentValue
            this.$emit('input', this.currentValue)
            this.$emit('on-change', this.currentValue);
        },
        change (evt) {
            const { disabled, value, group, parent } = this;
            if (disabled || !group) return;
            const isChecked = evt.target.checked;
            this.currentValue = isChecked;
            this.$emit('input', isChecked)
            parent.change({
                value: value 
            })
        },
        updateValue () {
            this.currentValue = this.value
        }
    },
    mounted() {
        if (this.parent) {
            this.group = true;
            this.radioName = this.parent.name
        }
        if (this.group) {
            this.parent.updateValue()
        } else {
            this.updateValue()
        }
    },
}
</script>

<style lang="scss" type="text/scss">
    @import '../../styles/components/_radio.scss';
</style>