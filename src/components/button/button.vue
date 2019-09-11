<template>
    <component :is="tagName" :disabled="disabled" 
        @click="handleClickEvents" v-bind="tagProps"
        :class="setClass"
        >
        <span :class="prefixCls + '-text'"><slot></slot></span>
    </component>
</template>
<script>

import { hasParam } from '../../utils/util';
import mixinsLink from '../../mixins/link';


const prefixCls = 'qui-button';

export default {
    name: 'Button',
    mixins: [mixinsLink],
    props: {
        btnType: {                  //按钮类型
            type: String,
            default: 'button',
            validator (value) {
                const valueList = ['button', 'submit', 'reset'];
                return hasParam(value, valueList);
            }
        },
        type: {   
            type: String,
            default: 'main',
            validator (value) {
                const valueList = ['main', 'text', 'info', 'primary', 'success', 'warning', 'error', 'empty'];
                return hasParam(value, valueList);
            }
        },
        size: {               
            type: String,
            default: 'middle',
            validator (value) {
                const valueList = ['small', 'middle', 'large', 'long'];
                return hasParam(value, valueList);
            }
        }
    },
    data() {
        return {
            prefixCls
        }
    },
    methods: {
        handleClickEvents (evt) {
            this.$emit('click', evt)
        },

    },
    computed: {
        isTagA () {
            const { to } = this;
            return !!to;
        },
        tagName () {
            const { isTagA } = this;
            return isTagA ? 'a' : 'button';
        },
        tagProps () {
            const { isTagA } = this;
            if (isTagA) {
                const { linkUrl, target, disabled } = this;
                const href = disabled ? 'javascript:void(0)' : linkUrl;
                return {href, target}
            } else {
                const { btnType } = this;
                return {type: btnType}
            }
        },
        setClass () {
            return [
                `${prefixCls}`, 
                `${prefixCls}-${this.type}`, 
                `${prefixCls}-${this.size}`,
                this.isTagA && `${prefixCls}-link`,
                this.isTagA && this.disabled && `${prefixCls}-link-disabled`,
            ]
            
        }

    },
}
</script>
<style lang="scss" type="text/scss">
    /* style-loader 8.0的版本太高，需要调整至7.x才可以引入 */
    @import '../../styles/components/_button.scss';
</style>
