<template>
    <div :class="inputwrap">
        <input 
        :class="`${prefixCls}-picker`"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :placeholder="placeholder"
        ref="input"
        @keyup="handleKeyup"
        @keyup.enter="handleEnter"
        @keypress="handleKeypress"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @click="handleClick"
        >
        <!-- <Icon type="calendar" size="16" class="pick-icon" /> -->
        <slot name="suffix"></slot>
    </div>
</template>
<script>

const prefixCls = 'qui-input';
import { hasParam } from '../../../utils/util';
import emitter from '../../../mixins/emitter';
import Icon from '../../icon'

export default {
    name: 'Input',
    mixins: [emitter],
    components: { Icon },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: String,
        autocomplete: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        name: String,
        size: {
            type: String,
            default: 'middle',
            validator (value) {
                const valueList = ['small', 'middle', 'large'];
                return hasParam(value, valueList);
            }
        },
    },
    data () {
        return {
            prefixCls,
            currentValue: this.value,
        }
    },
    watch: {
        value (value) {
            this.setCurrentValue(value);
        },
        currentValue (value) {
            this.$emit('input', value)
        }
    },
    computed: {
        inputwrap () {
            const { prefixCls, size, disabled } = this;
            return [`${prefixCls}-main`,
            {
                [`${prefixCls}-disabled`]: disabled,
            }]
        }
    },
    methods: {
        handleKeyup (evt) {
            this.$emit('keyup', evt);
        },
        handleEnter (evt) {
            this.$emit('enter', evt);
        },
        handleKeypress (evt) {
            this.$emit('keypress', evt);
        },
        handleFocus (evt) {
            this.$emit('on-focus', evt);
        },
        handleBlur (evt) {
            this.$emit('blur', evt);
        },
        handleInput (evt) {
            let _val = evt.target.value;
            this.setCurrentValue(_val);
            this.$emit('change', _val);
            this.$emit('input', _val);
        },
        handleChange (evt) {
            this.$emit('change', evt);
        },
        handleClick (evt) {
            this.$emit('click', evt)
        },
        setCurrentValue (v) {
            if (v === this.currentValue) return;
            this.currentValue = v;
        },
        focus () {
            this.$refs.input.focus();
        },
        blur () {
            this.$refs.input.blur();
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../../styles/components/_input.scss";
</style>
