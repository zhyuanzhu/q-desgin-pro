<template>
    <div :class="[prefixCls]">
        <ul :class="`${prefixCls}-header`">
            <!-- <component :is="tagName(item.to)" 
                v-for="(item, index) in data" :key="item.id" 
                v-bind="tagProps(item.to, index)"
                >{{item[primaryKey]}}</component> -->
            <li v-for="(item, index) in data" 
                :key="item.id || index"
                :class="[`${prefixCls}-tab`, item.disabled && `${prefixCls}-tab-disabled`, 
                item.active && `${prefixCls}-tab-active`,
                item.icon && `${prefixCls}-icon`,
                `${prefixCls}-${type}`
                ]"
                :style="item.icon && `background-image:url(${item.icon});`"
                @click="handleClick(item, index)"
                ref="tab"
                >
                {{ item[primaryKey] }}</li>
            <li :class="[type !== 'card' ? `${prefixCls}-underline` : `${prefixCls}-card-underline`]" ref="line"></li>
        </ul>
    </div>
</template>
<script>

const prefixCls = 'qui-tabs';
import { hasParam } from '../../utils/util.js';
import mixinsLink from '../../mixins/link';

export default {
    name: 'Tabs',
    // mixins: [mixinsLink],
    props: {
        data: {
            type: Array,
            default: () => []
        },
        primaryKey: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'default',
            validator (value) {
                const valueList = ['default', 'card'];
                return hasParam(value, valueList);
            }
        }
    },
    data () {
        return {
            prefixCls,
            domWidth: 0
        }
    },
    methods: {
        // tagName (dom) {
        //     return dom ? 'a' : 'li';
        // },
        // tagProps (isTagA, index) {
        //     if (isTagA) {
        //         const { listUrl, target, disabled } = this;
        //         const href = disabled ? 'javascript:void(0)' : listUrl[index];
        //         return {href, target}
        //     }
        // },
        handleClick (item, index) {
            const { active, disabled } = item;
            if (active) return;
            if (disabled) return;
            this.data.map((v, i) => {
                if (v.active) {
                    v.active = false;
                    this.setActiveUnderline(i, index);
                }
            })
            item.active = !item.active;
            this.$emit('on-change', item)
        },
        setActiveUnderline (prevIndex, activeIndex) {
            const { domWidth: _w } = this;
            let distance = activeIndex * 8 + activeIndex * _w + 'px'
            this.$refs.line.style.transform = `translateX(${distance})`
        }
    },
    mounted() {
        const tabs = this.$refs.tab;
        const tabsWidth = [];
        let _w
        tabs.map(tab => {
            _w = window.getComputedStyle(tab).width.slice(0, -2)
            tabsWidth.push(_w);
        })
        _w = Math.ceil(Math.max(...tabsWidth)) + 32;
        tabs.map(tab => {
            tab.style.width = _w + 'px'
        })
        this.$refs.line.style.width = _w + 'px';
        this.domWidth = _w;
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_tabs.scss";
</style>