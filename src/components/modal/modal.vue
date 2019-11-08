<template>
    <div :class="[`${prefixCls}`]">
        <transition :name="animate">
            <div :class="`${prefixCls}-main`" v-if="value">
                <section :class="`${prefixCls}-header`" v-if="header">
                    <h3 :class="`${prefixCls}-header-title`" v-text="title"></h3>
                    <span :class="`${prefixCls}-header-close`" v-if="close" @click="cancel"></span>
                </section>
                <section :class="`${prefixCls}-container`"><slot></slot></section>
                <section :class="`${prefixCls}-footer`" v-if="footer">
                    <div :class="`${prefixCls}-footer-btn`">
                        <button-group>
                            <Button v-if="hasConfirm" :type="confitmType" :size="'large'" v-text="confirmTxt" @click.native="confirm"></Button>
                            <Button v-if="hasCancel" :type="cancelType" :size="'large'" v-text="cancelTxt" @click.native="cancel"></Button>
                        </button-group>
                    </div>
                </section>
            </div>
        </transition>
        <div :class="`${prefixCls}-mask`" v-if="mask" @click="closeMask" v-show="value"></div>
    </div>
</template>

<script>

import ButtonGroup from '../button-group'
import Button from '../button'

const prefixCls = 'qui-modal';
export default {
    name: 'Modal',
    components: {
        ButtonGroup,
        Button
    },
    props: {
        header: {
            type: Boolean,
            default: true
        },
        footer: {
            type: Boolean,
            default: true
        },
        close: {
            type: Boolean,
            default: true
        },
        confirmTxt: {
            type: String,
            default: '确认'
        },
        cancelTxt: {
            type: String,
            default: '取消'
        },
        confitmType: {
            type: String,
            default: 'main'
        },
        cancelType: {
            type: String,
            default: 'primary'
        },
        hasConfirm: {
            type: Boolean,
            default: true
        },
        hasCancel: {
            type: Boolean,
            default: true
        },
        mask: {
            type: Boolean,
            default: true
        },
        value: {
            type: Boolean,
            default: false
        },
        title: String,
        animate: {
            type: String,
            default: 'slide-down'
        }

    },
    data() {
        return {
            prefixCls,
            // isShow: this.value
        }
    },
    methods: {
        confirm (evt) {
            this.$emit('on-confirm', evt)
        },
        cancel (evt) {
            // this.hide();
            this.$emit('on-cancel', evt)
        },
        hide () {
            this.value = false;
        },
        closeMask () {
            // this.hide();
            this.cancel()
        }
    },
    // watch: {
    //     value (show) {
    //         this.isShow = show;
    //     }
    // },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_modal.scss";
    // .slide-down-enter, .slide-down-leave-to {
    //     opacity: 0;
    //     transform: translateY(-400px);
    // }
    // .slide-down-enter-active, .slide-down-leave-active {
    //     transition: all .8s;
    // }
</style>