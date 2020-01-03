<template>
    <div :class="prefixCls">
        <div :class="uploadClass"></div>
    </div>
</template>
<script>

const prefixCls = 'qui-upload';
import { hasParam } from '../../utils/util';
import UploadList from './upload-list.vue';
import ajax from './ajax';


export default {
    name: 'Upload',
    components: { UploadList },
    props: {
        action: {
            type: String,
            required: true
        },
        headers: {
            type: Object,
            default: () => {}
        },
        multiple: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object
        },
        name: {
            type: String,
            default: 'file'
        },
        withCredentials: {
            type: Boolean,
            default: false
        },
        showUploadList: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'select',
            validator (value) {
                return hasParam(value, ['select', 'drag'])
            }
        },
        format: {
            type: Array,
            default: () => []
        },
        accept: {
            type: String
        },
        maxSize: {
            type: Number
        },
        beforeUpload: Function,
        onProgress: {
            type: Function,
            default () { return {} }
        },
        onSuccess: {
            type: Function,
            default () { return {} }
        },
        onSuccess: {
            type: Function,
            default () { return {} }
        },
        onError: {
            type: Function,
            default () { return {} }
        },
        onRemove: {
            type: Function,
            default () { return {} }
        },
        onPreview: {
            type: Function,
            default () { return {} }
        },
        onExceededSize: {
            type: Function,
            default () { return {} }
        },
        onFormatError: {
            type: Function,
            default () { return {} }
        },
        defaultFileList: {
            type: Array,
            default: () => []
        },
        paste: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefixCls,
            dragOver: false,
            fileList: [],
            tempIndex: 1
        }
    },
    watch: {
        defaultFileList: {
            immediate: true,
            handler (fileList) {
                this.fileList = fileList.map(item => {
                    item.status = 'finished';
                    item.percentage = 100;
                    item.uuid = Date.now() + this.tempIndex++;
                    return item;
                })
            }
        }
    },
    methods: {
        upload (evt) {

            const { dataType, disabled } = this;
            if (disabled) evt.preventDefault();
            
            const file = evt.target.files[0];
            let render = new FileReader();
            let {name: fileName, size: fileSize, type: fileType} = file;
            
            render.onload = () => {
                // console.log(render)
                let emitData = {
                    file,
                    data: render.result
                }
                this.$emit('on-change', emitData)
            }
            if (dataType == 'base64') {
                render.readAsDataURL(file);
            } else {
                render.readAsBinaryString(file);
            }
            
            // render.readAsBinaryString(file);
            // render.readAsArrayBuffer(file)
        },

    },
    computed: {
        uploadClass () {
            const { prefixCls, type, dragOver } = this;
            return [
                prefixCls, {
                    [`${prefixCls}-select`]: type === 'select',
                    [`${prefixCls}-drag`]: type === 'drag',
                    [`${prefixCls}-dragOver`]: type === 'drag' && dragOver
                }
            ]
        }
    },
}
</script>
<style lang="scss" type="type/scss">
    @import "../../styles/components/_upload.scss";
</style>