<template>
    <table>
        <thead>
            <th class="table-flex">
                <td class="table-header table-checkbox" v-if="rowSelection">
                    <check-box :active="!!setTableCheckAll()" :partial="setTableCheckAll() == 2" @click.native="selectAll" />
                </td>
                <td class="table-flex-td table-header" 
                    v-for="(item, index) in header" :style="setWidth()" 
                    :key="item.tableKey || index">
                    <span class="table-text">{{ item.tableVal }}</span>
                </td>
            </th>
        </thead>
    </table>
</template>
<script>

import CheckBox from '../checkbox'

export default {
    name: 'TableHeader',
    components: {
        CheckBox
    },
    props: {
        header: Array,
        rowSelection: Boolean,
        data: Array,
    },
    data () {
        return {
            tableCheckAll: false
        }
    },
    methods: {
        setWidth() {
            const { length } = this.header;
            return `width: ${99.99 / length}%;`;
        },
        setTableCheckAll () {
            const { data } = this;
            const newArr = data.filter(d => {
              return d.checked == true;
            });
            const { length } = newArr;
            let n = 0;       //0: 全部选，1： 全选，2：不全选
            if (length == data.length) {
                n = 1;
            }
            if (length && length < data.length) {
                n = 2;
            }
            return n;
        },
        selectAll () {
            const { data } = this;
            let check = this.setTableCheckAll() == 1;
            data.map(item => item.checked = !check);
        }
    },
}
</script>