<template>
    <transition :name="transition">
        <div :class="[`${prefixCls}`, `${prefixCls}-${type}`]" v-show="visible">
            <div :class="[`${prefixCls}-icon`, `icon-${type}`]">
                <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M558.656 443.04l-93.12 0c-12.864 0-23.264 10.432-23.264 23.232l0 282.72c0 12.832 10.432 23.232 23.264 23.232l93.12 0c12.864 0 23.264-10.432 23.264-23.232l0-282.72c0.032-12.832-10.4-23.232-23.264-23.232zM512 0c-282.208 0-512 229.664-512 512.032s229.728 511.968 512 511.968c282.304 0 512-229.6 512-511.968s-229.632-512.032-512-512.032zM511.552 958.912c-246.784 0-447.456-200.768-447.456-447.456 0-246.848 200.704-447.552 447.456-447.552s447.52 200.672 447.52 447.552c0.032 246.72-200.736 447.456-447.52 447.456zM512.128 250.688c-19.296 0-38.496 7.936-52.16 21.568s-21.6 32.8-21.6 52.064c0 19.264 7.936 38.464 21.6 52.064s32.832 21.568 52.16 21.568 38.496-7.936 52.16-21.568c13.632-13.632 21.6-32.8 21.6-52.064s-7.936-38.464-21.6-52.064c-13.632-13.632-32.832-21.568-52.16-21.568z" p-id="1912"></path>
                </svg>
            </div>
            {{ text }}
        </div>
    </transition>
</template>

<script>

const prefixCls = 'qui-alert';
import { hasParam } from '../../utils/util';

//处理成像toast那样


export default {
    name: 'Alert',
    props: {
        text: String,
        duration: {
            type: Number,
            default: 3
        },
        type: {
            type: String,
            default: 'info',
            validator (value) {
                const valueList = ['success', 'warning', 'error', 'info'];
                return hasParam(value, valueList); 
            }
        },
        transition: {
            type: String,
            default: 'alert-fade-in-move-up'
        }
    },
    data() {
        return {
            prefixCls,
            timer: null,
            visible: false
        }
    },    
}
</script>
<style lang="scss" type="text/scss">
    @import "../../styles/components/_alert.scss";
</style>