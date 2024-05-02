import { updateNode } from "../shared/utils.js";
import { reconcileChildren } from "./ReactChildFiber.js";
/**
 *
 * @param {*} wip 需要处理的 fiber 对象节点
 * 注意这个 fiber 节点已经能够确定的是一个 HostComponent
 */
export function updateHostComponent(wip) {
  // 1. 创建真实的 DOM 节点对象
  if (!wip.stateNode) {
    // 进入此 if，说明当前的 fiber 节点没有创建过真实的 DOM 节点
    wip.stateNode = document.createElement(wip.type);
    // 接下来我们需要更新节点上的属性
    updateNode(wip.stateNode, {}, wip.props);

    // 到目前为止，说明当前的 fiber 节点所对应的 stateNode 已经有值了，也就是说有对应的 DOM 了
    // 因此接下来的下一步，我们就应该处理子节点了
    reconcileChildren(wip, wip.props.children);
    // 上一步执行完毕后，说明已经处理完了所有的子节点 vnode，fiber 的链表也就形成了
  }
}

/**
 * 更新文本节点
 * @param {*} wip 需要处理的 fiber 对象节点
 */
export function updateHostTextComponent(wip) {
  wip.stateNode = document.createTextNode(wip.props.children);
}

/**
 * 更新函数组件
 * @param {*} wip 需要处理的 fiber 对象节点
 */
export function updateFunctionComponent(wip) {
  const { type, props } = wip;
  // 这里从当前的 wip 上面获取到的 type 是一个函数
  // 那么我们就直接执行这个函数，获取到它的返回值
  const children = type(props);
  // 有了 vnode 节点之后，就调用 reconcileChildren 方法，来处理子节点
  reconcileChildren(wip, children);
}

/**
 * 更新类组件
 * @param {*} wip 需要处理的 fiber 对象节点
 */
export function updateClassComponent(wip) {
  const { type, props } = wip;
  // 这里从当前的 wip 上面获取到的 type 是一个类
  // 那么我们就 new 一个实例出来
  const instance = new type(props);
  // 接下来我们就可以调用 render 方法，获取到它的返回值
  const children = instance.render();
  // 有了 vnode 节点之后，就调用 reconcileChildren 方法，来处理子节点
  reconcileChildren(wip, children);
}
