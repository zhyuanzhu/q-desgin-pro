<template>
    <div :class="[prefixCls, `${prefixCls}-${type}`]">
        <form class="upload" :class="[`upload-${type}`, type != 'default' && `upload-other` ]" enctype="multipart/form-data">
            <input type="file" :name="name" class="file" ref="file" title="" @change="upload">
            <div v-if="type != 'default'" class="upload-btn">
                <span :class="`${type}`" v-html="setIcon(type)"></span>
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
            const file = evt.target.files[0];
            let render = new FileReader();
            let {name: fileName, size: fileSize, type: fileType} = file;
            const { dataType } = this;
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
        setIcon (type) {
            if (!type) return;
            const tagProps = this.setSvgIconTag();
            const iconEnum = {
                cloud: '<svg ' + tagProps + '><path d="M770.354 352.086C721.58 240.25 610.168 162.002 480.364 162.002 305.644 162.002 164 303.642 164 478.364c0 0.954 0.134 1.874 0.142 2.824C74.332 496.22 5.818 574.102 5.818 668.182 5.818 773.016 90.804 858 195.638 858h601.088v-2.186c124.814-15.598 221.458-121.862 221.458-250.906 0-137.998-110.506-249.994-247.83-252.822zM575.272 510.002v221.454H448.726V510.002H353.82L512 351.82l158.182 158.182h-94.91z""></path></svg>',
                camera: '<svg ' + tagProps + '><path d="M167.584334 171.166165c0-19.527836 0-37.280413 0-55.743094 40.475877 0 79.8866 0 120.362477 0 0 18.107629 0 35.860207 0 54.322888 25.563712 2.485361 47.221857 4.970722 66.749692-19.172784 33.374846-40.475877 70.655259-77.756291 107.22557-115.391755C485.710527 10.682862 513.7596-0.678788 549.264755 0.031316c92.668456 2.130309 185.691963 1.775258 278.715471 0 30.889485-0.355052 56.098146 8.521237 76.691136 29.469279 41.18598 42.251135 81.306806 85.567425 121.427632 129.238766 8.521237 9.23134 16.687423 12.426804 29.114228 12.426804 66.749692-0.710103 133.854436-0.355052 200.604129-0.355052 63.199177 0 108.290724 45.091547 108.645776 108.290724 0 208.770314-0.355052 417.540629 0.355052 626.310943 0 56.098146-43.671341 118.232168-117.167013 117.877116-373.159184-1.420206-746.67342-1.420206-1119.832604 0-66.394641 0.355052-128.528663-59.29361-127.463508-127.81856 2.485361-202.734438 2.130309-405.823927 0.355052-608.558365-0.710103-67.814847 56.808249-115.746807 115.391755-116.101858C132.079178 171.166165 148.766602 171.166165 167.584334 171.166165zM379.905164 579.120402c0 167.229282 134.209488 302.503925 301.083719 302.858976 168.294437 0.355052 303.924131-133.854436 304.279183-301.43877 0.355052-168.294437-134.209488-303.569079-302.148873-303.924131C515.179806 276.616477 379.905164 411.181016 379.905164 579.120402zM1023.968684 344.076272c20.59299 0 39.765774 0 58.228455 0 0-20.237939 0-39.410723 0-58.228455-20.237939 0-38.700619 0-58.228455 0C1023.968684 305.375653 1023.968684 323.838334 1023.968684 344.076272zM682.054037 332.004519c135.984746 2.485361 246.760831 104.740209 247.470934 246.405779 1.065155 138.115055-106.515466 246.760831-247.115882 248.181037-135.274642 1.420206-246.760831-111.486188-247.470934-247.115882C434.583103 444.910914 545.71424 333.424726 682.054037 332.004519zM682.409089 693.091951c61.068867 0 113.261446-51.482475 113.971549-112.551343 0.710103-61.778971-51.482475-114.681652-113.616498-114.681652-61.068867 0-112.906394 51.127424-113.971549 112.551343C568.082488 639.834218 620.275066 693.091951 682.409089 693.091951z" p-id="9916"></path></svg>',
                arrow: '<svg ' + tagProps + '><path d="M111.395066 570.932204l87.488587 0 0 255.842922-87.488587 0 0-255.842922ZM825.115324 570.932204l87.488587 0 0 255.842922-87.488587 0 0-255.842922ZM111.395066 826.775126l801.208844 0 0 87.866187-801.208844 0 0-87.866187ZM563.245128 722.759121 463.476867 722.759121 463.476867 287.760866 320.414567 429.16234 256.453836 365.201609 512.296759 109.358687 768.138658 365.201609 704.178951 429.16234 561.710169 290.830785Z" p-id="10613"></path></svg>'
            };
            return iconEnum[type];
        },
        setSvgIconTag () {
            return 'class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"'
        }
    },
}
</script>
<style lang="scss" type="type/scss">
    @import "../../styles/components/_upload.scss";
</style>