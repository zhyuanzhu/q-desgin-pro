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
