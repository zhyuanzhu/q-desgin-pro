<template>
    <div :class="[prefixCls, disabled && `${prefixCls}-disabled`]" @mouseleave="handleMouseleave">
        <input type="hidden" :name="name" :value="currentValue">
        <div :class="`${prefixCls}-star-wrap`">
            <Icon v-for="item in maxCount" :type="setIconTtpe(item)" :class="`${prefixCls}-star`" :key="item"
                @mousemove="handleMousemove(item, $event)"
                :size="iconSize"
                :color="color"
            />
        </div>
        <div v-if="showText" :class="`${prefixCls}-text`" v-show="currentValue > 0">
            <slot>{{ currentValue }}</slot>
        </div>
    </div>
</template>
<script>


//暂不支持自定义icon
const prefixCls = 'qui-rate';
import Icon from '../icon/Icon.vue';

export default {
    name: 'Rate',
    components: {
        Icon
    },
    props: {
        maxCount: {
            type: Number,
            default: 5
        },
        value: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showText: {
            type: Boolean,
            default: false
        },
        name: String,
        allowHalf: {
            type: Boolean,
            default: false
        },
        iconSize: {
            type: [Number, String],
            default: 20
        },
        color: {
            type: String,
            default: '#F7B84F'
        }
    },
    data() {
        return {
            prefixCls,
            currentValue: this.value,
            hoverIndex: -1,
            isHover: false,
            isHalf: this.allowHalf && this.value.toString().indexOf('.') >= 0,
            iconType: 'staroutline'
        }
    },
    watch: {
        value (v) {
            this.currentValue = v;
        },
        currentValue (v) {
            // this.setHalf(v);
        }
    },
    methods: {

        setIconTtpe (value) {
            const { hoverIndex, isHover, currentValue, isHalf } = this;
            const currentIndex = isHover ? hoverIndex : currentValue;
            let iconType = 'staroutline', isFull = false, isLast = false;
            if (currentIndex >= value) isFull = true;
            if (isHover) {
                isLast = currentIndex === value;
            } else {
                isLast = Math.ceil(currentValue) === value;
            }
            if (!isLast && isFull || isLast && !isHalf) {
                iconType = 'star'
            }

            if (isLast && isHalf) {
                iconType = 'starhalf'
            }

            return iconType;

        },
        handleMouseleave () {

        },
        handleMousemove (item, evt) {

        }

    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_rate.scss";
</style>