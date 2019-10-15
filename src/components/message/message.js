import Vue from 'vue';
import Message from './message.vue';

Message.newInstance = (_props = {}) => {

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Message, {
                props: _props
            });
        }
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const message = Instance.$children[0];
    return {
        component: message,
        init (options = {}, d) {
            // if (options.text) {
            //     message.text = options.text;
            // }
            // message.type = options.type;
            // message.onOk = options.onOk;
            // message.destroy = d;
            Object.assign(message, options)
        },
        destroy() {
            document.body.removeChild(component.$el);
        },
    }


}

export default Message;