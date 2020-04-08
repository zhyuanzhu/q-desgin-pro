<template>
    <div :class="`${prefix}-list`" >
        <slot></slot>
        <div :class="`${prefix}-option`" v-show="filter && empty">暂无数据</div>
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
            empty: true,
            currentLabel: ''
        }
    },
    mounted() {
        this.setDefaultLabel()
    },
    methods: {
        updateChildCurrentValue (isShow = false) {
            const { currentValue, filter } = this;
            this.childrens =  findComponentChildren(this, 'Option');
            this.childrens && this.childrens.map(child => {
                child.currentValue = currentValue;
                if (filter) {
                    child.show = isShow;
                }
            })
            this.setDefaultLabel()
        },
        updateModel (value, label) {
            this.$parent.emitValue(value, label)
        },
        checkOption () {
            this.empty = false;
        },
        setDefaultLabel () {
            if (this.value === '') {
                this.$parent.selectLabel = '请选择';
            } else {
                this.$nextTick(() => {
                    let showDefault = true;
                    this.childrens =  findComponentChildren(this, 'Option');
                    this.childrens && this.childrens.map(child => {
                        if (this.value == child.value) {
                            this.$parent.selectLabel = child.label;
                            showDefault = false;
                            return child.currentValue = child.value;
                        }
                    })
                    if (showDefault) {
                        this.$parent.selectLabel = '请选择';
                    }
                })
            }
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