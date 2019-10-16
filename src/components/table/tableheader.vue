<template>
    <table>
        <thead>
            <th class="table-flex">
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
export default {
    name: 'TableHeader',
    props: {
        header: Array
    },
    methods: {
        setWidth() {
            const { length } = this.header;
            return `width: ${99.99 / length}%;`;
        }
    },
}
</script>