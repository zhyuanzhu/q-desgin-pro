<template>
    <div :class="[`${prefixCls}`, `${prefixCls}-${size}`, disabled && `${prefixCls}-disabled`, !arrowDown && `${prefixCls}-active`, `theme-${theme}`]">
        <div :class="[`${prefixCls}-main`]" @click="!disabled && (arrowDown = !arrowDown)">
            <span :class="`${prefixCls}-value`">{{ selectValue }}</span>
            <span :class="[arrowDown ? `${prefixCls}-down` : `${prefixCls}-up`, `${prefixCls}-arrow`]"></span>
        </div>
        <drop-down :theme="theme" :data="dropData" :size="size" :show="!disabled && !arrowDown" :autoWidth="autoWidth" @on-choose="onChoose" />
    </div>
</template>
<script>

const prefixCls = 'qui-select';
import DropDown from '../dropdown'
import { hasParam } from '../../utils/util'


export default {
    name: 'Select',
    components: {
        DropDown
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        show: {
            type: Boolean,
            default: false
        },
        autoWidth: {
            type: Boolean,
            default: false
        },
        defaultValue: {
            type: [String, Number],
            default: '请选择'
        },
        size: {
            type: String,
            default: 'middle',
            validator(value) {
                const valueList = ['small', 'middle', 'large'];
                return hasParam(value, valueList);
            }
        },
        disabled: {
            type: Boolean,
            default: false
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
    data() {
        return {
            prefixCls,
            dropData: this.data,
            selectValue: this.defaultValue,
            arrowDown: true
        }
    },
    methods: {
        onChoose (item) {
            this.dropData.map(i => i.active = false);
            item.active = !item.active;
            this.selectValue = item.value;
            this.arrowDown = !this.arrowDown;
            this.$emit('on-select', item)
        },
        getDefaultValue () {
            this.dropData.map(i => {
                if (i.active) this.selectValue = i.value;
            });
        },
    },
    mounted() {
        this.getDefaultValue();
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_select.scss";
</style>