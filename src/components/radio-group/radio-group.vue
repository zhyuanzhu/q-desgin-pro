<template>
    <div :class="[`${prefixCls}`, vertical && `${prefixCls}-vertical`]">
        <slot></slot>     
    </div>
</template>
<script>

const prefixCls = 'qui-radio-group';
const now = +new Date();
const getUuidName = () => `${prefixCls}_${now}`;

import { findComponentChildren } from '../../utils/util'

import Radio from '../radio/index'

export default {
    name: 'RadioGroup',
    props: {
        vertical: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: getUuidName()
        },
        value: {
            type: [String, Number, Boolean],
            default: ''
        }

    },
    data() {
        return {
            prefixCls,
            childrens: [],
            currentValue: this.value
        }
    },
    mounted() {
        this.updateValue()
    },
    methods: {
        updateValue () {
            this.childrens = findComponentChildren(this, 'Radio')
            // console.log(findComponentChildren(this, 'Radio'))
            if (this.childrens) {
                this.childrens.map(child => {
                    child.currentValue = this.currentValue == child.value
                    child.group = true
                    
                })
            }
        },
        change (data) {
            this.currentValue = data.vaue;
            this.updateValue()
            this.$emit('input', data.value)
            this.$emit('on-change', data.value)
            
        }
    },
    watch: {
        value () {
            if (this.currentValue != this.value) {
                this.currentValue = this.value;
                this.$nextTick(() => {
                    this.updateValue()
                })
            }
        }
    },

}
</script>
<style lang="scss" type="text/scss">
    @import '../../styles/components/_radio-group.scss';
</style>