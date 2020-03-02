<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = 'qui-col';
import { findComponentParents } from '../../utils/util'

export default {
    name: 'Col',
    props: {
        span: [Number, String],
        order: [Number, String],
        offset: [Number, String],
        push: [Number, String],
        pull: [Number, String],
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
        xxl: [Number, Object]
        className: String,
    },
    data() {
        return {
            prefixCls,
            gutter: 0    
        }
    },
    computed: {
        classes () {

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
    mounted() {
        this.updateGutter()
    },
    methods: {
        updateGutter () {
            const Row = findComponentParents(this, 'Row');
            if (!Row) return;
            Row.updateGutter(Row.gutter);
        }
    },
    beforeDestroy() {
        this.updateGutter()
    },
}
</script>