export default {
    props: {
        disabledHours: {
            type: Array,
            default: () => []
        },
        disabledMinutes: {
            type: Array,
            default: () => []
        },
        disabledSeconds: {
            type: Array,
            default: () => []
        },
        hideDisabledOptions: {
            type: Boolean,
            default: false
        }
    }
};