import createFiber from "../reconciler/ReactFiber";
import scheduleUpdateOnFiber from "../reconciler/ReactFiberWorkLoop";

/**
 * 更新容器的方法
 * @param {*} element 要挂载的 vnode 树
 * @param {*} container 容器的 DOM 节点
 */
function updateContainer(element, container) {
  const fiber = createFiber(element, {
    // 该对象就是我的父 fiber 对象，里面会放置一些核心的属性
    type: container.nodeName.toLowerCase(),
    stateNode: container,
  });
  // console.log(fiber);
  // 到目前为止，我们就创建了第一个 fiber 对象
  // 但是目前仅仅只有最外层的父元素创建了对应的 fiber 对象
  scheduleUpdateOnFiber(fiber);
}

class ReactDOMRoot {
  constructor(container) {
    // 将拿到的根 DOM 节点在内部保存一份
    this._internalRoot = container;
  }
  /**
   *
   * @param {*} children 要挂载到根节点的 vnode 树
   * 这里做一个讲课的约定：
   * 1. 以前的虚拟DOM，我们称之为 vnode
   * 2. 新的虚拟DOM，我们称之为 Fiber
   */
  render(children) {
    // console.log(children);
    updateContainer(children, this._internalRoot);
  }
}

const ReactDOM = {
  /**
   *
   * @param {*} container 要挂载的根 DOM 节点
   * @return 返回值是一个对象，该对象会有一个 render 方法
   */
  createRoot(container) {
    return new ReactDOMRoot(container);
  },
};

export default ReactDOM;
