<template>
    <div :class="prefixCls">
        
    </div>
</template>
<script>

const prefixCls = 'qui-progress';
import { hasParam } from '../../utils/util';
import Icon from '../icon'

export default {
    name: 'Progress',
    components: { Icon },
    props: {
        status: {
            type: String,
            default: 'normal',
            validator (value) {
                const valueList = ['noraml', 'active', 'wrong', 'success'];
                return hasParam(value, valueList);
            }
        },
        percent: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            prefixCls,
            currentStatus: this.status
        }
    },
}
</script>