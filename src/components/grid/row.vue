<template>
    <div :class="clssses" :style="styles">
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = 'qui-row';
import { hasParam, findComponentChildren } from '../../utils/util';

export default {
    name: 'Row',
    props: {
        type: {
            validator (value) {
                return hasParam(value, ['flex'])
            }
        },
        align: {
            validator (value) {
                const valueList = ['top', 'middle', 'bottom'];
                return hasParam(value, valueList)
            }
        },
        justify: {
            validator (value) {
                const valueList = ['start', 'end', 'center', 'space-around', 'space-between'];
                return hasParam(value, valueList)
            }
        },
        gutter: {
            type: Number,
            default: 0
        },
        className: String
    },
    data() {
        return {
            prefixCls
        }
    },
    computed: {
        clssses () {
            const { prefixCls, type, align, justify, className } = this;
            return [{
                [`${prefixCls}`]: !type,
                [`${prefixCls}-${type}`]: !!type,
                [`${prefixCls}-${type}-${align}`]: !!align,
                [`${prefixCls}-${type}-${justify}`]: !!justify,
                [`${className}`]: !!className
            }]
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
        gutter (v) {
            this.updateGutter(v);
        }
    },
    methods: {
        updateGutter (val) {
            const Col = findComponentChildren(this, 'Col');
            const colList = findComponentBrothers(Col, 'Col', false);
            colList.length > 0 && colList.forEach(child => {
                if (v !== 0) {
                    child.gutter = val;
                }
            })
        }
    },
}
</script>