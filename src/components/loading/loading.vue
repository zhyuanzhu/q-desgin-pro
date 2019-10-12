<template>
    <div :class="prefixCls" v-show="show">
        <div :class="`${prefixCls}-mask`"></div>
        <div :class="`${prefixCls}-img`" :style="`background:url(${url}) no-repeat center;`"></div>
    </div>
</template>
<script>

const prefixCls = 'qui-loading';
const imgUrl = 'http://p0.qhimg.com/t0148208a3906a8623f.gif';

//处理成可以主动调用，关闭

export default {
    name: 'Loading',
    props: {
        url: {
            type: String,
            default: imgUrl
        },
        // show: {
        //     type: Boolean,
        //     default: true
        // }
    },
    data() {
        return {
            prefixCls,
            show: false
        }
    },
    // watch: {
    //     show (v) {
    //         if (this.showLoading != v) {
    //             this.showLoading = v;
    //         }
    //     }
    // },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_loading.scss";
</style>