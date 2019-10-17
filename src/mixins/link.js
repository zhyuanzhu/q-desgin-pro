import { hasParam } from '../utils/util.js';

//跳转url地址混入
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        to: {
            type: String
        },
        replace: {
            type: Boolean,
            default: false
        },
        append: {
            type: Boolean,
            required: false,
            default: false
        },
        target: {
            type: String,
            default: '_self',
            validator (value) {
                const valueList = ['_blank', '_self', '_parent', '_top'];
                return hasParam(value, valueList);
            }
        }
    },
    computed: {
        linkUrl () {
            const { to } = this,
                type = typeof to;
            if (type !== 'string') return null;
            if (to.includes('//')) return to;
            const router = this.$router;
            if (router) {
                const current = this.$route;
                const route = router.resolve(to, current, this.append);
                return route ? route.href : to;
            }
            return to;
        },
        listUrl () {
            const { data } = this;
            return data.map(item => {
                const to = item.to,
                    type = typeof to;
                if (type !== 'string') return null;
                if (to.includes('//')) return to;
                const router = this.$router;
                if (router) {
                    const current = this.$route;
                    const route = router.resolve(to, current, this.append);
                    return route ? route.href : to;
                }
                return to;
            })
        }
    },
    methods: {
        handleClick (new_window = false) {
            const router = this.$router;
            if (new_window) {
                let { to } = this.to;
                if (router) {
                    const current = this.$route;
                    const route = router.resolve(this.to, current, this.append);
                    to = route ? route.href : this.to;
                }
                window.open(to);
            } else {
                if (router) {
                    this.replace ? this.router.replace(this.to) : this.$router.push(this.to);
                } else {
                    window.location.href = this.to;
                }
            }
        }
    },
}