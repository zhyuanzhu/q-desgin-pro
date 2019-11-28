<template>
    <div :class="[`${prefixCls}-main`, 
        `${prefixCls}-${size}`, 
        disabled && `${prefixCls}-disabled`, 
        !border && `${prefixCls}-noborder`,
        `${prefixCls}-${errPosition}`,
        error && `${prefixCls}-error`]"
        >
        <input 
        :class="[`${prefixCls}`, `${prefixCls}-${theme}`]"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
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
        <i v-text="unit" v-show="unit" :class="`${prefixCls}-unit`"></i>
        <div :class="[`${prefixCls}-err`, `${errPosition}`]" v-show="error && errText">
            <i :class="[`${prefixCls}-err-icon`, `${prefixCls}-icon`]"></i>
            <span :class="`${prefixCls}-err-text`" v-text="errText"></span>
        </div>
        
    </div>
</template>
<script>

import { hasParam } from '../../utils/util';
import emitter from '../../mixins/emitter';
const prefixCls = 'qui-input';

export default {
    name: 'Input',
    mixins: [emitter],
    props: {
        type: {
            type: String,
            default: 'text'
        },
        error: {
            type: Boolean,
            default: false
        },
        errPosition: {
            type: String,
            default: 'bottom',
            validator (value) {
                const valueList = ['right', 'bottom'];
                return hasParam(value, valueList);
            }
        },
        errText: String,
        errIcon: {
            type: Boolean,
            default: true
        },
        unit: String,
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
        maxlength: Number,
        minlength: Number,
        size: {
            type: String,
            default: 'middle',
            validator (value) {
                const valueList = ['small', 'middle', 'large'];
                return hasParam(value, valueList);
            }
        },
        border: {       //是否拥有边框
            type: Boolean,
            default: true
        },
        theme: {
            type: String,
            default: 'default',
            validator (value) {
                const valueList = ['default', 'primary'];
                return hasParam(value, valueList)
            }
        }
    },
    data () {
        return {
            prefixCls,
            currentValue: this.value
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
            this.$emit('focus', evt);
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
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_input.scss";
</style>
