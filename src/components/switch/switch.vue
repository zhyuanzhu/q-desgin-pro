<template>
    <div :class="[prefixCls, `${prefixCls}-${size}`, disabled && `${prefixCls}-disabled`, checked && `${prefixCls}-active`]" @click="toggle">
        <div :class="`${prefixCls}-inner`">
            <span class="open"></span>
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
            this.checked = !this.checked
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_switch.scss";
</style>