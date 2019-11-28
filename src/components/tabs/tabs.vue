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
                `${prefixCls}-${type}`,
                `theme-${theme}`
                ]"
                :style="item.icon && `background-image:url(${item.icon});`"
                @click="handleClick(item, index)"
                ref="tab"
                >
                {{ item[primaryKey] }}</li>
            <li :class="[type !== 'card' ? `${prefixCls}-underline` : `${prefixCls}-card-underline`, `theme-${theme}`]" ref="line"></li>
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
        },
        theme: {
            type: String,
            default: 'default',
            validator (value) {
                const valueList = ['default', 'primary'];
                return hasParam(value, valueList)
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
        let dom = this.$refs.tab[0];
        let _w = dom.offsetWidth;
        this.$refs.line.style.width = _w + 'px';
        this.domWidth = _w;
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_tabs.scss";
</style>