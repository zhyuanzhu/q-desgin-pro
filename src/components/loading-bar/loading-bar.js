import LoadingBar from './loading-bar.vue';
import Vue from 'vue';

LoadingBar.newInstance = (_props = {}) => {
    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(LoadingBar, { props: _props })
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const LOADING_BAR = Instance.$children[0];

    return {
        update (options) {
            if ('percent' in options) {
                LOADING_BAR.percent = options.percent;
            }
            if (options.status) {
                LOADING_BAR.status = options.status;
            }
            if ('show' in options) {
                LOADING_BAR.show = options.show;
            }
        },
        component: LOADING_BAR,
        destroy () {
            document.body.removeChild(document.querySelector('qui-loading-bar'))
        }
    }
}

export default LoadingBar;