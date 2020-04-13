<template>
    <transition name="loading-fade">
        <div :class="classes" v-if="isFullscreen">
            <div :class="`${prefixCls}-main`">
                <div :class="`${prefixCls}-dot`">
                    <span :class="`${prefixCls}-dot-item`"></span>
                    <span :class="`${prefixCls}-dot-item`"></span>
                    <span :class="`${prefixCls}-dot-item`"></span>
                    <span :class="`${prefixCls}-dot-item`"></span>
                </div>
                <p :class="`${prefixCls}-text`"><slot></slot></p>
            </div>
        </div>
    </transition>
</template>
<script>

const prefixCls = 'qui-loading';
// todo: fullscreen

export default {
    name: 'Loading',
    props: {
        fix: {
            type: Boolean,
            default: false
        },
        // fullscreen: {
        //     type: Boolean,
        //     default: false
        // }
    },
    data() {
        return {
            prefixCls,
            show: false,
            showText: false,
            fullscreen: false
        }
    },
    computed: {
        classes () {
            const { prefixCls, fix, fullscreen, showText } = this;
            return [prefixCls, {
                [`${prefixCls}-fix`]: fix,
                [`${prefixCls}-show-text`]: showText,
                [`${prefixCls}-fullscreen`]: fullscreen
            }]
        },
        isFullscreen () {
            if (this.fullscreen) {
                return this.show
            }
            return true
        }
    },
    mounted() {
        this.showText = this.$slots.default !== undefined
    },
    // watch: {
    //     show (v) {
    //         if (this.showLoading != v) {
    //             this.showLoading = v;
    //         }
    //     }
    // },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_loading.scss";
</style>