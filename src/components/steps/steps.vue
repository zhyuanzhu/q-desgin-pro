<template>
    <div :class="[prefixCls, `${prefixCls}-${direction}`]">
        <div v-for="(step, index) in data" :key="step.id || index" 
        :class="[`${prefixCls}-item`, index + 1 == current && `${prefixCls}-active`, index + 1 < error && `${prefixCls}-err`,
        index + 1 < current  && `${prefixCls}-finished`,  index + 1 == error && `${prefixCls}-error`]">
            <div :class="`${prefixCls}-icon`">
                <span v-if="error == index + 1" class="error-icon">+</span>
                <span v-else-if="index + 1 < current" class="step-icon active"></span>
                <span v-else class="step-icon" :class="error == index + 1 && 'active'"> {{ index + 1 }} </span>
            </div>
            <div :class="`${prefixCls}-content`">
                <p class="title">{{ step.title }}</p>
                <p class="summary" v-if="step.content" v-text="step.content"></p>
            </div>
            <p class="line" v-if="index + 1 < data.length"></p>
        </div>
    </div>
</template>
<script>
import { hasParam } from '../../utils/util';

const prefixCls = 'qui-steps';

export default {
    name: 'Steps',
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
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_steps.scss";
</style>