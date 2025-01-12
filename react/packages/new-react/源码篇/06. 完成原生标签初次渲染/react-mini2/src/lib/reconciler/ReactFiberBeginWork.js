// 在 beginWork 中，主要就是根据 fiber 不同的 tag 值，调用不同的方法来处理
import {
  FunctionComponent,
  ClassComponent,
  HostText,
  HostComponent,
  Fragment,
} from "./ReactWorkTags";
import {
  updateHostComponent,
  updateHostTextComponent,
} from "./ReactFiberReconciler";

/**
 * 根据 fiber 不同的 tag 值，调用不同的方法来处理
 * @param {*} wip
 */
function beginWork(wip) {
  const tag = wip.tag;

  switch (tag) {
    case HostComponent: {
      updateHostComponent(wip);
      break;
    }
    case FunctionComponent: {
      break;
    }
    case ClassComponent: {
      break;
    }
    case HostText: {
      updateHostTextComponent(wip);
      break;
    }
    case Fragment: {
      break;
    }
  }
}

export default beginWork;
