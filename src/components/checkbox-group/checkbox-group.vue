<template>
    <div :class="[prefixCls, vertical && `${prefixCls}-vertical`]">
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = 'qui-checkbox-group';
import { findComponentChildren } from '../../utils/util'

export default {
    name: 'CheckboxGroup',
    props: {
        vertical: {
            type: Boolean,
            default: false
        },
        value: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            prefixCls,
            currentValue: this.value,
            childrens: []    
        }
    },
    mounted() {
        this.updateModel(true)
    },
    watch: {
        value () {
            this.updateModel(true)
        }
    },
    methods: {
        updateModel (update) {
            this.childrens = findComponentChildren(this, 'Checkbox', 'CheckboxGroup')
            if (this.childrens) {
                const { value } = this;
                this.childrens.map(child => {
                    child.model = value;
                    if (update) {
                        child.currentValue = value.indexOf(child.value) >= 0
                        child.group = true
                    }
                })
            }
        },
        change (data) {
            this.currentValue = data;
            this.$emit('input', data);
            this.$emit('on-change', data);
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_checkbox-group.scss";
</style>