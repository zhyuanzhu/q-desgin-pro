<template>
    <div :class="prefixCls">
        <div v-for="(item, index) in data" :key="item.time || index" :class="`${prefixCls}-item`">
            <div class="time-icon" :class="[item.color, item.icon]" :style="setStyle(item.color, item.icon)"></div>
            <div class="time-content">
                <p class="time" :class="item.content && ' time-bold'">{{ item.time }}</p>
                <p class="content">{{ item.content }}</p>
            </div>
            <div class="time-line" v-if="index + 1 < data.length"></div>
        </div>
    </div>
</template>
<script>

const prefixCls = 'qui-timeline';

export default {
    name: 'Timeline',
    props: {
        data: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            prefixCls
        }
    },
    methods: {
        setStyle(color, url) {
            const style = {};
            if (color) {
                style.borderColor = color;
            }
            if (url) {
                style.background = `url(${url}) no-repeat center`;
                style.backgroundSize = '100% 100%';
                style.border = 'none';
            }
            return style;
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_timeline.scss";
</style>