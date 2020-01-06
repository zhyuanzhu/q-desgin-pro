<template>
    <div :class="[prefixCls, disabled && `${prefixCls}-disabled`]" @mouseleave="handleMouseleave">
        <input type="hidden" :name="name" :value="currentValue">
        <div :class="`${prefixCls}-star-wrap`">
            <Icon v-for="item in maxCount" :type="iconType" :key="item"
                :class="setStarClasses(item)"
                @mousemove.native="handleMousemove(item, $event)"
                @click.native="handleClick(item)"
                :size="iconSize" >
                <span :class="`${prefixCls}-star-content`" type="half"></span>
            </Icon>
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
        // iconType: {
        //     type: String,
        //     default: 'star'
        // }
    },
    data() {
        return {
            prefixCls,
            currentValue: this.value,
            hoverIndex: -1,
            isHover: false,
            iconType: 'star',
            isHalf: this.allowHalf && this.value.toString().indexOf('.') >= 0,
        }
    },
    watch: {
        value (v) {
            this.currentValue = v;
        },
        currentValue (v) {
            this.setHalf(v);
        }
    },
    methods: {
        setStarClasses (value) {
            const { hoverIndex, isHover, currentValue, isHalf, prefixCls } = this;
            const currentIndex = isHover ? hoverIndex : currentValue;
            let isFull = false, isLast = false;
            if (currentIndex >= value) isFull = true;
            if (isHover) {
                isLast = currentIndex === value;
            } else {
                isLast = Math.ceil(currentValue) === value;
            }
            return [`${prefixCls}-star`, {
                [`${prefixCls}-star-full`]: (!isLast && isFull) || (isLast && !isHalf),
                [`${prefixCls}-star-half`]: isLast && isHalf
            }]

        },
        handleClick (v) {
            if (this.disabled) return;
            if (this.isHalf) {
                v -= .5;
            }
            this.currentValue = v;
            this.$emit('input', v)
            this.$emit('on-change', v)
        },
        handleMouseleave () {
            if (this.disabled) return;
            this.isHover = false;
            this.setHalf(this.currentValue);
            this.hoverIndex = -1;
        },
        handleMousemove (item, evt) {
            if (this.disabled) return;
            this.isHover = true;
            if (this.allowHalf) {
                const domType = evt.target.getAttribute('type') || false;
                this.isHalf = domType === 'half';
            } else {
                this.isHalf = false;
            }
            this.hoverIndex = item;
        },
        setHalf (v) {
            this.isHalf = this.allowHalf && v.toString().indexOf('.') >= 0;
        }

    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_rate.scss";
</style>