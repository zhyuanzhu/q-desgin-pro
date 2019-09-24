<template>
    <div :class="[`${prefixCls}-main`, error && `${prefixCls}-error`, `${prefixCls}-${size}`,`${prefixCls}-${errPosition}`,]">
        <textarea :name="name" :readonly="readonly"
            :disabled="disabled" :placeholder="placeholder"
            :maxlength="maxlength" :minlength="minlength" v-text="value"
            :style="!resize && 'resize: none;'"
            :class="[`${prefixCls}`, disabled && `${prefixCls}-disabled`, readonly && `${prefixCls}-readonly`]"
            ></textarea>
        <div :class="[`${prefixCls}-err`, `${errPosition}`]" v-show="error && errText">
            <i :class="[`${prefixCls}-err-icon`, `${prefixCls}-icon`]"></i>
            <span :class="`${prefixCls}-err-text`" v-text="errText"></span>
        </div>
    </div>
</template>
<script>

const prefixCls = 'qui-textarea';

import { hasParam } from '../../utils/util';


export default {
    name: 'TextArea',
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
            prefixCls
        }
    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_textarea.scss";
</style>