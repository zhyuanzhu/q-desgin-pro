<template>
    <div :class="[`${prefixCls}`]" v-if="total > pageSize">
        <div :class="[`${prefixCls}-list`, circle && `${prefixCls}-list-circle`]">
            <div class="page-prev" :class="{'page-prev-disabled': now == 1}" @click="prev">
                <span class="prev"></span>
            </div>
            <div class="page-item" :class="{'page-active': now == 1}" @click="changePage(1)">1</div>
            <div class="page-prev-fast" v-if="now - 3 > 1" @click="prevFast">···</div>
            <div class="page-item" v-if="now - 2 > 1" @click="changePage(now - 2)">{{ now - 2 }}</div>
            <div class="page-item" v-if="now - 1 > 1" @click="changePage(now - 1)">{{ now - 1 }}</div>
            <div class="page-item page-active" v-if="now != 1 && now != totalPage()" @click="changePage(now)">{{now}}</div>
            <div class="page-item" v-if="now + 1 < totalPage()" @click="changePage(now + 1)">{{ now + 1 }}</div>
            <div class="page-item" v-if="now + 2 < totalPage()" @click="changePage(now + 2)">{{ now + 2 }}</div>
            <div class="page-next-fast" v-if="now + 3 < totalPage()" @click="nextFast">···</div>
            <div class="page-item" :class="{'page-active': now == totalPage()}" v-if="total > 1" @click="changePage(totalPage())">{{ totalPage() }}</div>
            <div class="page-next" :class="{'page-next-disabled': now == totalPage()}" @click="next">
                <span class="next"></span>
            </div>
        </div>
        <slot></slot>    <!-- 后续准备添加可设置pageSize -->
    </div>
</template>
<script>

const prefixCls = 'page';
//后续优化添加快速前进，和直接跳转某一页

export default {
    name: 'Page',
    props: {
        total: Number,
        current: {
            type: Number,
            default: 1
        },
        pageSize: Number,
        circle: Boolean
    },
    data() {
        return {
            prefixCls,
            now: this.current,
            totalPage: () => {
                return Math.ceil(this.total / this.pageSize)
            }
        }
    },
    watch: {
        current (val) {
            if (val !== this.now) {
                this.now = val;
            }
        }
    },
    methods: {
        prev () {
            let prev = this.now - 1;
            prev && this.changePage(prev);
        },
        next () {
            let next = this.now + 1;
            next <= this.totalPage() && this.changePage(next);
            
        },
        prevFast () {

        },
        nextFast () {

        },
        changePage (page) {
            if (this.now === page) return;
            this.now = page;
            this.$emit('changePage', page)
        }

    },
}
</script>