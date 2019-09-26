<template>
    <div :class="prefixCls">
        当前第{{ now }} 页，共{{ total }}条
    </div>
</template>
<script>

const prefixCls = 'qui-pageSize';

export default {
    name: 'PageSize',
    props: {
        now: Number,
        total: Number
    },
    data() {
        return {
            prefixCls
        }
    },

}
</script>