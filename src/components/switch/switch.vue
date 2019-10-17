<template>
    <div :class="[prefixCls, 
        `${prefixCls}-${size}`, disabled && `${prefixCls}-disabled`, 
        checked && `${prefixCls}-active`]" 
        @click="toggle">
        <div :class="`${prefixCls}-inner`"></div>
        <div :class="`${prefixCls}-txt`">
            <div class="open"  v-if="$slots.on" v-show="checked"><slot name="on"></slot></div>
            <div class="close" v-if="$slots.off" v-show="!checked"><slot name="off"></slot></div>
        </div>
    </div>
</template>
<script>
import { hasParam } from '../../utils/util';

const prefixCls = 'qui-switch';

//添加选中和非选中的时候的文案描述，颜色的配置

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
        },
        activeColor: {
            type: String,
            default: '#0074ff'
        },
        unActiveColor: {
            type: String,
            default: '#ccc'
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
            _this.$emit('on-change', _this.checked)
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_switch.scss";
</style>