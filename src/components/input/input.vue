<template>
    <div :class="inputwrap">
        <input 
        :class="prefixCls"
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
            <Icon :size="14" :color="errorColor" :type="'warning'" style="margin-right:5px;" />
            <span :class="`${prefixCls}-err-text`" v-text="errText"></span>
        </div>
        
    </div>
</template>
<script>

const prefixCls = 'qui-input';
import { hasParam } from '../../utils/util';
// import emitter from '../../mixins/emitter';
import Icon from '../icon'

export default {
    name: 'Input',
    // mixins: [emitter],
    components: { Icon },
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
        }
    },
    data () {
        return {
            prefixCls,
            currentValue: this.value,
            errorColor: '#f52f3e'
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
            const { prefixCls, size, disabled, border, errPosition, error } = this;
            return [`${prefixCls}-main`, `${prefixCls}-${size}`, `${prefixCls}-${errPosition}`,
            {
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-noborder`]: !border,
                [`${prefixCls}-error`]: error
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
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_input.scss";
</style>
