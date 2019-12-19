<template>
    <div :class="setClass" @click="handleClick" v-show="show"> {{ label }} </div>
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
            parent: findComponentParents(this, 'Dropdown'),
            show: true
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
            if (this.value.indexOf(v) > -1) {
                this.show = true
                if (this.parent.empty) {
                    this.parent.empty = false;
                }
            }
            if (this.currentValue === v) return;
            this.currentValue = v;
        }
    },
}
</script>