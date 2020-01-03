<template>
    <transition :name="transition">
        <div :class="[`${prefixCls}`, `${prefixCls}-${type}`]" v-show="visible">
            <Icon :type="type | iconFilter" :size="16" />
            {{ text }}
        </div>
    </transition>
</template>

<script>

const prefixCls = 'qui-alert';
import { hasParam } from '../../utils/util';
import Icon from '../icon'


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
            // default: 'alert-fade-in-move-up'
            default: 'qui-Fade'
        }
    },
    data() {
        return {
            prefixCls,
            timer: null,
            visible: false
        }
    }, 
    filters: {
        iconFilter (type) {
            if (!type) return;
            const enums = {
                success: 'smile',
                warning: 'meh',
                error: 'frown',
                info: 'warning-circle'
            };
            return enums[type]
        }
    }   
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_alert.scss";
</style>