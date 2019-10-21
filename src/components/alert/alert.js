import Vue from 'vue';
import ComAlert from './alert.vue';
const AlertConstructor = Vue.extend(ComAlert);
let alertPool = [];

let getAnInstance = () => {
    if (alertPool.length > 0) {
        let instance = alertPool[0];
        alertPool.splice(0, 1);
        return instance;
    }
    return new AlertConstructor({
        el: document.createElement('div')
    });
};


let returnAnInstance = instance => {
    if (instance) {
        alertPool.push(instance);
    }
};

let removeDom = event => {
    let { target } = event;
    if (target.parentNode) {
        target.parentNode.removeChild(target);
    }
};

AlertConstructor.prototype.close = function () {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    this.cloed = true;
    returnAnInstance(this);
};

const Alert = (options = {}) => {
    let duration = options.duration || 3000;
    let instance = getAnInstance();
    instance.close();
    clearTimeout(instance.timer);
    instance.text = typeof options === 'string' ? options : options.text;
    instance.type = options.type;
    document.body.appendChild(instance.$el);

    Vue.nextTick(function () {
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        ~duration && (instance.timer = setTimeout(function () {
            if (instance.closed) return;
            instance.close();
        }, duration))
    })

    return instance;

}

export default Alert;

