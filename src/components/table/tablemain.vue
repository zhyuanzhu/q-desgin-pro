<template>
        <table v-if="data.length > 0">
            <tbody>
                <tr class="table-flex table-body" :class="{'table-row-hover': isHover}" @mouseenter="isHover = !isHover" @mouseleave="isHover=!isHover">
                    <td v-for="item in data" class="table-flex-td table-main"><span class="table-text">{{ item }}</span></td>
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
        data: Array
    },
    data () {
        return {
            isHover: false
        }
    }
}
</script>