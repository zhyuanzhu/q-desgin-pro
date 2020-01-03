<template>
    <div :class="wrapClasses">
        <div :class="`${prefixCls}-main`">
            <div :class="`${prefixCls}-main-bg`" :style="bgStyles">
                <div :class="`${prefixCls}-text-inside`" v-if="textInside">{{ percent }}%</div>
            </div>
            <div :class="`${prefixCls}-main-bg-success`" :style="successBgStyles"></div>
        </div>
        <span v-if="!hideText && !textInside" :class="`${prefixCls}-text`">
            <slot>
                <Icon v-if="statusWrongOrSuccess" :class="`${prefixCls}-text-info`" :type="iconType" :size="iconSize" />
                <span v-else :class="`${prefixCls}-text-info`">{{ percent }}%</span>
            </slot>
        </span>
    </div>
</template>
<script>

const prefixCls = 'qui-progress';
import { hasParam } from '../../utils/util';
import Icon from '../icon'

//后续添加处理原型进度条，===> svg


export default {
    name: 'Progress',
    components: { Icon },
    props: {
        status: {
            type: String,
            default: 'normal',
            validator (value) {
                const valueList = ['normal', 'active', 'wrong', 'success'];
                return hasParam(value, valueList);
            }
        },
        percent: {
            type: Number,
            default: 0
        },
        successPercent: {
            type: Number,
            default: 0
        },
        hideText: {
            type: Boolean,
            default: false
        },
        strokeWidth: {
            type: Number,
            default: 10
        },
        strokeColor: {
            type: [String, Array]
        },
        vertical: {
            type: Boolean,
            default: false
        },
        textInside: {
            type: Boolean,
            default: false
        },
        iconSize: {
            type: Number,
            default: 12
        }
    },
    data() {
        return {
            prefixCls,
            currentStatus: this.status
        }
    },
    watch: {
        percent (newVal, oldVal) {
            if (newVal < oldVal) {
                this.handleStatus(true)
            } else {
                this.handleStatus()
            }
        },
        status (v) {
            this.currentStatus = v;
        }
    },
    created() {
        this.handleStatus()
    },
    methods: {
        handleStatus(isFinish) {
            if (isFinish) {
                this.currentStatus = 'normal';
                this.$emit('on-status-change', 'normal');
            } else {
                if (parseInt(this.percent, 10) == 100) {
                    this.currentStatus = 'success'
                    this.$emit('on-status-change', 'success');
                }
            }
        }
    },
    computed: {
        iconType () {
            const { currentStatus } = this;
            return currentStatus == 'wrong' ? 'error' : 'success'
        },
        statusWrongOrSuccess () {
            const { currentStatus } = this;
            return currentStatus == 'wrong' || currentStatus == 'success';
        },
        wrapClasses () {
            const { prefixCls, currentStatus, hideText, textInside, vertical } = this;
            return [
                prefixCls,
                `${prefixCls}-${currentStatus}`,
                {
                    [`${prefixCls}-show-info`]: !hideText && !textInside,
                    [`${prefixCls}-vertical`]: vertical
                }
            ]
        },
        bgStyles () {
            const { vertical, percent, strokeWidth, strokeColor } = this;
            const style = vertical ? { height: `${percent}%`, width: `${strokeWidth}px` } 
                                   : { width: `${percent}%`, height: `${strokeWidth}px` };
            if (strokeColor) {
                if (typeof strokeColor === 'string') {
                    style['background-color'] = strokeColor
                } else {
                    style['background-image'] = `linear-gradient(to right, ${strokeColor[0]} 0%, ${strokeColor[1]} 100%)`
                }
            }
            return style;
        },
        successBgStyles () {
            const { vertical, strokeWidth, successPercent } = this;
            return vertical ? { height: `${successPercent}%`, widht: `${strokeWidth}px` } 
                            : { width: `${successPercent}%`, height: `${strokeWidth}px` };
        }
    },
}
</script>
<style lang="scss" type="type/scss">
    @import "../../styles/components/_progress.scss";
</style>