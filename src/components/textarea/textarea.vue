<template>
    <div :class="wrapclass">
        <textarea 
            :name="name" 
            :readonly="readonly"
            :disabled="disabled" 
            :placeholder="placeholder"
            :maxlength="maxlength" 
            :minlength="minlength" 
            v-text="value"
            :style="!resize && 'resize: none;'"
            :class="textareaClss"
            :value="value"
            @change="change"
            @input="handleInput"
            @focus="handleFocus"
            @blue="handleBlur"
            ></textarea>
        <div :class="[`${prefixCls}-err`, `${errPosition}`]" v-show="error && errText">
            <Icon :size="14" :type="'warning'" :color="errorColor" style="vertical-align:center;" />
            <span :class="`${prefixCls}-err-text`" v-text="errText"></span>
        </div>
    </div>
</template>
<script>

const prefixCls = 'qui-textarea';

import { hasParam } from '../../utils/util';
import Icon from '../icon'


export default {
    name: 'Textarea',
    components: { Icon },
    props: {
        value: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        resize: {
            type: Boolean,
            default: true
        },
        error: {
            type: Boolean,
            default: false
        },
        errText: String,
        errIcon: {
            type: Boolean,
            default: true
        },
        placeholder: String,
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
        errPosition: {
            type: String,
            default: 'bottom',
            validator (value) {
                const valueList = ['right', 'bottom'];
                return hasParam(value, valueList);
            }
        }

    },
    data () {
        return {
            prefixCls,
            errorColor: '#f52f3e'
        }
    },
    computed: {
        wrapclass () {
            const { prefixCls, error, size, errPosition } = this;
            return [
                `${prefixCls}-main`,
                `${prefixCls}-${size}`,
                `${prefixCls}-${errPosition}`,
                { [`${prefixCls}-error`]: error }
            ]
        },
        textareaClss () {
            const { prefixCls, disabled, readonly } = this;
            return [
                `${prefixCls}`, 
                { [`${prefixCls}-disabled`]: disabled },
                { [`${prefixCls}-readonly`]: readonly }
            ]
        }
    },
    methods: {
        change (evt) {
            const value = evt.target.value;
            this.$emit('input', value)
            this.$emit('on-change', value)
        },
        handleInput (evt) {
            const value = evt.target.value;
            this.$emit('input', value)
            this.$emit('on-change', value)
        },
        handleBlur (evt) {
            this.$emit('on-blur', evt)
        },
        handleFocus (evt) {
            this.$emit('on-focus', evt)
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_textarea.scss";
</style>