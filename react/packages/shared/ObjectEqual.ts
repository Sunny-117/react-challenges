/**
 * 浅比较：只比较对象的第一层属性
 * @param {*} obj1
 * @param {*} obj2
 * @returns
 */
export function ObjectEqual(obj1, obj2) {
    // 只比较了对象的一层，浅比较
    for (let prop in obj1) {
        // if (obj1[prop] !== obj2[prop]) {
        if (!Object.is(obj1[prop], obj2[prop])) {
            return false;
        }
    }
    return true;
}
