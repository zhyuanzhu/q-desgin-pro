<!--
 * @Author: your name
 * @Date: 2020-01-04 01:04:21
 * @LastEditTime: 2020-01-04 01:14:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \q-desgin-pro\src\components\badge\badge.vue
 -->
<template>
    <div :class="[prefixCls]">
        TODO: Badge-
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