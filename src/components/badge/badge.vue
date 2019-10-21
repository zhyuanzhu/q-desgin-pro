<template>
    <div :class="[prefixCls]">
        <span v-if="count > 0">{{ setCount(count, maxCount) }}</span>
    </div>
</template>
<script>

const prefixCls = 'qui-badge'; 

export default {
    name: 'Badge',
    props: {
        count: {
            type: Number,
            default: 0
        },
        maxCount: Number,
        // status: {
        //     type: String,
        //     default: 'success'
        // },
        
    },
    data () {
        return {
            prefixCls
        }
    },
    methods: {
        setCount (count, maxCount = 0) {
            if (count > maxCount) {
                return `${maxCount}+`;
            }
            return count;
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_badge.scss";
</style>