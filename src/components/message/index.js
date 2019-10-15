import Message from './message';

let messageInstance;
let _options = {
    destroy () {
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy();
    }
};

function getMessageInstance () {
    messageInstance = messageInstance || Message.newInstance();
    return messageInstance;
}

function init (o = {}) {
    let instance = getMessageInstance();
    Object.assign(_options, o)
    instance.init(_options)
}

// function setInstanceText (o = {}) {
//     Object.assign(_options, o)
//     init(_options);
// }

export default {
    success (options) {
        options.type = 'success';
        init(options);
    },
    warning (options) {
        options.type = 'warning';
        init(options);
    },
    error (options) {
        options.type = 'error';
        init(options);
    }
}