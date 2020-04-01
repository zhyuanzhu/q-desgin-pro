<template>
    <div :class="`${prefix}-item`">
        <div :class="`${prefix}-item-icon`">
            <Icon :type="iconType" :size="24" />
            {{ index + 1 }}
        </div>
        <div :class="`${prefix}-item-content`">
            <p class="title"><slot name="title">{{ title }}</slot></p>
            <p class="summary" v-if="content || $slots.content"><slot name="content">{{ content }}</slot></p>
        </div>
    </div>
</template>

<script>

const prefix = 'qui-steps';
import Icon from '../icon'
import { findComponentParents } from '../../utils/util';

export default {
    name: 'Step',
    components: { Icon },
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        index: {
            type: Number,
            default: 1
        },
        icon: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            prefix,
            iconType: 'success',
            successIcon: '',
            errorIcon: '',
            parent: findComponentParents(this, 'Steps')
        }
    },
    mounted() {

    }
}
</script>