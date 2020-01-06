<template>
    <div :class="prefixCls">
        <svg :style="svgStyle" :class="`${prefixCls}-svg`">
            <defs v-if="showDefs">
                <linearGradient x1="1" y1="0" x2="0" y2="0" :id="id">
                    <stop offset="0%" :stop-color="strokeColor[0]"></stop>
                    <stop offset="100%" :stop-color="strokeColor[1]"></stop>
                </linearGradient>
            </defs>
            <circle cx="50%" cy="50%" :r="`${(size - 6) / 2}`" :stroke="trailColor" :stroke-width="trailWidth" fill="none" />
            <!-- 内圈圆，虚线用于展示进度  :stroke="`url(#${id})`" -->
            <circle cx="50%" cy="50%" :r="`${(size - 6) / 2}`" :stroke="getEndStatus(id)"
                :stroke-width="strokeWidth" fill="none" 
                :stroke-dasharray='animatePositon.end'
                :stroke-linecap="strokeLinecap"
            >
            <animate attributeName="stroke-dasharray" :from="animatePositon.start" :to="animatePositon.end" :dur="`${duration}s`"/>
            <animate v-if="showDefs" attributeName="stroke" :from="strokeColor[0]" :to="strokeColor[1]" :dur="`${duration}s`" />
            <animate v-else attributeName="stroke" :from="strokeColor" :to="strokeColor" :dur="`${duration}s`"/>
            </circle>
        </svg>
        <div :class="[`${prefixCls}-text`]"><slot></slot></div>
    </div>
</template>
<script>
import { hasParam } from '../../utils/util';

const prefixCls = 'qui-circle';

export default {
    name: 'qCircle',
    props: {
        percent: {
            type: Number,
            default: 0
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        strokeColor: {
            type: [String, Array],
            default: '#0074ff'
        },
        size: {
            type: Number,
            default: 140
        },
        strokeLinecap: {
            type: String,
            default: 'round',
            validator (value) {
                return hasParam(value, ['round', 'square'])
            }
        },
        trailWidth: {
            type: Number,
            default: 5
        },
        trailColor: {
            type: String,
            default: '#dcdcdc'
        },
        duration: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            prefixCls,
            id: `${prefixCls}_${Date.now()}`
        }
    },
    methods: {
        getEndStatus (id) {
            const { showDefs, strokeColor } = this;
            if (showDefs) {
                return `url(#${id})`
            } else {
                return strokeColor;
            }
        }
    },
    computed: {
        showDefs () {
            return typeof this.strokeColor !== 'string';
        },
        svgStyle () {
            return { width: this.size, height: this.size };
        },
        animatePositon () {
            const { size, percent } = this;
            const line = Math.PI * size, rate = percent / 100;
            //stork-dasharray有两个参数，第一个代表虚线的宽度，第二个代表虚线两两的间隔
            return {
                start: `0, ${line}`,
                end: `${line * rate}, ${line * (1 - rate)}`
            }
        }
    }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_circle.scss";
</style>