<template>
    <div :class="styles" 
        @click="toggle">
        <input type="hidden">
        <div :class="`${prefixCls}-inner`"></div>
        <div :class="`${prefixCls}-txt`">
            <div class="open" v-if="$slots.on" v-show="checked"><slot name="on"></slot></div>
            <div class="close" v-if="$slots.off" v-show="!checked"><slot name="off"></slot></div>
        </div>
    </div>
</template>
<script>
import { hasParam } from '../../utils/util';

const prefixCls = 'qui-switch';

export default {
    name: 'qSwitch',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'middle',
            validator (value) {
                const valueList = ['small', 'middle', 'large'];
                return hasParam(value, valueList);
            }
        }
    },
    data() {
        return {
            prefixCls,
            checked: this.active
        }
    }, 
    watch: {
        active (v) {
            if (this.checked != v) {
                this.checked = v;
            }
        }
    },
    methods: {
        toggle () {
            const _this = this;
            if (_this.disabled) return;
            _this.checked = !_this.checked;
            _this.$emit('input', _this.checked)
            _this.$emit('on-change', _this.checked)
        }
    },
    computed: {
        styles () {
            const { prefixCls, disabled, size, checked } = this;
            return [ 
                prefixCls, 
                `${prefixCls}-${size}`, 
                { [`${prefixCls}-disabled`]: disabled },
                { [`${prefixCls}-active`]: checked }
            ]
        }
    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_switch.scss";
</style>