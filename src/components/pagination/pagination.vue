<template>
    <div :class="[`${prefixCls}`]" v-if="total > 0">
        <Page :total="total" :pageSize="pageSize" :circle="circle" @changePage="changePage" />
        <page-size :now="now" :total="total" v-if="showSize" />
    </div>
</template>
<script>

const prefixCls = 'qui-page';
import Page from './page';
import PageSize from './pagesize'

export default {
    name: 'Pagination',
    components: {
        Page,
        PageSize
    },
    props: {
        total: Number,
        pageSize: {
            type: Number,
            default: 10
        },
        current: {
            type: Number,
            default: 1
        },
        circle: {
            type: Boolean,
            default: false
        },
        fastSize: {
            type: Number,
            default: 5
        },
        transition: {
            type: String,
            default: 'page-fade-in-move-up'
        },
        showSize: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefixCls,
            now: this.current
        }
    },
    methods: {
        changePage (page) {
            this.now = page;
            this.$emit('on-change', page)
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_pagination.scss";
</style>