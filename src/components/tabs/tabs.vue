<template>
    <div :class="[prefixCls]">
        TODO:Tabs
    </div>
</template>
<script>

const prefixCls = 'qui-tabs';

export default {
    name: 'Tabs',
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
    @import "../../styles/components/_tabs.scss";
</style>