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

export function updateHostTextComponent(wip) {
  wip.stateNode = document.createTextNode(wip.props.children);
}
