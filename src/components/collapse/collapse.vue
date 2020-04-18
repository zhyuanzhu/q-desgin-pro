
<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>

const prefixCls = 'qui-collapse'

export default {
    name: 'Collapse',
    data() {
        return {
            prefixCls
        }
    },
}
</script>


<style lang="scss" type="text/scss">
    @import "../../styles/components/_collapse.scss";
</style>
