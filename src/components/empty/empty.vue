<template>
    <div :class="[`${prefixCls}`]">
        <Icon :type="emptyBox" :size="size" :color="color" v-if="empty && !error" />
        <Icon :type="netBox" :size="size" :color="color" v-if="empty && error" />
        
        <p :class="`${prefixCls}-text`" v-if="empty && !error">暂无数据</p>
        <p :class="`${prefixCls}-text`" v-if="error">
            <slot name="error">
                <p>发生了未知异常~<a href="javscript" @click="handleClick" :class="`${prefixCls}-retry`">点击重试</a> </p>
            </slot>
        </p>
    </div>
</template>

<script>

const prefixCls = "qui-empty"; 

import Icon from '../icon'

export default {
    name: 'Empty',
    components: { Icon },
    props: {
        error: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: true
        },
        size: {
            type: Number,
            default: 140
        },
        color: {
            type: String,
            default: '#DCE0E6'
        },
        emptyBox: {
            type: String,
            default: 'empty-box'
        },
        netBox: {
            type: String,
            default: 'net-error'
        }
    },
    data () {
        return {
            prefixCls
        }
    },
    methods: {
        handleClick (evt) {
            this.$emit('on-retry', evt)
        }
    },
}
</script>

<style lang="scss" type="text/scss">
    @import "../../styles/components/_empty.scss";
</style>