<template>
    <label :class="[`${prefixCls}`, active && `${prefixCls}-active`, disabled && `${prefixCls}-disabled`, `${[prefixCls]}-${type}`]">
        <span :class="[`${prefixCls}-icon`]"></span>
        <span :class="`${prefixCls}-value`" v-if="value" v-text="value"></span>
    </label>
</template>
<script>
import { hasParam } from '../../utils/util';

//是否选中的逻辑在引入组件处处理，所以disabled等选项和多个单选框的时候，需要判断逻辑


const prefixCls = "qui-radio";

export default {
    name: 'Radio',
    props: {
        value: [String, Number, Boolean],
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        group: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'default',
            validator (value) {
                const valueList = ['default', 'primary'];
                return hasParam(value, valueList)
            }
        }
    },
    data() {
        return {
            prefixCls,
            isActive: false,
            radioGroupValue: null
        }
    },
    methods: {
        handleClick () {
            //后续添加处理
            let { value, isActive, disabled, group, radioGroupValue } = this;
            if (disabled) return;
            if (group) {
                this.radioGroupValue = value;
            } else {
                this.isActive = !isActive;
                if (isActive) {
                    this.$emit('on-change', '')
                } else {
                    this.$emit('on-change', value)
                }
            }
        }
    },
    mounted() {
        // const { active } = this;
        // this.isActive = active;
    },
}
</script>

<style lang="scss" type="text/scss">
    @import '../../styles/components/_radio.scss';
</style>