<template>
    <div :class="`${prefixCls}-wrap`">
        <div :class="`${prefixCls}-header`"></div>
        <collapse-transition>
            <div :class="`${prefixCls}-content`" v-show="isActive">
                <slot></slot>
            </div>
        </collapse-transition>
    </div>
</template>

<script>

const prefixCls = 'qui-collapse'
import CollapseTransition from '../collapse-transition'

export default {
    name: 'CollapseItem',
    components: { CollapseTransition },
    data() {
        return {
            prefixCls,
            isActive: false
        }
    },
}
</script>