<!--
 * @Author: your name
 * @Date: 2020-02-05 12:07:07
 * @LastEditTime: 2020-02-05 15:54:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \q-desgin-pro\src\components\message\message.vue
 -->
<template>
    <div :class="prefixCls">
        <transition name="message-ease-in">
            <div :class="`${prefixCls}-wrap`" v-if="show" @click="hideMask">
                <div :class="`${prefixCls}-main`">
                    <div :class="`${prefixCls}-text`">
                        <Icon :type="type" :color="type | filterColor" :size="28" style="margin-right: 5px;" />
                        <div :class="`${prefixCls}-content`" v-text="text"></div>
                    </div>
                    <div :class="`${prefixCls}-btn`">
                        <Button @click.stop="ok">确认</Button>
                        <Button @click.stop="cancel" :type="'primary'" v-if="onCancel">取消</Button>
                    </div>
                    <div :class="`${prefixCls}-close`" v-if="onCancel"></div>
                </div>
            </div>
        </transition>
        <transition name="message-mask-fade">
            <div :class="`${prefixCls}-mask`" v-if="show" @click="hideMask"></div>
        </transition>
    </div>
</template>
<script>

const prefixCls = 'qui-message';

import Button from '../button';
import ButtonGroup from '../button-group'
import Icon from '../icon';

export default {
    name: 'Message',
    components: {
        Button,
        ButtonGroup,
        Icon
    },
    props: {},
    data() {
        return {
            prefixCls,
            type: '',
            text: '',
            onOk: null,
            onCancel: null,
            destroy: null,
            show: null
        }
    },    
    methods: {
        ok () {
            this.onOk && this.onOk();
            this.show = false;
        },
        cancel () {
            this.onCancel && this.onCancel();
            this.show = false;
        },
        hideMask (e) {
            const dom = e.target;
            if (dom.className !== 'qui-message-wrap') return;
            this.cancel()
        }
    },
    filters: {
        filterColor (val) {
            if (!val) return;
            const enums = {
                error: '#f52f3e',
                warning: '#f90',
                success: '#23ac38'
            }
            return enums[val]
        }
    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_message.scss";
</style>