<template>
    <div :class="[prefixCls, `${prefixCls}-default`]" v-if="!$slots.backtop" v-show="isShow" @click="back" :style="styles">
        <Icon type="arrow-up" :size="iconSize" />
    </div>
    <div v-else v-show="isShow" :class="prefixCls" :style="styles">
        <slot></slot>
        <div :class="`${prefixCls}-back`" @click="back"><slot name="backtop"></slot></div>
    </div>
</template>
<script>

const prefixCls = 'qui-back-top';
import Icon from '../icon/Icon.vue';
import { on, off, scrollTop } from '../../utils/util';

export default {
    name: 'BackTop',
    components: {
        Icon
    },
    props: {
        height: {
            type: Number,
            default: 400
        },
        bottom: {
            type: Number,
            default: 50
        },
        duration: {
            type: Number,
            default: 1000
        },
        right: {
            type: Number,
            default: 30
        },
        iconSize: {
            type: Number,
            default: 28
        }
    },
    data() {
        return {
            prefixCls,
            isShow: false
        }
    },
    mounted () {
        on(window, 'scroll', this.handleScroll);
        on(window, 'resize', this.handleScroll);
        this.handleScroll()
    },
    methods: {
        handleScroll () {
            this.isShow = window.pageYOffset >= this.height;
        },
        back () {
            const _top = document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop(window, _top, 0, this.duration);
            this.$emit('on-click');
        }
    },
    computed: {
        styles () {
            const { bottom, right } = this;
            return {
                bottom: `${bottom}px`,
                right: `${right}px`
            }
        }
    },
    beforeDestroy () {
        off(window, 'scroll', this.handleScroll);
        off(window, 'resize', this.handleScroll);
    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_back-top.scss";
</style>