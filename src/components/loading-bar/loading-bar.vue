<template>
    <transition name="loading-bar-fade">
        <div :class="prefixCls" :style="styles" v-show="show">
            <div :class="classes" :style="mainStyles"></div>
        </div>
    </transition>
</template>
<script>

const prefixCls = 'qui-loading-bar';

export default {
    name: 'LoadingBar',
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        errorColor: {
            type: String,
            default: 'error'
        },
        height: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
            prefixCls,
            percent: 0,
            status: 'success',
            show: true
        }
    },
    computed: {
        classes () {
            const { prefixCls, status, color, errorColor } = this;
            return [`${prefixCls}-main`, {
                [`${prefixCls}-main-primary`]: color === 'primary' && status === 'success',
                [`${prefixCls}-main-error`]: errorColor === 'error' && status === 'error'
            }]
        },
        styles () {
            return { height: `${this.height}px` };
        },
        mainStyles () {
            const {percent, height, color, status, errorColor} = this;
            const style = { width: `${percent}%`, height: `${height}px` };
            if (color !== 'primary' && status === 'success') {      //自定义
                style.backgroundColor = color;
            }

            if (errorColor !== 'error' && status === 'error') {   
                style.backgroundColor = errorColor
            }
            return style;
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_loading-bar.scss";
</style>