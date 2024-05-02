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

/**
 *
 * @param {*} returnFiber 父 fiber
 * @param {*} childToDelete 需要删除的子 fiber
 */
export function deleteChild(returnFiber, childToDelete) {
  // 这里的删除其实仅仅只是标记一下，真正的删除是在 commit 阶段
  // 将要删除的 fiber 对象放入到到一个数组里面
  const deletions = returnFiber.deletions; // deletions 是一个数组
  if (deletions) {
    // 如果有这个数组，那么直接 push 进去即可
    returnFiber.deletions.push(childToDelete);
  } else {
    // 第一次是没有这个数组的，那么我们就初始化一个数组
    // 并且将本次要删除的子 fiber 放入进去
    returnFiber.deletions = [childToDelete];
  }
}

/**
 * 这里涉及到要删除多个节点，删除多个节点的核心思想也就是一个一个去删除
 * @param {*} returnFiber 父 fiber
 * @param {*} currentFirstChild 旧的第一个待删除的子 fiber
 */
export function deleteRemainingChildren(returnFiber, currentFirstChild) {
  let childToDelete = currentFirstChild;
  while (childToDelete) {
    deleteChild(returnFiber, childToDelete);
    childToDelete = childToDelete.sibling;
  }
}

/**
 * 将旧的子节点构建到一个 map 结构里面
 * @param {*} currentFirstChild
 */
export function mapRemainingChildren(currentFirstChild) {
  // 首先第一步肯定是创建一个 map
  const existingChildren = new Map();

  let existingChild = currentFirstChild;

  while (existingChild) {
    existingChildren.set(
      existingChild.key || existingChild.index,
      existingChild
    );
    // 切换到下一个兄弟节点
    existingChild = existingChild.sibling;
  }

  return existingChildren;
}
