<template>
    <div :class="wrapClasses" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave" >
        <div :class="`${prefixCls}-container`" :style="{ height }">
            <transition name="carousel-show" v-if="arrowShow">  <!-- 左侧箭头 -->
                <div v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
                    :class="`${prefixCls}-arrow-left`"
                    @mouseenter="handleButtonEnter('left')"
                    @mouseleave="handleButtonLeave"
                    @click.stop="throttledArrowClick(activeIndex - 1)" >
                    <Icon type="arrow-left" />
                </div>
            </transition>
            <transition name="carousel-show" v-if="arrowShow"> <!-- 右侧箭头 -->
                <div v-show="(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"
                    :class="`${prefixCls}-arrow-right`"
                    @mouseenter="handleButtonEnter('right')"
                    @mouseleave="handleButtonLeave"
                    @click.stop="throttledArrowClick(activeIndex + 1)" >
                    <Icon type="arrow-right" />
                </div>
            </transition>
            <!-- 轮播图位置 -->
            <slot></slot>
        </div>
        <!-- 外面的按钮 -->
        <ul v-if="indicatorPosition !== 'none'" :class="dotWrapClasses">
            <li v-for="(item, index) in items" :key="index"
                :class="[`${prefixCls}-dot-item`, `${prefixCls}-dot-item-${direction}`, index === activeIndex && `dot-active`]"
                @mouseenter="throttledIndicatorHover(index)"
                @click.stop="handleIndicatorClick(index)" >
                <span :class="`${prefixCls}-dot-btn`">
                    <span v-if="hasLabel">{{ item.label }}</span>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>

const prefixCls = "qui-carousel";
import Icon from "../icon/Icon.vue";
import { throttle } from "throttle-debounce";
import { hasParam, getStyle, on, off } from '../../utils/util';

export default {
    name: "Carousel",
    components: {
        Icon
    },
    props: {
        initialIndex: {
            type: Number,
            default: 0
        },
        height: {
            type: String,
            default: '20px'
        },
        trigger: {
            type: String,
            default: "hover"
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 3000
        },
        indicatorPosition: String,
        indicator: {
            type: Boolean,
            default: true
        },
        arrow: {
            type: String,
            default: "hover"
        },
        type: String,
        loop: {
            type: Boolean,
            default: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator (value) {
                return hasParam(value, ['vertical', 'horizontal'])
            }
        }
    },
    data() {
        return {
            prefixCls,
            items: [],
            activeIndex: -1,
            containerWidth: 0,
            timer: null,
            hover: false
        }
    },
    created () {
        this.throttledArrowClick = throttle(300, true, index => {
            this.setActiveItem(index);
        });
        this.throttledIndicatorHover = throttle(300, index => {
            this.handleIndicatorHover(index);
        });
    },
    mounted() {
        this.updateItems();
        this.$nextTick(() => {
    //   addResizeListener(this.$el, this.resetItemPosition);
            on(window, 'resize', this.handleResize);
            if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
                this.activeIndex = this.initialIndex;
            }
            this.startTimer();
        });
    },
    watch: {
        items (v) {
            if (!v.length) return;
            this.setActiveItem(this.initialIndex);
        },
        activeIndex (newIndex, oldIndex) {
            this.resetItemPosition(oldIndex);
            if (oldIndex > -1) {
                this.$emit('change', { newIndex, oldIndex } );
            }
        },
        autoplay (v) {
            v ? this.startTimer() : this.pauseTimer();
        },
        loop () {
            this.setActiveItem(this.activeIndex);
        }
    },
    methods: {
        handleMouseEnter() {
            this.hover = true;
            this.pauseTimer();
        },
        handleMouseLeave() {
            this.hover = false;
            this.startTimer()
        },
        pauseTimer () {
            if (!this.timer) return;
            clearInterval(this.timer);
            this.timer = null;
        },
        startTimer () {
            const { interval, autoplay, timer, playSlides } = this;
            if (interval <= 0 || !autoplay || timer) return;
            this.timer = setInterval(playSlides, interval)
        },
        playSlides () {
            const { activeIndex, items: { length }, loop } = this;
            if (activeIndex < length - 1) return this.activeIndex++;
            if (loop) return this.activeIndex = 0; 
        },
        handleButtonLeave () {
            if (this.direction === 'vertical') return;
            this.items.forEach(item => item.hover = false)
        },
        handleButtonEnter (arrow) {
            if (this.direction === 'vertical') return;
            this.items.forEach((item, index) => {
                if (arrow === this.itemInstage(item, index)) {
                    item.hover = true;
                }
            })
        },
        itemInstage (item, index) {
            const { items } = this,
                length = items.length,
                isLeft = index === length - 1 && item.inStage && items[0].active || (item.inStage && items[index + 1] && items[index + 1].active);
            if (isLeft) return 'left';
            const isRight = index === 0 && item.inStage && items[length - 1].active || (item.inStage && items[index - 1] && items[index - 1].active);
            if (isRight) return 'right';
            return false;
        },
        setActiveItem (index) {
            if (typeof index === 'string') {
                const filteredItems = this.items.filter(item => item.name === index);
                if (filteredItems.length > 0) {
                    index = this.items.indexOf(filteredItems[0]);
                }
            }
            index = Number(index);
            if (isNaN(index) || index !== Math.floor(index)) {
                console.warn('[Carousel]index must be an integer.');
                return;
            }
            // let length = this.items.length;
            const { activeIndex: oldIndex, loop, items } = this;
            const length = items.length;
            // const oldIndex = this.activeIndex;
            if (index < 0) {
                this.activeIndex = loop ? length - 1 : 0;
            } else if (index >= length) {
                this.activeIndex = loop ? 0 : length - 1;
            } else {
                this.activeIndex = index;
            }
            if (oldIndex === this.activeIndex) {
                this.resetItemPosition(oldIndex);
            }
        },
        resetItemPosition (oldIndex) {
            this.items.forEach((item, index) => item.translateItem(index, this.activeIndex, oldIndex));
        },
        prev () {
            this.setActiveItem(this.activeIndex - 1);
        },
        next () {
            this.setActiveItem(this.activeIndex + 1);
        },
        handleIndicatorClick (index) {
            this.activeIndex = index;
        },
        handleIndicatorHover (index) {
            if (this.trigger === 'hover' && index !== this.activeIndex) {
                this.activeIndex = index;
            }
        },
        updateItems() {
            this.items = this.$children.filter(child => child.$options.name === 'CarouselItem');
        },
        handleResize () {
            let _w = parseInt(getStyle(this.$el, 'width')),
                _h = parseInt(getStyle(this.$el, 'height'));
            // throttle(300, this.updateItemsPos (_w, _h));
            this.updateItemsPos (_w, _h);
        },
        updateItemsPos (width, height) {
            this.items.forEach(item => {
                item.width = width,
                item.height = height;
            })
        }

    },
    computed: {
        wrapClasses () {
            const { prefixCls, direction, type } = this;
            return [prefixCls, `${prefixCls}-${direction}`, {
                [`${prefixCls}-card`]: type === 'card'
            }]
        },
        arrowShow () {
            return this.arrow !== 'never' && this.direction !== 'vertical';
        },
        hasLabel () {
            return this.items.some(item => item.label && item.label.toString().length > 0)
        },
        dotWrapClasses () {
            const { type, hasLabel, direction, prefixCls, indicatorPosition } = this;
            return [`${prefixCls}-dot`, `${prefixCls}-dot-${direction}`, {
                [`${prefixCls}-dot-labels`]: hasLabel,
                [`${prefixCls}-dot-outside`]: type === 'card' || indicatorPosition === 'outside'
            }]
        }

    },
    beforeDestroy () {
        off(window, 'resize', this.handleResize);
    }
};
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_carousel.scss";
</style>