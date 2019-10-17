<template>
    <div :class="[prefixCls, border && `${prefixCls}-border`]">
        <div :class="`${prefixCls}-header`" >
            <table-header :header="header" :rowSelection="rowSelection" :data="data" />
        </div>
        <div :class="`${prefixCls}-main`" >
            <table-main :data="data" :header="header" :rowSelection="rowSelection" @on-select-change="onSelectChange" />
        </div>
        <div :class="`${prefixCls}-footer`" v-if="footer && total > 1">
            <pagination :total="total" :circle="true" @on-change="onChange" />
        </div>
    </div>
</template>
<script>

const prefixCls = 'qui-table';
//处理成 可以带多选框，无数据直接提示，自动带分页，错误的时候展示错误页面，点击可以调用部分ajax获取数据
import Empty from '../empty';
import Pagination from '../pagination';
import TableHeader from './tableheader'
import TableMain from './tablemain'

//多选框，默认选中选项

export default {
    name: 'Table',
    components: {
        Empty,
        Pagination,
        TableHeader,
        TableMain
    },
    mixins: [],
    props: {
        loading: {
            type: Boolean,
            default: true
        },
        rowSelection: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default: () => [1, 2, 3]
        },
        header: {
            type: Array,               //后续data中的数据会根据header传入的键去取值
            default: () => []
        },
        defaultSelect: {
            type: Array,
            default: () => []
        },
        footer: {
            type: Boolean,
            default: true
        },
        total: {
            type: Number,
            default: 1
        },
        border: {
            type: Boolean,
            default: true
        }

    },
    data() {
        return {
            prefixCls,
        }
    },
    methods: {
        onChange (page) {
            this.$emit('on-change', page)
        },
        onSelectChange (item) {
            console.log(item);
            console.log(this.data)
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_table.scss";
</style>