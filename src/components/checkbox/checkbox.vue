<template>
    <label :class="[
            `${prefixCls}`, 
            disabled && `${prefixCls}-disabled`, 
            currentValue && `${prefixCls}-active`, 
            partial && `${prefixCls}-partial`,
            ]">
        <span :class="[`${prefixCls}-icon`, `${prefixCls}-${theme}`]">
            <Icon :type="icon" :size="14" class="checked" v-show="currentValue" />
            <input type="checkbox" v-if="group" 
                :name="name"
                :disabled="disabled"
                :class="`${prefixCls}-ipt`"
                @change="change"
                :value="value"
                v-model="model"
                >
            <input type="checkbox" v-else 
                :name="name"
                :disabled="disabled"
                :class="`${prefixCls}-ipt`"
                @change="change"
                :checked="currentValue"
                >
        </span>
        <span :class="[`${prefixCls}-value`]" v-if="label" v-text="label"></span>
    </label>
</template>

<script>

import { hasParam, findComponentParents } from '../../utils/util';
import Icon from '../icon'

const prefixCls = "qui-checkbox";
export default {
    name: 'Checkbox',
    components: {
        Icon
    },
    props: {
        value: {
            type: [String, Number, Boolean],
            default: ''
        },
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        },
        partial: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
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
    data () {
        return {
            prefixCls,
            group: false,
            parent: findComponentParents(this, 'CheckboxGroup'),
            model: [],
            currentValue: this.value,
            icon: 'check'
        }
    },
    mounted() {
        this.init()
    }, 
    watch: {
        value (val) {
            this.updateModel()
        }
    }, 
    methods: {
        init () {
            this.parent = findComponentParents(this, 'CheckboxGroup');
            if (this.parent) {
                this.group = true;
            }

            if (this.group) {
                this.parent.updateModel(true)
            } else {
                this.updateModel()
            }

        },
        change (evt) {
            if (this.disabled) return;
            const isChecked = evt.target.checked;
            this.currentValue = isChecked;
            this.$emit('input', isChecked)
            if (this.group) {
                this.parent.change(this.model)
            } else {
                this.$emit('on-change', this.currentValue)
            }


        },
        updateModel () {
            this.currentValue = this.value
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_checkbox.scss";
</style>