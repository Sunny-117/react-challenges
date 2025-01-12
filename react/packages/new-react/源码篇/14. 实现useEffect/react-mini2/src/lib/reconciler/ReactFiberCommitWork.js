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

export default commitWorker;
