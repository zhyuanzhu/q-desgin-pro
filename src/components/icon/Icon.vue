<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>

const prefixCls = "qui-icon";

export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: [Number, String],
        color: String,
        custom: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${this.type}`]: this.type !== '',
                    [`${this.custom}`]: this.custom !== '',
                }
            ];
        },
        styles () {
            let style = {};

            if (this.size) {
                style['font-size'] = `${this.size}px`;
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    },
    methods: {
        handleClick (event) {
            this.$emit('click', event);
        }
    }
}
</script>
<style lang="scss" type="text/css">
    @import "../../styles/iconfont/_fonts.scss";
    @font-face {
    font-family: 'iconfont';
    src: url(../../styles/iconfont/fonts/iconfont.woff2) format("woff2"),
         url(../../styles/iconfont/fonts/iconfont.woff) format("woff"),
         url(../../styles/iconfont/fonts/iconfont.ttf) format("truetype"),
         url(../../styles/iconfont/fonts/iconfont.svg) format("svg");
    font-weight: normal;
    font-style: normal;
}

.qui-icon {
    display: inline-block;
    font-family: 'iconfont' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-rendering: optimizeLegibility;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: -0.125em;
    text-align: center;
    font-style: normal;
    font-size: 46px;
}
</style>