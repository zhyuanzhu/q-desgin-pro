<template>
    <ul :class="`${prefix}-list`">
        <li v-for="file in files"
            :class="setFileClass(file)"
            @click="handleClick(file)">
            <span @click="handlePreview(file)">
                <Icon :type="formatType(file)" />{{ file.name }}
            </span>
            <Icon type="delete" :class="`${prefix}-list-remove`"
                v-show="file.status === 'finished' || file.status === 'fail'"
                @click.native="handleRemove(file)" />
            <transition name="upload-fade">
                <Progress v-if="file.showProgress" :strokeWidth="2" 
                    :percent="parsePercentage(file.percentage)"
                    :status="file.status === 'finished' && file.showProgress ? 'success' : 'normal'"
                />
            </transition>
        </li>
    </ul>
</template>
<script>

const prefix = 'qui-upload';
import Icon from '../icon/Icon.vue';
import Progress from '../progress/progress.vue';

export default {
    name: 'UploadList',
    components: {
        Icon,
        Progress
    },
    props: {
        files: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            prefix
        }
    },
    methods: {
        setFileClass (file) {
            const { prefix } = this;
            return [
                `${prefix}-list-file`, {
                    [`${prefix}-list-file-finish`]: file.status === 'finished',
                    [`${prefix}-list-file-error`]: file.status === 'fail',
                }
            ]
        },
        handleClick (file) {
            this.$emit('on-file-click', file);
        },
        handlePreview (file) {
            this.$emit('on-file-preview', file);
        },
        handleRemove (file) {
            this.$emit('on-file-remove', file);
        },
        formatType (file) {
            const format = file.name.split('.').pop().toLocaleLowerCase() || '';
            let type = '';
            const { getArrayValue } = this;

            switch (format) {
                case getArrayValue(['doc','txt','docx'], format):
                    type = 'file-word';
                    break;
                case getArrayValue(['gif','jpg','jpeg','png','bmp','webp'], format):
                    type = 'file-image';
                    break;  
                case getArrayValue(['doc','txt','docx'], format):
                    type = 'file-word';
                    break;  
                case getArrayValue(['numbers','csv','xls','xlsx'], format):
                    type = 'file-excel';
                    break;
                case getArrayValue(['keynote','ppt','pptx'], format):
                    type = 'file-ppt';
                    break;
                case 'pdf':
                    type = 'file-pdf';
                    break;
                default:
                    type = 'file-unknown'
            }
            // if (['mp4','m3u8','rmvb','avi','swf','3gp','mkv','flv'].indexOf(format) > -1) {
            //     type = 'ios-film';
            // }
            // if (['mp3','wav','wma','ogg','aac','flac'].indexOf(format) > -1) {
            //     type = 'ios-musical-notes';
            // }

            return type;
        },
        getArrayValue (array = [], value = '') {
            const index = array.indexOf(value);
            if (index == -1) return;
            return array[index]
        },
        parsePercentage (v) {
            return parseInt(v, 10)
        }
    },
}
</script>