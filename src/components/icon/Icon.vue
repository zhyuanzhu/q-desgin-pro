<template>
    <i :class="[prefixCls, `${prefixCls}-${type}`]" :style="styles" @click="handleClick"></i>
</template>
<script>

const prefixCls = "qui-icon";

export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            required: true
        },
        size: {
            type: [Number, String],
            default: 14
        },
        color: String,
    },
    data() {
        return {
            prefixCls
        }
    },
    computed: {
        styles () {
            let style = {};

            if (this.size) {
                style['font-size'] = `${Number(this.size)}px`;
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
    $version: 0.1;
    @font-face {
    font-family: 'iconfont';
    src: url(../../styles/iconfont/fonts/iconfont.woff2?v=#{$version}) format("woff2"),
         url(../../styles/iconfont/fonts/iconfont.woff?v=#{$version}) format("woff"),
         url(../../styles/iconfont/fonts/iconfont.ttf?v=#{$version}) format("truetype"),
         url(../../styles/iconfont/fonts/iconfont.svg?v=#{$version}) format("svg");
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
    // vertical-align: -0.125em;
    text-align: center;
    font-style: normal;
    // font-size: 46px;
}
</style>