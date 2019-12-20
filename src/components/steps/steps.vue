<template>
    <div :class="[prefixCls, `${prefixCls}-${direction}`]">
        <div v-for="(step, index) in data" :key="step.id || index" 
        :class="[`${prefixCls}-item`, index + 1 == current && `${prefixCls}-active`, index + 1 < error && `${prefixCls}-err`,
        index + 1 < current  && `${prefixCls}-finished`,  index + 1 == error && `${prefixCls}-error`]">
            <div :class="`${prefixCls}-icon`" v-if="!step.icon">
                <span v-if="error == index + 1" class="error-icon">
                    <Icon :type="'wrong'" :size="18" />
                </span>
                <span v-else-if="index + 1 < current" class="step-icon active">
                    <Icon :type="'check'" :size="18" />
                </span>
                <span v-else class="step-icon" :class="error == index + 1 && 'active'"> {{ index + 1 }} </span>
            </div>
            <div :class="`${prefixCls}-icon no-border`" v-else>
                <span :class="setIconWrap(index)">
                    <Icon :type="step.icon" :size="18" />
                </span>
            </div>
            <div :class="`${prefixCls}-content`">
                <p class="title"><slot name="title">{{ step.title }}</slot></p>
                <p class="summary" v-if="step.content || $slots.summary">
                    <slot name="summary">{{ step.content }}</slot>
                </p>
            </div>
            <p class="line" :class="step.icon && 'no-border-line'" v-if="index + 1 < data.length"></p>
        </div>
        <!-- <slot></slot> -->
    </div>
</template>
<script>

//后续考虑分离Steps和Step

const prefixCls = 'qui-steps';
import { hasParam } from '../../utils/util';
import Icon from '../icon'


export default {
    name: 'Steps',
    components: {
        Icon
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        direction: {
            type: String,
            default: 'column',
            validator (value) {
                const valueList = ['column', 'row'];
                return hasParam(value, valueList);
            }
        },
        current: {
            type: Number,
            default: 1
        },
        error: Number
    },
    data() {
        return {
            prefixCls
        }
    },
    methods: {
        setIconWrap (index) {
            const { current, error } = this;
            if (error == index + 1 ) return 'error-icon noboder'
            if (index + 1 < current) return 'step-icon active noboder'
            // if (error == index + 1)
        }
    },
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_steps.scss";
</style>