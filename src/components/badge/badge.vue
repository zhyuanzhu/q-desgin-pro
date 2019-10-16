<template>
    <div :class="[prefixCls]">
        TODO:Badge
    </div>
</template>
<script>

const prefixCls = 'qui-badge';

export default {
    name: 'Badge',
    props: {

    },
    data () {
        return {
            prefixCls
        }
    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_badge.scss";
</style>