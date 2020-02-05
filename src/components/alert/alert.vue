<!--
 * @Author: your name
 * @Date: 2020-02-05 12:07:07
 * @LastEditTime : 2020-02-05 12:21:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \q-desgin-pro\src\components\alert\alert.vue
 -->
<template>
    <transition :name="transition">
        <div :class="[`${prefixCls}`, `${prefixCls}-${type}`]" v-if="visible">
            <Icon :type="type | iconFilter" :size="16" />
            <span :class="`${prefixCls}-text`">{{ text }}</span>
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
            default: 'alert-fade'
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