<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}-main`">
            <div :class="`${prefixCls}-text`">
                <span :class="[`${prefixCls}-icon`, `${type}-icon`]"></span>
                <div :class="`${prefixCls}-content`" v-text="text"></div>
            </div>
            <div :class="`${prefixCls}-btn`">
                <Button @click="ok">确认</Button>
                <Button @click="cancel" :type="'primary'" v-if="onCancel">取消</Button>
            </div>
            <div :class="`${prefixCls}-close`" v-if="onCancel"></div>
        </div>
        <div :class="`${prefixCls}-mask`"></div>
    </div>
</template>
<script>

const prefixCls = 'qui-message';


import Button from '../button';
import ButtonGroup from '../button-group'
import { hasParam } from '../../utils/util';

//是否需要关闭icon，如果没有注册确认事件和关闭事件，默认确认和关闭直接destroy组件
//组件是直接删除还是简单的显示隐藏~ ^_^

export default {
    name: 'Message',
    components: {
        Button,
        ButtonGroup
    },
    props: {
        // type: {
        //     type: String,
        //     default: 'success',
        //     validator (value) {
        //         const valueList = ['success', 'warning', 'error'];
        //         return hasParam(value, valueList);
        //     }
        // },
        // autoClose: {
        //     type: Boolean,
        //     default: false
        // },
        // text: String,
        // onOk: {
        //     type: Function,
        //     default () {}
        // }
    },
    data() {
        return {
            prefixCls,
            type: '',
            text: '',
            onOk: null,
            onCancel: null,
            destroy: null
        }
    },    
    methods: {
        ok () {
            this.onOk && this.onOk();
            this.destroy();
        },
        cancel () {
            this.onCancel && this.onCancel();
            this.destroy();
            // console.log(this.destroy())
        }
    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_message.scss";
</style>