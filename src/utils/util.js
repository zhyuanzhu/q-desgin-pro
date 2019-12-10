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
