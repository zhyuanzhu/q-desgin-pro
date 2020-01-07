<template>
    <div v-show="ready" :class="classes" @click="handleItemClick" :style="itemStyle">
        <div v-if="$parent.type === 'card'" v-show="!active" ></div>
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = "qui-carousel";
const CARD_SCALE = 0.83;

export default {
    name: 'CarouselItem',
    props: {
        name: String,
        label: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            prefixCls,
            hover: false,
            translate: 0,
            scale: 1,
            active: false,
            ready: false,
            inStage: false,
            animating: false,
            width: 0,
            height: 0
        }
    },
    methods: {
        processIndex(index, activeIndex, length) {
            if (activeIndex === 0 && index === length - 1) {
                return -1;
            } else if (activeIndex === length - 1 && index === 0) {
                return length;
            } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
                return length + 1;
            } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
                return -2;
            }
            return index;
        },
        calcCardTranslate(index, activeIndex) {
            const parentWidth = this.$parent.$el.offsetWidth;
            if (this.inStage) {
                return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
            } else if (index < activeIndex) {
                return -(1 + CARD_SCALE) * parentWidth / 4;
            } else {
                return (3 + CARD_SCALE) * parentWidth / 4;
            }
        },
        calcTranslate(index, activeIndex, isVertical) {
            const distance = this.$parent.$el[isVertical ? 'offsetHeight' : 'offsetWidth'];
            return distance * (index - activeIndex);
        },
        translateItem(index, activeIndex, oldIndex) {
            const parentType = this.$parent.type;
            const parentDirection = this.parentDirection;
            const length = this.$parent.items.length;
            if (parentType !== 'card' && oldIndex !== undefined) {
                this.animating = index === activeIndex || index === oldIndex;
            }
            if (index !== activeIndex && length > 2 && this.$parent.loop) {
                index = this.processIndex(index, activeIndex, length);
            }
            if (parentType === 'card') {
                if (parentDirection === 'vertical') {
                    console.warn('[Carousel]vertical directionis not supported in card mode');
                }
                this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
                this.active = index === activeIndex;
                this.translate = this.calcCardTranslate(index, activeIndex);
                this.scale = this.active ? 1 : CARD_SCALE;
            } else {
                this.active = index === activeIndex;
                const isVertical = parentDirection === 'vertical';
                this.translate = this.calcTranslate(index, activeIndex, isVertical);
            }
            this.ready = true;
        },
      handleItemClick() {
            const parent = this.$parent;
            if (parent && parent.type === 'card') {
                const index = parent.items.indexOf(this);
                parent.setActiveItem(index);
            }
        }
    },
    computed: {
        classes () {
            const {prefixCls, active, inStage, hover, animating } = this;
            return [`${prefixCls}-item`, {
                [`${prefixCls}-item-active`] : active,
                [`${prefixCls}-item-card`]: this.$parent.type === 'card',
                [`${prefixCls}-item-stage`]: inStage,
                [`${prefixCls}-item-hover`]: hover,
                [`${prefixCls}-item-animate`]: animating
            }]
        },
        parentDirection() {
            return this.$parent.direction;
        },
        itemStyle() {
            const translateType = this.parentDirection === 'vertical' ? 'translateY' : 'translateX';
            const value = `${translateType}(${ this.translate }px) scale(${ this.scale })`;
            const style = { transform: value };
            if (this.width) {
                style.width = this.width + 'px';
            }

            if (this.height) {
                style.height = this.height + 'px';
            }
            return style;
        }
    },
    created() {
        this.$parent && this.$parent.updateItems();
    },
    destroyed() {
        this.$parent && this.$parent.updateItems();
    }
}
</script>