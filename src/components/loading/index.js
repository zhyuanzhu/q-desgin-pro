
import Loading from './loading';
let loadingInstance;
let show = false;

function getLoadingInstance () {
    loadingInstance = loadingInstance || Loading.newInstance({
        show
    });
    return loadingInstance;
}

function update (options) {
    let instance = getLoadingInstance();
    instance.update(options);
}

export default {
    show () {
        update({
            show: true
        })
    },
    hide () {
        update ({
            show: false
        })
    },
    destroy () {
        let instance = getLoadingInstance();
        loadingInstance = null;
        instance.destroy();
    }
}
