<template>
    <div :class="classes" :style="styles" v-if="!$slots.avatar">
        <img :src="src" v-if="src" @error="handleError" >
        <Icon :type="iconType" v-else :size="iconSize" />
    </div>
    <div v-else :class="slotClasses"><slot name="avatar"></slot></div>
</template>
<script>
const prefixCls = 'qui-avatar';

import Icon from '../icon/Icon.vue';
import { hasParam } from '../../utils/util';

export default {
    name: 'Avatar',
    components: {
        Icon
    },
    props: {
        shape: {
            type: String,
            default: 'circle',
            validator (value) {
                return hasParam(value, ['circle', 'square'])
            }
        },
        size: {
            type: [String, Number],
            default: 'default'
        },
        src: {
            type: String
        },
        iconType: {
            type: String,
            default: 'user'
        }
    },
    data() {
        return {
            prefixCls,
            scale: 1,
            childrenWidth: 0,
            isSlotShow: false,
            defaultSizeList: ['small', 'default', 'large'],
        }
    },
    methods: {
        handleError (e) {
            this.$emit('on-error', e)
        }
    },
    computed: {
        iconSize () {
            const { size, defaultSizeList } = this;
            let _size = 0;
            if (size && hasParam(size, defaultSizeList)) {
                switch (size) {
                    case 'samll':
                        return _size = 16;
                    case 'default': 
                        return _size = 20;
                    case 'large':
                        return _size = 24;
                }
            } else {
                _size = size / 2;
            }
            return _size;
        },
        classes () {
            const { prefixCls, shape, src, iconType, size, defaultSizeList } = this;
            return [prefixCls, `${prefixCls}-${shape}`, {
                [`${prefixCls}-image`]: !!src,
                [`${prefixCls}-icon`]: !src,
                [`${prefixCls}-${size}`]: hasParam(size, defaultSizeList)
            }]
        },
        slotClasses () {
            const { prefixCls, shape, size, defaultSizeList } = this;
            return [prefixCls, `${prefixCls}-${shape}`, {
                [`${prefixCls}-${size}`]: hasParam(size, defaultSizeList)
            }]
        },
        styles () {
            const style = {};
            const { size, defaultSizeList } = this;
            if (size && !hasParam(size, defaultSizeList)) {
                style.width = `${size}px`;
                style.height = `${size}px`;
                style.lineHeight = `${size}px`;
            }
            return style;
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_avatar.scss";
</style>