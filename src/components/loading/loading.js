import Vue from 'vue';
import Loading from './loading.vue';

Loading.newInstance = (_props = {}) => {
    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Loading, {
                props: _props
            });
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const loading = Instance.$children[0];
    return {
        component: loading,
        update (options) {
            if ('show' in options) {
                loading.show = options.show;
            }
        },
        destroy() {
            document.body.removeChild(component.$el);
        },
    }
}

export default Loading;