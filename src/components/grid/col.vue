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
            const { prefixCls, span, order, offset, push, pull, className } = this;
            const classList = [`${prefixCls}`, {
                [`${prefixCls}-span-${span}`]: span,
                [`${prefixCls}-order-${order}`]: order,
                [`${prefixCls}-offset-${offset}`]: offset,
                [`${prefixCls}-push-${push}`]: push,
                [`${prefixCls}-pull-${pull}`]: pull,
                [`${className}`]: !!className
            }];

            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
                if (typeof this[size] === 'number') {
                    classList.push(`${prefixCls}-span-${size}-${this[size]}`);
                } else if (typeof this[size] === 'object') {
                    let props = this[size];
                    Object.keys(props).forEach(prop => {
                        let clsName = prop !== 'span' ? `${prefixCls}-${size}-${prop}-${props[prop]}` : `${prefixCls}-span-${size}-${props[prop]}`;
                        classList.push(clsName)
                    })
                }
            })

            return classList;
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