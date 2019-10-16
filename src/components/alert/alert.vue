<template>
    <transition :name="transition">
            <div :class="[`${prefixCls}`, `${prefixCls}-${type}`]">
            alert

        </div>
    </transition>
</template>

<script>

const prefixCls = 'qui-alert';
import { hasParam } from '../../utils/util';

//处理成像toast那样


export default {
    name: 'Alert',
    props: {
        message: String,
        duration: {
            type: Number,
            default: 3
        },
        type: {
            type: String,
            default: 'warning',
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
            prefixCls
        }
    },    
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_alert.scss";
</style>