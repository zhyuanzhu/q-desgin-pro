<template>
        <table v-if="data.length > 0">
            <tbody>
                <tr class="table-flex table-body" 
                    v-for="(item, idx) in data" :key="item.id || idx"
                    :class="{'table-row-hover': hoverIdx == idx}" 
                    @mouseenter="hoverIdx = idx" @mouseleave="hoverIdx = -1">
                    <td class="table-main table-checkbox" v-if="rowSelection">
                        <check-box :active="item.checked" @click.native="handleClick(item)" />
                    </td>
                    <td v-for="(head, index) in header" :key="head.id || index" 
                        class="table-flex-td table-main">
                        <span class="table-text">{{ item[head.tableKey] }}</span>
                    </td>
                </tr>
                
            </tbody>
        </table>
        <Empty  v-else />
</template>
<script>

import Empty from '../empty';
import CheckBox from '../checkbox'

export default {
    name: 'TableMain',
    components: {
        Empty,
        CheckBox
    },
    props: {
        data: Array,
        header: Array,
        rowSelection: Boolean
    },
    data () {
        return {
            isHover: false,
            hoverIdx: -1
        }
    },
    methods: {
        handleClick (item) {
            item.checked = !item.checked;
            this.$emit('on-select-change', item)
        }
    },
}
</script>