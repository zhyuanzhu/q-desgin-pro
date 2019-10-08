<template>
    <div :class="[prefixCls, `${prefixCls}-${type}`]">
        <form class="upload" :class="[`upload-${type}`, type != 'default' && `upload-other` ]" enctype="multipart/form-data">
            <input type="file" :name="name" class="file" ref="file" title="" @change="upload">
            <div v-if="type != 'default'" class="upload-btn">
                <span :class="`${type}`"></span>
                {{ title }}
            </div>
        </form>
        <div :class="`${prefixCls}-filelist`" v-if="fileMaxLength <= fileList.length">
            <slot name="fileList"></slot>
        </div>
        <div :class="`${prefixCls}-progress`"></div>
    </div>
</template>
<script>

//暂不支持拖拽上传
//将上传后的数据传递给父组件，formData,base64

import { hasParam } from '../../utils/util';

const prefixCls = 'qui-upload';

export default {
    name: 'Upload',
    props: {
        type: {
            type: String,
            default: 'default',
            validator (value) {
                const valueList = ['cloud', 'camera', 'default', 'arrow']
                return hasParam(value, valueList);
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        progress: {
            type: Boolean,
            default: true
        },
        name: 'String',
        dataType: {
            type: String,
            default: 'form',
            validator (value) {
                const valueList = ['form', 'base64'];
                return hasParam(value, valueList);
            }
        },
        fileMaxLength: {
            type: Number,
            default: 5
        },
        fileList: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: '上传'
        }
    },
    data() {
        return {
            prefixCls
        }
    },
    methods: {
        upload (evt) {
            console.log(evt) 
            let iptDom = this.$refs.file;
            let file = evt.target.files[0];
            // let fileName = file.name,
            //     fileSize = file.size,
            //     fileType = file.type.split('/')[1];
            let {name: fileName, size: fileSize, type: fileType} = file;
            console.log(fileName, fileSize, fileType)
            let render = new FileReader();
            render.onload = () => {
                // console.log(render.result)
                // console.log(render)
                this.$emit('onChange', render.result)
            }
            // render.readAsDataURL(file);
            // render.readAsBinaryString(file);
            // render.readAsArrayBuffer(file)
        }
    },
}
</script>
<style lang="scss" type="type/scss">
    @import "../../styles/components/_upload.scss";
</style>