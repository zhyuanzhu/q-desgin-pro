<template>
    <div :class="setClass" @click="handleClick"> {{ label }} </div>
</template>
<script>

const prefix = "qui-select";
import { findComponentParents } from '../../utils/util';

export default {
    name: 'Option',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            prefix,
            currentValue: '',
            parent: findComponentParents(this, 'Dropdown')
        }
    },
    methods: {
        handleClick () {
            const { value } = this;
            this.parent.updateModel(value)
            this.$emit('on-select-option', value)
        }
    },
    computed: {
        setClass () {
            const { prefix, currentValue, value } = this;
            return [
                `${prefix}-option`,
                currentValue === value && `${prefix}-option-active`
            ];
        }
    },
    watch: {
        currentValue (v) {
            if (this.currentValue === v) return;
            this.currentValue = v;
        }
    },
}
</script>