<!--
 * @Author: your name
 * @Date: 2020-01-04 01:04:21
 * @LastEditTime : 2020-01-04 02:04:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \q-desgin-pro\src\components\badge\badge.vue
 -->
<template>
    <div v-if="dot" :class="prefixCls" ref="badge">
        <slot></slot>
        <sup :class="`${prefixCls}-dot`" :style="styles" v-show="badge"></sup>
    </div>
    <div v-else-if="status || color" :class="[prefixCls, `${prefixCls}-status`]" ref="badge" >
        <span :class="statusClasses" :style="statusStyles"></span>
        <span :class="`${prefixCls}-status-text`"><slot name="text">{{ text }}</slot></span>
    </div>
    <div v-else :class="prefixCls" ref="badge">
        <slot></slot>
        <sup v-if="$slots.count" :style="styles" :class="customCountClasses">
            <slot name="count"></slot>
        </sup>
        <sup v-else-if="hasCount" :style="styles" :class="countClasses" v-show="badge">
            <slot name="text">{{ finalCount }}</slot>
        </sup>
    </div>
</template>
<script>

const prefixCls = 'qui-badge'; 
import { hasParam } from '../../utils/util';

export default {
    name: 'Badge',
    props: {
        count: {
            type: Number
        },
        dot: {
            type: Boolean,
            default: false
        },
        maxCount: {
            type: [Number, String],
            default: 99
        },
        text: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            validator (value) {
                const valueList = ['success', 'default', 'error', 'warning'];
                return hasParam(value, valueList)
            }
        },
        type: {
            type: String,
            validator (value) {
                const valueList = ['success', 'primary', 'normal', 'error', 'warning', 'info'];
                return hasParam(value, valueList)
            }
        },
        color: {
            type: String
        },
        offset: {
            type: Array,
            default: () => []
        },
        className: String
    },
    data () {
        return {
            prefixCls,
            defaultColorList: ['blue', 'green', 'red', 'yellow', 'pink', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']
        }
    },
    computed: {
        styles () {
            const style = {};
            const { offset } = this;
            if (offset.length === 2) {
                style['margin-top'] = `${offset[0]}px`;
                style['margin-right'] = `${offset[1]}px`
            }
            return style;
        },
        statusClasses () {
            const { prefixCls, status, color, defaultColorList } = this;
            return [
                `${prefixCls}-status-dot`, {
                    [`${prefixCls}-status-${status}`]: !!status,
                    [`${prefixCls}-status-${color}`]: !!color && hasParam(color, defaultColorList)
                }
            ]
        },
        statusStyles () {
            const { color, defaultColorList } = this;
            return hasParam(color, defaultColorList) ? {} : { 'backgroundColor': color }
        },
        badge () {
            let status = false;
            const { count, dot, text } = this;
            if (count) {
                status = parseInt(count) !== 0
            }
            if (dot) {
                status = count !== null && parseInt(count) === 0 ? false : true;
            }
            if (text !== '') status = true;
            return status;
        },
        customCountClasses () {
            const { prefixCls, className } = this;
            return [
                `${prefixCls}-count`,
                `${prefixCls}-count-custom`, {
                    [`${className}`]: !!className
                }
            ]
        },
        countClasses () {
            const { className, type, alone } = this;
            return [
                `${prefixCls}-count`, {
                    [`${className}`]: !!className,
                    [`${prefixCls}-count-alone`]: alone,
                    [`${prefixCls}-count-${type}`]: !!type
                }
            ]
        },
        finalCount () {
            const { text, count, maxCount } = this;
            if (text !== '') return text;
            return parseInt(count) >= parseInt(maxCount) ? `${maxCount}+` : count;
        },
        hasCount () {
            const { count, text } = this;
            if (count || text !== '') return true;
            if (parseInt(count) === 0) return true;
            return false;
        },
        alone () {
            return this.$slots.default === undefined;
        }

    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_badge.scss";
</style>