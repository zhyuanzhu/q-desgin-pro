<template>
    <div :class="`${prefix}-list`" ><slot></slot></div>
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
        value: [String, Number, Array]
    },
    data() {
        return {
            prefix,
            currentValue: this.value,
            childrens: findComponentChildren(this, 'Option')
        }
    },
    methods: {
        updateChildCurrentValue () {
            const { currentValue, childrens } = this;
            this.childrens = findComponentChildren(this, 'Option')
            this.childrens && this.childrens.map(child => {
                child.currentValue = currentValue;
            })
        },
        updateModel (data) {
            this.$parent.emitValue(data)
        }
    },
    watch: {
        value (val) {
            if (this.currentValue === val) return;
            this.currentValue = val;
            this.$nextTick(() => {
                this.updateChildCurrentValue()
            })
        }
    },
}
</script>