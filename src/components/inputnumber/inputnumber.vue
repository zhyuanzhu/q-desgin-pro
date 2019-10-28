<template>
    <div :class="[prefixCls]">
        <div :class="`${prefixCls}-main`">
            <!-- oninput = "value=value.replace(/[^\d\.{0,1}]/g,'')" -->
            <input type="text" 
                :class="`${prefixCls}-${size} input-number`" 
                autocomplete="off"
                
                >
            <span :class="`${prefixCls}-steps`">
                <i :class="`${prefixCls}-up arrow`"></i>
                <i :class="`${prefixCls}-down arrow`"></i>
            </span>
            <span v-if="unit.length">{{ unit }}</span>
        </div>
    </div>
</template>
<script>
import { hasParam } from '../../utils/util';

const prefixCls = 'qui-inputNumber';

export default {
    name: 'InputNumber',
    props: {
        steps: {
            type: Number,
            default: 1
        },
        size: {
            type: String,
            default: 'middle',
            validator (value) {
                const valueList = ['small', 'middle', 'large'];
                return hasParam(value, valueList);
            }
        },
        unit: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            prefixCls
        }
    },
    methods: {
        change () {
            // value=value.replace(/[^\d]/g,'')
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_inputnumber.scss";
</style>