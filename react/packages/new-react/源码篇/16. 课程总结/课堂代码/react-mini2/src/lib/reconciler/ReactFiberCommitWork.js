import { Placement, Update, updateNode } from "../shared/utils";
import { FunctionComponent } from "./ReactWorkTags";
import { invokeHooks } from "./ReactChildFiberAssistant";
function getParentDOM(wip) {
  let temp = wip;
  while (temp) {
    if (temp.stateNode) return temp.stateNode;
    // 如果没有进入上面的 if，说明当前的 fiber 节点并没有对应的 DOM 对象
    // 那么就需要继续向上寻找
    // 那么问题来了，为什么该 fiber 上面没有对应的 DOM 对象呢？
    // 因为该 fiber 节点可能是一个函数组件或者类组件、Franment
    temp = temp.return;
  }
}

function commitNode(wip) {
  // 1. 首先第一步，我们需要获取该 fiber 所对应的父节点的 DOM 对象
  const parentNodeDOM = getParentDOM(wip.return);

  // 从 fiber 对象上面拿到 flags 和 stateNode
  const { flags, stateNode } = wip;

  // 接下来我们需要根据不同的 flags 做不同的操作
  if (flags & Placement && stateNode) {
    parentNodeDOM.appendChild(wip.stateNode);
  }

  if (flags & Update && stateNode) {
    // 这里就应该是更新属性的操作了
    updateNode(stateNode, wip.alternate.props, wip.props);
  }

  if (wip.deletions) {
    // 说明有需要删除的节点
    commitDeletion(wip.deletions, stateNode || parentNodeDOM);
  }

  if (wip.tag === FunctionComponent) {
    // 进入此 if，说明当前的 fiber 对象的类型为函数类型
    // 那么我们处理一下 hook
    invokeHooks(wip);
  }
}

function commitWorker(wip) {
  if (!wip) return;

  // 整个 commitWorker 里面的提交分三步走：
  // 1. 提交自己
  // 2. 提交子节点
  // 3. 提交兄弟节点

  commitNode(wip); // 提交自己
  commitWorker(wip.child); // 提交子节点
  commitWorker(wip.sibling); // 提交兄弟节点
}

/**
 *
 * @param {*} fiber 要删除的 fiber
 * @returns fiber 所对应的真实 DOM 对象
 */
function getStateNode(fiber) {
  let temp = fiber;
  while (!temp.stateNode) {
    temp = temp.child;
  }
  return temp.stateNode;
}

/**
 *
 * @param {*} deletions 当前 fiber 对象上面要删除的子 fiber 数组
 * @param {*} parentNode 当前 fiber 对象所对应的真实 DOM 对象，如果当前的 fiber 没有 dom 对象，那么传递过来的就是父级的 dom
 */
function commitDeletion(deletions, parentNode) {
  for (let i = 0; i < deletions.length; i++) {
    // 取出每一个要删除的 fiber 对象
    const child = deletions[i];
    // 这里在进行删除的时候，需要删除 fiber 所对应的 stateNode（DOM）
    // 但是存在一种情况，没有对应的 stateNode（函数组件或者类组件）
    // 我们就需要往下一直找，直到找到有对应的真实 dom 为止
    parentNode.removeChild(getStateNode(child));
  }
}

export default commitWorker;
