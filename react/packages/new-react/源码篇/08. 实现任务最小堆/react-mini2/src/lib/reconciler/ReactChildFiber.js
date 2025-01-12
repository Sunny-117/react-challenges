import { isStr, isArray } from "../shared/utils";
import createFiber from "../reconciler/ReactFiber";

/**
 * 该方法是用来协调子节点的，这里就会涉及到有名的 diff 算法
 * @param {*} returnFiber 因为你是处理子节点，因此传入的这个 fiber 就会成为父 fiber
 * @param {*} children 子节点的 vnode 数组
 */
export function reconcileChildren(returnFiber, children) {
  // 如果 children 是一个字符串，那么说明这是一个文本节点
  // 那么这个文本节点我们已经在 updateNode 方法中处理过了，所以这里就不需要再处理了
  if (isStr(children)) return;

  // 接下来需要做一些准备工作
  // 如果只有一个子节点，那么 children 就是一个 vnode 对象
  // 如果有多个子节点，那么 children 就是一个 vnode 数组
  // 所以我们这一步，就是为了将 children 统一都转为数组，方便我们后续的处理
  const newChildren = isArray(children) ? children : [children];
  // 第二个准备工作：我们需要声明一些变量
  let previousNewFiber = null; // 上一个 fiber 对象
  let oldFiber = returnFiber.alternate?.child; // 上一个 fiber 对象对应的旧 fiber 对象
  let i = 0; // 记录 children 数组的索引（下标）
  let lastPlacedIndex = 0; // 上一次 DOM 节点插入的最远位置
  // 是否需要追踪副作用，该变量是一个布尔值
  // true 代表组件更新
  // false 代表组件初次渲染
  let shouldTrackSideEffects = !!returnFiber.alternate; // 是否需要追踪副作用

  // 第一轮遍历，会尝试复用节点
  // 复用节点意味着你首先得有这些节点，才能说能不能复用的问题
  for (; oldFiber && i < newChildren.length; i++) {
    // 第一次是不会进入到这个循环的，因为一开始压根儿没有 oldFiber
  }

  // 从上面的 for 循环出来，有两种情况
  // 1. oldFiber 为 null，说明是初次渲染
  // 2. i === newChildren.length 说明是更新
  if (i === newChildren.length) {
    // 如果还剩余有旧的 fiber 节点，那么就需要将其删除掉
  }

  // 接下来就是我们初次渲染的情况
  if (!oldFiber) {
    // 说明是初次渲染
    // 那么我们需要将 newChildren 数组中的每一个元素都生成一个 fiber 对象
    // 然后将这些 fiber 对象串联起来
    for (; i < newChildren.length; i++) {
      const newChildVnode = newChildren[i];

      // 那么我们这一次就不处理，直接跳到下一次
      if (newChildVnode === null) continue;

      // 下一步就应该根据 vnode 生成新的 fiber
      const newFiber = createFiber(newChildVnode, returnFiber);

      // 接下来我们需要去更新 lastPlacedIndex 这个值
      lastPlacedIndex = placeChild(
        newFiber,
        lastPlacedIndex,
        i,
        shouldTrackSideEffects
      );

      // 接下来非常重要了，接下来我们要将新生成的 fiber 加入到 fiber 链表里面去
      if (previousNewFiber === null) {
        // 说明你是第一个子节点
        returnFiber.child = newFiber;
      } else {
        // 进入此分支，说明当前生成的 fiber 节点并非父 fiber 的第一个节点
        previousNewFiber.sibling = newFiber;
      }
      // 将 previousNewFiber 设置为 newFiber
      // 从而将当前 fiber 更新为上一个 fiber
      previousNewFiber = newFiber;
    }
  }
}

/**
 * 该方法专门用于更新 lastPlacedIndex
 * @param {*} newFiber  上面刚刚创建的新的 fiber 对象
 * @param {*} lastPlacedIndex 上一次的 lastPlacedIndex，也就是上一次插入的最远位置，初始值是 0
 * @param {*} newIndex 当前的下标，初始值也是 0
 * @param {*} shouldTrackSideEffects // 用于判断 returnFiber 是初次渲染还是更新
 */
function placeChild(
  newFiber,
  lastPlacedIndex,
  newIndex,
  shouldTrackSideEffects
) {
  // 更新 fiber 对象上面的 index
  // fiber 对象上面的 index 记录当前 fiber 节点在当前层级下的位置
  newFiber.index = newIndex;
  if (!shouldTrackSideEffects) {
    // 进入此 if，说明当前是初次渲染
    // 那么我们就不需要记录节点位置了
    return lastPlacedIndex;
  }
}
