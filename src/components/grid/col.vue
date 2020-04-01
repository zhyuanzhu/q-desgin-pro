<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = 'qui-col';
import { findComponentParents } from '../../utils/util'

export default {
    name: 'qCol',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: Number,
        pull: Number,
        push: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object]
    },
    data() {
        return {
            prefixCls   
        }
    },
    computed: {
        gutter () {
            let _parent = findComponentParents(this, 'qRow');
            return _parent ? _parent.gutter : 0
        },
        classes () {
            const { prefixCls } = this;
            const classList = [ prefixCls ];
            // debugger
            const _list = ['span', 'offset', 'pull', 'push']; 
            ['span', 'offset', 'pull', 'push'].map(item => {
                if (this[item] || this[item] === 0) {
                    classList.push(
                        item === 'span' ? `${prefixCls}-${this[item]}` : `${prefixCls}-${item}-${this[item]}`
                    )
                }
               
            });

            ['xs', 'sm', 'md', 'lg', 'xl'].map(item => {
                const size = this[item];
                if (typeof size === 'number') {
                    classList.push(`${prefixCls}-${item}-${size}`)
                } else if (typeof size === 'object') {
                    Object.keys(size).forEach(key => {
                        classList.push(
                            val === 'span' ? `${prefixCls}-${size[key]}` : `${prefixCls}-${key}-${size[key]}`
                        )
                    })
                }
            })
            return classList
        },
        styles () {
            let style = {}
            const { gutter } = this;
            if (gutter !== 0) {
                const dis = gutter / 2;
                style = `padding-left: ${dis}px; padding-right: ${dis}px;`
            }
            return style
        }
    }

}
</script>

<style lang="scss" type="text/scss">
    @import "../../styles/components/_col.scss";
</style>