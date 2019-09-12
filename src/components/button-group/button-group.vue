<template>
    <div :class="[`${prefixCls}`, vertical && `${prefixCls}-vertical`]">
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = 'qui-button-group';

export default {
    name: 'ButtonGroup',
    props: {
        vertical: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefixCls
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import '../../styles/components/_button-group.scss';
</style>