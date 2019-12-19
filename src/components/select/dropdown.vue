<template>
    <div :class="`${prefix}-list`" >
        <slot></slot>
        <div :class="`${prefix}-option`" v-show="empty">暂无数据</div>
    </div>
</template>
<script>

const prefix = "qui-select";
import { findComponentChildren } from '../../utils/util';

export default {
    name: 'Dropdown',
    props: {
        show: {
            type: Boolean,
            default: true
        },
        transition: {
            type: String,
            default: 'fade-in-move-up'
        },
        maxLength: Number,
        size: String,
        value: [String, Number, Array],
        filter: Boolean
    },
    data() {
        return {
            prefix,
            currentValue: this.value,
            childrens: findComponentChildren(this, 'Option'),
            empty: true
        }
    },
    methods: {
        updateChildCurrentValue () {
            const { currentValue, childrens, filter } = this;
            this.childrens = findComponentChildren(this, 'Option')
            this.childrens && this.childrens.map(child => {
                child.currentValue = currentValue;
                child.show = !filter;
            })
        },
        updateModel (data) {
            this.$parent.emitValue(data)
        },
        checkOption () {
            this.empty = false;
        }
    },
    watch: {
        value (val) {
            if (this.currentValue === val) return;
            this.currentValue = val;
            this.$nextTick(() => {
                this.empty = true;
                this.updateChildCurrentValue()
            })
        }
    },
}
</script>