<template>
    <transition name="fade-modal-mask">
        <div :class="prefix" v-if="visible" @click="handleClick" :style="{'z-index': zIndex}"></div>
    </transition>
</template>
<script>

const prefix = 'qui-modal-mask';

export default {
    name: 'ModalMask',
    props: {
        zIndex: {
            type: Number,
            required: true
        },
        visible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            prefix
        }
    },
    methods: {
        handleClick () {
            this.$emit('on-hide-mask')
        }
    },
}
</script>