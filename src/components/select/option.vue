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
    mounted() {
        this.filterShow(this.parent.value)
    },
    methods: {
        handleClick () {
            const { value, label } = this;
            this.parent.updateModel(value, label)
            this.$emit('on-select-option', value)
        },
        filterShow (v) {
            const _filter = this.parent.filter;
            if (!_filter) return;
            const { label } = this;
            if (label.indexOf(v) === -1) {
                this.show = false;
                this.parent.empty = true;
            } else {
                this.show = true;
                this.parent.empty = false;
            }
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
            if (v === '') {
                this.parent.updateChildCurrentValue(true);
                this.parent.empty = false;
                return;
            }

            if (this.label.indexOf(v) > -1) {
                this.show = true
                if (this.parent.empty) {
                    this.parent.empty = false;
                }
            }
            if (this.currentValue === v) return;
            this.currentValue = v;
        }
    }
}
</script>