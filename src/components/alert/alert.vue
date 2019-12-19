<template>
    <transition :name="transition">
        <div :class="[`${prefixCls}`, `${prefixCls}-${type}`]" v-show="visible">
            <Icon :type="'warning-sign'" :size="16" />
            {{ text }}
        </div>
    </transition>
</template>

<script>

const prefixCls = 'qui-alert';
import { hasParam } from '../../utils/util';
import Icon from '../icon'

//处理成像toast那样


export default {
    name: 'Alert',
    components: { Icon },
    props: {
        text: String,
        duration: {
            type: Number,
            default: 3
        },
        type: {
            type: String,
            default: 'info',
            validator (value) {
                const valueList = ['success', 'warning', 'error', 'info'];
                return hasParam(value, valueList); 
            }
        },
        transition: {
            type: String,
            default: 'alert-fade-in-move-up'
        }
    },
    data() {
        return {
            prefixCls,
            timer: null,
            visible: false
        }
    },    
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_alert.scss";
</style>