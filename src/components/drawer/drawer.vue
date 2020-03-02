<template>
    <div v-transfer-dom :data-transfer="transfer">
        <transition name="drawer-mask-fade">
            <div :class="`${prefixCls}-mask`" v-show="visible" v-if="mask" @click="handleMask"></div>
        </transition>
        <div :class="[prefixCls, `${prefixCls}-wrapper`, !wrapShow && `${prefixCls}-hidden`]" @click="handleWrapClick">
            <transition :name="`drawer-move-${placement}`">
                <div :class="classes" v-show="visible" :style="`width: ${parseInt(width)}px;`">
                    <div ref="content" :class="`${prefixCls}-content`">
                        <div :class="`${prefixCls}-close`">
                            <Icon type="close" :class="`${prefixCls}-close-icon`" v-if="closable" @click.native="close" />
                        </div>
                        <div :class="`${prefixCls}-header`" v-if="showHead">
                            <slot name="header"><div :class="`${prefixCls}-header-inner`">{{ title }}</div></slot>
                        </div>
                        <div :class="`${prefixCls}-body`"><slot></slot></div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>

const prefixCls = 'qui-drawer';

import Icon from '../icon/Icon.vue';
import TransferDom from  '../../directives/transfer-dom';
import { hasParam, on, off } from '../../utils/util';



export default {
    name: 'Drawer',
    mixins: [],
    components: {
        Icon
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: String,
        width: {
            type: [Number, String],
            default: 256
        },
        closable: {
            type: Boolean,
            default: true
        },
        maskCloseable: {
            type: Boolean,
            default: true
        },
        mask: {
            type: Boolean,
            default: true
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        placement: {
            type: String,
            default: 'right',
            validator (value) {
                return hasParam(value, ['left', 'right'])
            }
        },
        zIndex: {
            type: Number,
            default: 1000
        },
        transfer: {
            type: Boolean,
            default: true
        },
        beforeClose: Function,
    },
    data () {
        return {
            prefixCls,
            visible: this.value,
            wrapShow: false,
            showHead: true
        }
    },
    watch: {
        value (v) {
            this.visible = v;
        },
        title (v) {
            if (this.$slots.header === undefined) {
                this.showHead = !!v;
            }
        },
        visible (val) {
            if (val === false) {
                this.timer = setTimeout( () => {
                    this.wrapShow = false;
                }, 300)
                
            } else {
                if (this.timer) clearTimeout(this.timer);
                this.wrapShow = true;
            }
            
            this.$emit('on-visible-change', val);
        },
    },
    methods: {
        handleMask () {
            const { maskCloseable, mask, close } = this;
            if (maskCloseable && mask) {
                close()
            }
        },
        handleWrapClick (evt) {
            const className = evt.target.getAttribute('class');
            const { prefixCls, handleMask } = this;
            if (className && className.indexOf(`${prefixCls}-wrapper`) > -1) {
                handleMask()
            }
        },
        close () {
            const { beforeClose, handleClose } = this;
            if (!beforeClose) {
                return handleClose();
            }
            const _beforeClose = handleClose();
            if (_beforeClose && _beforeClose.then) {
                _beforeClose.then(() => {
                    handleClose();
                })
            } else {
                handleClose();
            }
        },
        handleClose () {
            this.visible = false;
            this.$emit('input', false)
            this.$emit('on-close');
        },
    },
    computed: {
        classes () {
            const { prefixCls, placement, showHead } = this;
            return [`${prefixCls}-main`, `${prefixCls}-${placement}`, {
                [`${prefixCls}-no-header`]: !showHead
            }]
        },
    },
    mounted () {
        if (this.visible) {
            this.wrapShow = true;
        }
        let showHead = true;

        if (this.$slots.header === undefined && !this.title) {
                showHead = false;
            }

        this.showHead = showHead;
    },
    directives: { TransferDom }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_drawer.scss";
</style>