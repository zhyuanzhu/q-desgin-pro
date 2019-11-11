<template>
    <div :class="[prefixCls, `${prefixCls}-${theme}`]">
        <ul :class="`${prefixCls}-list`" :style="{'width': width}">
            <li v-for="(menu, index) in data" :class="[`${prefixCls}-item`]" :key="menu.id || index">
                <div :class="[`${prefixCls}-item-title`, !hasChild(menu) && menu.active && 'item-title-active']" @click="toggleMenu(data, menu, menu.active)">
                    <i :class="[iconClass, menu.icon && `${prefixCls}-${menu.icon}`]"></i>
                    <component :is="tagName(menu)" v-bind="tagProps(menu)" >{{ menu.label }}</component>
                    <i v-if="hasChild(menu)" 
                        :class="[hasChild(menu) && `${prefixCls}-item-sub`, 
                        menu.active ? `${prefixCls}-item-sub-up`: `${prefixCls}-item-sub-down`]">
                        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z" p-id="1833"></path>
                        </svg>    
                        
                    </i>
                </div>
                <transition :name="setTransition(menu)">
                    <div :class="[`${prefixCls}-item-children`, `${menu.id}-children`]" v-if="hasChild(menu)" v-show="menu.active">
                        <ul :class="`${menu.id}-list`">
                            <li v-for="(item, idx) in menu.children" :key="item.id || idx" 
                                @click="clickItem(menu.children, item, item.active, data)"
                                :class="[`item`, `${item.id}-item`, item.active && `item-active`]"
                                >
                                <router-link :to="item.to">{{ item.label }}</router-link>
                            </li>
                        </ul>
                    </div>
                </transition>
            </li>
        </ul>
    </div>
</template>
<script>
import { hasParam } from '../../utils/util';

const [prefixCls, iconClass] = ['qui-menu', 'menu-icon'];
//跳转的version-1，需要写跳转的绝对路径 /xx的形式，后续会添加判断，类似于button

export default {
    name: 'Menu',
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
            // const { hasChild } = this;

            if (v.children && v.children.length) {
                
            } else {
                arr.map(item => {         //后续需要优化
                // item.active = false;
                    if (item.children && item.children.length) {
                        item.children.map(child => {
                            child.active = false;
                        })
                    }
                })
            }
            // this.removeActive(arr)
            v.active = !v.active;
        },
        clickItem (arr, v, unActive = false, parent) {
            if (v.active) return;
            arr.map(item => item.active = false);
            this.$emit('on-select-item', v)
            parent.map(item => {
                if (item.children && item.children.length) {
                    item.children.map(child => {
                        child.active = false;
                    })
                } else {
                    item.active = false;
                }
            })
            // this.removeActive(parent)
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
        }
        // removeActive (arr) {
        //     arr.map(item => { 
        //         if (item.children && item.children.length) {
        //             item.children.map(child => {
        //                 child.active = false;
        //             })
        //         } else {
        //             item.active = false;
        //         }
        //     })
        // }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_menu.scss";
</style>