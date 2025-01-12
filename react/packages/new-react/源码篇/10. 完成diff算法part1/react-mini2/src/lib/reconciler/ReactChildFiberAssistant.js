/**
 * 该文件是一个辅助文件，为 diff 算法提供了一些辅助的方法
 */

import { Placement } from "../shared/utils";

/**
 * 判断是否为相同
 * 1. 同一层级下面
 * 2. 类型相同
 * 3. key 相同
 * @param {*} a 新的 vnode 节点
 * @param {*} b 旧的 fiber 节点
 */
export function sameNode(a, b) {
  return a && b && a.type === b.type && a.key === b.key;
}

/**
 * 该方法专门用于更新 lastPlacedIndex
 * @param {*} newFiber  上面刚刚创建的新的 fiber 对象
 * @param {*} lastPlacedIndex 上一次的 lastPlacedIndex，也就是上一次插入的最远位置，初始值是 0
 * @param {*} newIndex 当前的下标，初始值也是 0
 * @param {*} shouldTrackSideEffects // 用于判断 returnFiber 是初次渲染还是更新
 * old >> 1 2 3 4 5
 * new >> 5 1 2 3 4
 * 5 之前的索引为 4，那么我就要记录这个值
 * 通过记录这个值，我能够判断出当前的 fiber 究竟应该是修改还是移动
 */
export function placeChild(
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

  // 首先拿到旧的 fiber 节点
  const current = newFiber.alternate;
  if (current) {
    // 首先获取到旧的 fiber 的 index 值
    const oldIndex = current.index;
    if (oldIndex < lastPlacedIndex) {
      // 说明当前的节点是需要移动的
      newFiber.flags |= Placement;
      return lastPlacedIndex;
    } else {
      // 进入此分支，说明 oldIndex 应该作为最新的 lastPlacedIndex
      return oldIndex;
    }
  } else {
    // 进入此分支，说明当前的 fiber 是初次渲染
    newFiber.flags |= Placement;
    return lastPlacedIndex;
  }
}
