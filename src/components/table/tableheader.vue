<template>
    <table>
        <thead>
            <th class="table-flex">
                <td class="table-flex-td table-header" v-for="(item, index) in header" :style="setWidth()"><span class="table-text">{{ item }}</span></td>
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