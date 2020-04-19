<template>
    <div :class="[prefixCls, `${prefixCls}-${theme}`]">
        <ul :class="[`${prefixCls}-list`]" :style="{'width': width}">
            <li v-for="(menu, index) in data" 
            :class="[`${prefixCls}-item`]" 
            :key="menu.id || index">
                <div :class="[`${prefixCls}-item-title`, !hasChild(menu) && menu.active && 'item-title-active']" 
                    @click="toggleMenu(data, menu, menu.active)"
                    >
                    <Icon :type="menu.icon" v-if="menu.icon" />
                    <a href="javascript:;">{{ menu.label }}</a>
                    <Icon v-if="hasChild(menu)" 
                        :type="'arrow-up'" 
                        :size="16" 
                        :class="[`${prefixCls}-arrow`, menu.active ? `${prefixCls}-arrow-up`: `${prefixCls}-arrow-down`]" />
                </div>
                <!-- <transition :name="setTransition(menu)"> -->
                <!-- <transition name="transition-menu-drop"> -->
                <collapse-transition>
                    <div :class="[`${prefixCls}-item-children`, `${menu.id}-children`]" v-if="hasChild(menu)" v-show="menu.active">
                        <ul :class="`${menu.id}-list`">
                            <li v-for="(item, idx) in menu.children" :key="item.id || idx" 
                                @click="clickItem(menu.children, item, item.active, data)"
                                :class="[`item`, `${item.id}-item`, item.active && `item-active`]"
                                >
                                <a href="javascript:;">{{ item.label }}</a>
                            </li>
                        </ul>
                    </div>
                </collapse-transition>
                <!-- </transition> -->
            </li>
        </ul>
    </div>
</template>
<script>

const [prefixCls, iconClass] = ['qui-menu', 'menu-icon'];
import { hasParam } from '../../utils/util';
import Icon from '../icon'
import CollapseTransition from '../collapse-transition'


export default {
    name: 'Menu',
    components: { Icon, CollapseTransition },
    props: {
        theme: {
            type: String,
            default: 'light',
            validator (value) {
                const valueList = ['dark', 'light', 'primary'];
                return hasParam(value, valueList);
            }
        },
        data: {
            type: Array,
            default: () => [],
            // itemTitleActive: false,
            // activeId: 0
        },
        width: {
            type: String,
            default: '240px'
        }
    },
    data () {
        return {
            prefixCls,
            iconClass
        }
    },
    methods: {
        hasChild (v) {
            return v.children && v.children.length > 0;
        },
        setTransition (v) {
            return v.active ? 'menu-move-up' : 'menu-move-down'
        },
        toggleMenu (arr, v, open = false) {
            const { hasChild } = this;

            if (!hasChild(v)) {
                this.removeActive(arr)
            }
            v.active = !v.active;
            this.$emit('on-select', v);
        },
        clickItem (arr, v, unActive = false, parent) {
            if (v.active) return;
            arr.map(item => item.active = false);
            this.$emit('on-select-item', v)
            // parent.map(item => {
            //     if (item.children && item.children.length) {
            //         item.children.map(child => {
            //             child.active = false;
            //         })
            //     } else {
            //         item.active = false;
            //     }
            // })
            this.removeActive(parent)
            v.active = !unActive;
        },
        tagName (item) {
            return this.hasChild(item) ? 'a' : 'router-link';
        },
        tagProps (item) {
            const hasChild = this.hasChild(item);
            if (hasChild) {
                return {href: 'javascript:;'};
            } else {
                return {to: item.to}
            }
        },
        removeActive (arr) {
            arr.map(item => { 
                if (item.children && item.children.length) {
                    item.children.map(child => {
                        child.active = false;
                    })
                } else {
                    item.active = false;
                }
            })
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_menu.scss";
</style>