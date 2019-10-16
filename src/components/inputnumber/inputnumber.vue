<template>
    <div :class="[prefixCls]">
        TODO:InputNumber
    </div>
</template>
<script>

const prefixCls = 'qui-inputNumber';

export default {
    name: 'InputNumber',
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
    @import "../../styles/components/_inputnumber.scss";
</style>