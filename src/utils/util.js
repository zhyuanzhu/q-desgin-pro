/**
 * 查找数组中是否有元素
 */
export function hasParam (value, valueList=[]) {
    let i = 0, { length } = valueList;
    for (; i < length; i++) {
        if (value === valueList[i]) return true;
    }
    return false;
}

/**
 * 查找父组件
 */
export function findComponentParents (context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}


/**
 * 查找子组件
 */
export function findComponentChildren (context, componentName, ignoreComponentNames = []) {
    if ( typeOf(ignoreComponentNames) != 'array' ) {
        ignoreComponentNames = [ignoreComponentNames]
    }
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        if (ignoreComponentNames.indexOf(child.$options.name) < 0) {
            const _f = findComponentChildren(child, componentName);
            return components.concat(_f)
        } else {
            return components
        }
    }, [])
}

/**
 * deepcopy
 * @param {*} data 
 */
export function deepCopy (data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if ( t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if ( t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}


/**
 * scrollTop animation
 * @param {*} el 
 * @param {*} from 
 * @param {*} to 
 * @param {*} duration 
 * @param {*} endCallback 
 */
export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000/60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) {
            endCallback && endCallback();
            return;
        }

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

/**
 * 
 * @param {*} str 
 */
export function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}

/**
 * 
 * @param {dom} element 
 * @param {*} styleName 
 */
export function getStyle (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch(e) {
        return element.style[styleName];
    }
}

function typeOf (obj) {
    const toString  = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        // es6引入的数据类型暂时未添加
        // '[object Set]': 'set',
        // '[object Symbol]': 'symbol',
    };
    return map[toString.call(obj)];
}
