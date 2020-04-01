<template>
    <div :class="setClassName" v-clickoutside="handleClickOutSide">
        <div :class="[`${prefixCls}-main`]" @click="!disabled && (arrowDown = !arrowDown)">
            <span :class="`${prefixCls}-value`" v-if="!filter">{{ selectLabel }}</span>
            <input :type="filter ?'text': 'hidden'" v-model="selectValue" :class="`${prefixCls}-input`" >
            <Icon :size="size == 'large' ? 14 : 12" :type="'arrow-down'" :class="[arrowDown ? `${prefixCls}-down` : `${prefixCls}-up`, `${prefixCls}-arrow`]" />
        </div>
        <transition name="transition-drop">
            <div :class="`${prefixCls}-dropdown`" v-scroll :style="boxStyle" v-show="!arrowDown">
                <Dropdown :value="selectValue" :filter="filter"><slot></slot></Dropdown>
            </div>
        </transition>
    </div>
</template>
<script>

const prefixCls = 'qui-select';

import Dropdown from './dropdown'
import { hasParam } from '../../utils/util'
import scroll from '../../directives/scroll';
import clickoutside from '../../directives/clickoutside';
import Icon from '../icon'

export default {
    name: 'Select',
    components: {
        Dropdown,
        Icon
    },
    props: {
        defaultValue: {
            type: [String, Number],
            default: '请选择'
        },
        value: {
            type: [String, Number, Array],         //array的模式多选
            default: ''
        },
        maxLength: {
            type: Number,
            default: 5
        },
        transition: {
            type: String,
            default: 'fade-in-move-up'
        },
        size: {
            type: String,
            default: 'middle',
            validator(value) {
                const valueList = ['small', 'middle', 'large'];
                return hasParam(value, valueList);
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        filter: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefixCls,
            dropData: this.data,
            selectValue: this.defaultValue,
            arrowDown: true,
            selectLabel: ''
        }
    },
    methods: {
        getDefaultValue () {
            this.selectValue = this.value
        },
        handleClickOutSide (e) {
            if (this.arrowDown) return;
            this.arrowDown = !this.arrowDown;
        },
        setMaxHeight (lineH = 32, mt = 2) {
            const { maxLength } = this;
            return maxLength * lineH + mt * (maxLength - 1) + 5;
        },
        emitValue (v, label) {
            this.selectValue = v
            this.selectLabel = label;
            this.arrowDown = !this.arrowDown;
            this.$emit('input', v)
            this.$emit('on-select', v)
        }
    },
    watch: {
        value (value) {
            console.log(value)
            this.getDefaultValue()
        }
    },
    created () {
        this.getDefaultValue();
    },
    computed: {
        setClassName () {
            const { prefixCls, size, disabled, arrowDown } = this;
            const disabledClass = `${prefixCls}-disabled`, activeClass = `${prefixCls}-active`;
            return [`${prefixCls}`, `${prefixCls}-${size}`,
                { 
                    [disabledClass]: disabled,
                    [activeClass]: !arrowDown
                }
            ]
        },
        boxStyle () {
            const { size, setMaxHeight } = this;
            // let maxH;
            // switch (size) {
            //     case 'small':
            //         maxH = setMaxHeight(26, 4);
            //         break;
            //     case 'large':
            //         maxH = setMaxHeight(40, 12);            
            //     default:
            let maxH = setMaxHeight();
                    // break;
            // }
            return {
                'max-height': maxH + 'px'
            }

        }
    },
    directives: { clickoutside, scroll }
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_select.scss";
</style>