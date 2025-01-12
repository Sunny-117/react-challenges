// 存放工具方法的文件

/**
 * 对 fiber 对象要做的操作进行的标记
 */

// 没有任何操作
export const NoFlags = 0b00000000000000000000;
// 节点新增、插入、移动
export const Placement = 0b0000000000000000000010; // 2
// 节点更新属性
export const Update = 0b0000000000000000000100; // 4
// 删除节点
export const Deletion = 0b0000000000000000001000; // 8

/**
 * 判断参数 s 是否为字符串
 * @param {*} s
 * @returns
 */
export function isStrOrNum(s) {
  return typeof s === "string" || typeof s === "number";
}

/**
 * 判断参数 fn 是否为函数
 * @param {*} fn
 * @returns
 */
export function isFn(fn) {
  return typeof fn === "function";
}

/**
 * 判断参数 s 是否为 undefined
 * @param {*} s
 * @returns
 */
export function isUndefined(s) {
  return s === undefined;
}

/**
 * 判断参数 arr 是否为数组
 * @param {*} arr
 * @returns
 */
export function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * 该方法主要负责更新 DOM 节点上的属性
 * @param {*} node 真实的 DOM 节点
 * @param {*} prevVal 旧值
 * @param {*} nextVal 新值
 */
export function updateNode(node, prevVal, nextVal) {
  // 这里其实要做的事情就分为两个部分：
  // 1. 对旧值的处理
  // 2. 对新值的处理

  // 步骤一：对旧值进行处理
  Object.keys(prevVal).forEach((k) => {
    // 拿到的 k 就有不同的情况
    if (k === "children") {
      // 这里我们需要判断一下 children 是否是字符串
      // 如果是字符串，说明是文本节点，我们需要将其设置为空字符串
      if (isStrOrNum(prevVal[k])) {
        node.textContent = "";
      }
    } else if (k.startsWith("on")) {
      // 说明是绑定的事件
      // 那么我就需要将你这个旧值移除掉

      // 首先获取到事件名
      let eventName = k.slice(2).toLowerCase();
      // 需要注意，如果是 change 事件，那么背后绑定的是 input 事件
      // 这里我们需要做一下处理
      if (eventName === "change") {
        eventName = "input";
      }
      // 移除事件
      node.removeEventListener(eventName, prevVal[k]);
    } else {
      // 进入此分支，说明就是普通的属性
      // 例如 id、className 之类的
      // 这里不能无脑的直接去除，应该检查一下新值中是否还有这个属性
      // 如果没有，我们需要将其移除掉
      if (!(k in nextVal)) {
        node[k] = "";
      }
    }
  });

  // 步骤二：对新值进行处理，流程基本和上面一样，只不过是反着操作
  Object.keys(nextVal).forEach((k) => {
    if (k === "children") {
      // 需要判断是否是文本节点
      if (isStrOrNum(nextVal[k])) {
        node.textContent = nextVal[k];
      }
    } else if (k.startsWith("on")) {
      // 说明是绑定事件
      let eventName = k.slice(2).toLowerCase();

      if (eventName === "change") {
        eventName = "input";
      }

      node.addEventListener(eventName, nextVal[k]);
    } else {
      // 进入此分支，说明是普通的属性
      node[k] = nextVal[k];
    }
  });
}

/**
 *
 * @returns 返回当前时间
 * 关于 performance API 的说明，可以参阅：https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now
 */
export function getCurrentTime() {
  return performance.now();
}

/**
 * 比较两个依赖项数组的每一项是否相同
 * 如果都相同，返回 true，否则返回 false
 * @param {*} nextDeps 新的依赖项数组
 * @param {*} prevDeps 旧的依赖项数组
 */
export function areHookInputEqual(nextDeps, prevDeps) {
  if (prevDeps === null) return false;
  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    // Object.is 是一个静态方法，用来严格比较两个值是否相同
    if (Object.is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    // 只要有一项不相等，就返回 false
    return false;
  }
  // 上面的整个循环都跑完了都没有返回 false，说明两个依赖项数组是相等的
  return true;
}
