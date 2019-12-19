<template>
    <div :class="`${prefixCls}`" :style="styles">
        <transition :name="animate">  
            <div :class="`${prefixCls}-main`" :style="mainstyles" v-if="visible" ref="modal">
                <section :class="`${prefixCls}-header`" v-if="header">
                    <h3 :class="`${prefixCls}-header-title`" v-text="title"></h3>
                    <Icon :type="'close'" :size="24" :color="'#999'" :class="`${prefixCls}-header-close`" v-if="close" @click.native="cancel" />
                </section>
                <section :class="`${prefixCls}-container`"><slot></slot></section>
                <section :class="`${prefixCls}-footer`" v-if="footer">
                    <div :class="`${prefixCls}-footer-btn`">
                        <button-group>
                            <Button v-if="hasConfirm"  :size="'large'" v-text="confirmTxt" @click.native="confirm"></Button>
                            <Button v-if="hasCancel" :type="'primary'" :size="'large'" v-text="cancelTxt" @click.native="cancel"></Button>
                        </button-group>
                    </div>
                </section>
            </div>
        </transition>
        <modal-mask :visible="visible" :zIndex="zIndex - 1" @on-hide-mask="hideMask" />
    </div>
</template>

<script>

import ButtonGroup from '../button-group'
import Button from '../button'
import Icon from '../icon'
import ModalMask from './modal-mask'

const prefixCls = 'qui-modal';
export default {
    name: 'Modal',
    components: {
        ModalMask,
        ButtonGroup,
        Button,
        Icon
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
        visible: {
            type: Boolean,
            default: false
        },
        title: String,
        animate: {
            type: String,
            default: 'modal-slide-down'
        },
        width: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            prefixCls,
            zIndex: 9999,
            height: 0
        }
    },
    methods: {
        confirm (evt) {
            this.$emit('on-confirm', evt)
        },
        cancel (evt) {
            this.$emit('on-cancel', evt)
        },
        hideMask () {
            this.cancel()
        }
    },
    computed: {
        styles () {
            const { width, height } = this;
            return `margin-left: -${ width/2 }px`;
        },
        mainstyles () {
            const { zIndex, width } = this;
            return `z-index: ${zIndex}; width: ${width}px`;
        }
    },
    watch: {
        visible (value) {
            if (this.visible) {
                this.zIndex = this.zIndex + 1
            } 
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_modal.scss";
</style>