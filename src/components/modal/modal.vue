<template>
    <div :class="[`${prefixCls}`]">
        <div :class="`${prefixCls}-main`">
            <section :class="`${prefixCls}-header`" v-if="header">
                <h3 :class="`${prefixCls}-header-title`" v-text="title"></h3>
                <span :class="`${prefixCls}-header-close`" v-if="close"  @click.native="cancel"></span>
            </section>
            <section :class="`${prefixCls}-container`">container</section>
            <section :class="`${prefixCls}-footer`" v-if="footer">
                <div :class="`${prefixCls}-footer-btn`">
                    <button-group>
                        <Button v-if="hasConfirm" :type="confitmType" :size="'large'" v-text="confirmTxt" @click.native="confirm"></Button>
                        <Button v-if="hasCancel" :type="cancelType" :size="'large'" v-text="cancelTxt" @click.native="cancel"></Button>
                    </button-group>
                </div>
            </section>
        </div>
        <div :class="`${prefixCls}-mask`"></div>
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
        title: String

    },
    data() {
        return {
            prefixCls
        }
    },
    methods: {
        confirm (evt) {
            this.$emit('on-confirm', evt)
        },
        cancel (evt) {
            this.$emit('on-cancel', evt)
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_modal.scss";
</style>