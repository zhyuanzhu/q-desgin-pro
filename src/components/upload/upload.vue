<template>
    <div :class="prefixCls">
        <div 
            :class="uploadClass"
            @click="handleClick"
            @drop.prevent="onDrop"
            @paste="handlePaste"
            @dragover.prevent="dragOver = true"
            @dragleave.prevent="dragOver = false" >
            <input
                ref="input"
                type="file"
                :class="`${prefixCls}-input`"
                @change="handleChange"
                :multiple="multiple"
                :accept="accept" >
            <slot></slot>
        </div>
        <slot name="tips"></slot>
        <upload-list
            v-if="showUploadList"
            :files="fileList"
            @on-file-remove="handleRemove"
            @on-file-preview="handlePreview" />
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
        handleClick () {
            if (this.disabled) return;
            this.$refs.input.click()
        },
        handleChange (evt) {
            const files = evt.target.files;
            if (!files) return;
            this.uploadFiles(files);
            this.$refs.input.value = null;
        },
        onDrop (evt) {
            this.dragOver = false;
            if (this.disabled) return;
            this.uploadFiles(evt.dataTransfer.files);
        },
        handlePaste (evt) {
            const { paste, disabled } = this;
            if (!paste || disabled) return;
            this.uploadFiles(evt.clipboardData.files);
        },
        uploadFiles (files) {
            let _files = Array.from(files);
            if (!this.multiple) {
                _files = _files.slice(0, 1);
            }
            if (_files.length === 0) return;
            _files.forEach(file => {
                this.upload(file)
            })
        },
        upload (file) {
            if (!this.beforeUpload) {
                return this.sendUploadData(file);
            }
            const before = this.beforeUpload(file);
            if (before && before.then) { //promise
                before.then(processFile => {
                    if (Object.prototype.toString.call(processFile) === '[object File]') {
                        this.sendUploadData(processFile)
                    } else {
                        this.sendUploadData(file);
                    }
                }, () => {
                    //错误处理
                })
            } else if (before !== false) { //返回具体值
                this.sendUploadData(file);
            } else {

            }
        },
        sendUploadData (file) {
            //检查上传文件格式
            if (this.format.length) {
                const fileType = file.name.split('.').pop().toLocaleLowerCase();
                const checked = this.format.some(item => item.toLocaleLowerCase() === fileType);
                if (!checked) {
                    this.onFormatError(file, this.fileList);
                    return false;
                }
            }

            //检查上传文件的大小
            if (this.maxSize) {
                if (file.size > this.maxSize * 1024) {
                    this.onExceededSize(file, this.fileList);
                    return false;
                }
            }

            const { headers, withCredentials, data, name: filename, action, handleStart, handleProgress, handleSuccess, handleError } = this;
            handleStart(file);
            let formData = new FormData();
            formData.append(filename, file)

            ajax({
                headers,
                withCredentials,
                file,
                data,
                filename,
                action,
                onProgress: e => { handleProgress(e, file) },
                onSuccess: res => { handleSuccess(res, file) },
                onError: (err, response) => { handleError(err, response, file) }
            })

        },
        handleStart (file = {}) {
            file.uuid = Date.now() + this.tempIndex++;
            const _file = {
                status: 'uploading',
                name: file.name,
                size: file.size,
                percentage: 0,
                uuid: file.uuid,
                showProgress: true
            };
            this.fileList.push(_file)
        },
        getFile (file) {
            const fileList = this.fileList;
            let target;
            fileList.every(item => {
                target = file.uuid === item.uuid ? item : null;
                return !target;
            });
            return target;
        },
        handleProgress(evt, file) {
            const _file = this.getFile(file);
                this.onProgress(evt, _file, this.fileList);
                _file.percentage = evt.percent || 0;
        },
        handleSuccess(res, file) {
            const _file = this.getFile(file);
            if (!_file) return;
            _file.status = 'finished';
            _file.response = res;
            this.onSuccess(res, _file, this.fileList);

            setTimeout(() => {
                _file.showProgress = false;
            }, 1000);
            
        },
        handleError (err, response, file) {
            const _file = this.getFile(file);
            const fileList = this.fileList;

            _file.status = 'fail';
            setTimeout(() => {
                _file.showProgress = false;
            }, 1000);

            // fileList.splice(fileList.indexOf(_file), 1);

            this.onError(err, response, file);
        },
        handleRemove (file) {
            const fileList = this.fileList;
            fileList.splice(fileList.indexOf(file), 1);
            this.onRemove(file, fileList);
        },
        handlePreview (file) {
            if (file.status === 'finished') {
                this.onPreview(file);
            }
        },
        clearFiles () {
            this.fileList = []
        }
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