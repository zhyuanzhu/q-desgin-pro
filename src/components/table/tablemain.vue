<template>
        <table v-if="data.length > 0">
            <tbody>
                <tr class="table-flex table-body" 
                    v-for="(item, idx) in data" :key="item.id || idx"
                    :class="{'table-row-hover': hoverIdx == idx}" 
                    @mouseenter="hoverIdx = idx" @mouseleave="hoverIdx = -1">
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

export default {
    name: 'TableMain',
    components: {
        Empty
    },
    props: {
        data: Array,
        header: Array
    },
    data () {
        return {
            isHover: false,
            hoverIdx: -1
        }
    },
    methods: {
        
    },
}
</script>