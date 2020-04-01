<template>
    <div :class="clssses" :style="styles">
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = 'qui-row';
import { hasParam, findComponentChildren } from '../../utils/util';

export default {
    name: 'qRow',
    props: {
        type: {
            type: String
        },
        justify: {
            type: String,
            default: 'start',
            validator (value) {
                const valueList = ['start', 'end', 'center', 'space-around', 'space-between']
                return hasParam(value, valueList)
            }
        },
        align: {
            type: String,
            default: 'top',
            validator (value) {
                const valueList = ['top', 'middle', 'buttom'];
                return hasParam(value, valueList)
            }
        },
        gutter: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            prefixCls
        }
    },
    computed: {
        clssses () {
            const { prefixCls, type, align, justify, className } = this;
            return [ prefixCls,
                {
                    [`${prefixCls}-justify-${justify}`]: justify !== 'start',
                    [`${prefixCls}-align-${align}`]: align !== 'top',                
                    [`${prefixCls}-flex`]: type === 'flex',
                    [className]: !!className
                }
            ]
        },
        styles () {
            let style = {};
            const { gutter } = this;
            if (gutter !== 0) {
                const dis = gutter / -2;
                style = `margin-left: ${dis}px; margin-right: ${dis}px;`
            }
            return style;
        }
    },
    watch: {
        
    },
    methods: {

    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_row.scss";
</style>