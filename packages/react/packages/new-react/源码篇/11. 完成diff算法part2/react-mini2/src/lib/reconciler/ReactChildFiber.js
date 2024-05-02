import { isStr, isArray, Update } from "../shared/utils";
import createFiber from "../reconciler/ReactFiber";
import {
  sameNode,
  placeChild,
  deleteRemainingChildren,
  mapRemainingChildren,
  deleteChild,
} from "./ReactChildFiberAssistant";

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
  // 该变量有两个作用：
  // 1. 存储下一个旧的 fiber 对象
  // 2. 临时存储当前的旧的 fiber 对象
  let nextOldFiber = null;

  // 接下来就是我们整个 diff 核心的算法思想：
  // 整体来讲分为 5 个大的步骤：
  // 1. 第一轮遍历，从左往右遍历新节点（vnode），在遍历的同时比较新旧节点（旧节点是 fiber 对象）
  // 如果节点可以复用，那么复用，循环继续往右边走
  // 如果节点不能够复用，那么就跳出循环，结束第一轮遍历
  // 2. 检查 newChildren 是否完成了遍历，因为从上面第一步出来，就两种：
  // 要么是提前跳出来的
  // 要么是遍历完了跳出来，如果新节点完成了整个遍历，但是旧节点（fiber对象）还存在，那么就将旧节点删除
  // 3. 初次渲染（这一步我们其实之前已经完成了）
  // 还有一种情况也是属于初次渲染：旧节点遍历完了，新节点还有剩余，那么这些新节点就是属于初次渲染
  // 4. 处理新旧节点都还有剩余的情况
  // （1）将剩下旧节点放入到一个 map 结构里面，方便之后使用
  // （2）遍历剩余的新节点，通过新节点的 key 去 map 里面进行查找，看有没有能够复用的旧节点，如果有，拿来复用，并且会从 map 中删除对应的旧节点
  // 5. 整个新节点遍历完成后，如果 map 中还有剩余的旧节点，这些旧节点也就没有用了，直接删除即可

  // 1. 第一轮遍历，从左往右遍历新节点（vnode），在遍历的同时比较新旧节点（旧节点是 fiber 对象）
  // 第一轮遍历，会尝试复用节点
  // 复用节点意味着你首先得有这些节点，才能说能不能复用的问题
  for (; oldFiber && i < newChildren.length; i++) {
    // 第一次是不会进入到这个循环的，因为一开始压根儿没有 oldFiber

    // 首先我们拿到当前的 vnode
    const newChild = newChildren[i];
    if (newChild === null) continue;

    // 在判断是否能够复用之前，我们先给 nextOldFiber 赋值
    // 这里有一种情况
    // old 一开始是 1 2 3 4 5，进行了一些修改，现在只剩下 5 和 4
    // old >> 5(4) 4(3)
    // new >> 4(3) 1 2 3 5(4)
    // 此时旧的节点的 index 是大于 i，因此我们需要将 nextOldFiber 暂存为 oldFiber
    if (oldFiber.index > i) {
      nextOldFiber = oldFiber;
      oldFiber = null;
    } else {
      nextOldFiber = oldFiber.sibling;
    }

    // 接下来下一步，就是判断是否能够复用
    const same = sameNode(newChild, oldFiber);

    if (!same) {
      // 在退出第一轮遍历之前，我们会做一些额外的工作
      if (oldFiber === null) {
        // 我们需要将 oldFiber 原本的值还原，方便后面使用
        oldFiber = nextOldFiber;
      }
      // 如果不能复用，那么就跳出循环，第一轮遍历就结束了
      break;
    }

    // 如果没有进入到上面的 if，那么代码走到这里，就说明可以复用
    const newFiber = createFiber(newChild, returnFiber);
    // 复用旧 fiber 上面的部分信息，特别是 DOM 节点
    Object.assign(newFiber, {
      stateNode: oldFiber.stateNode,
      alternate: oldFiber,
      flags: Update,
    });

    // 更新 lastPlacedIndex 的值
    lastPlacedIndex = placeChild(
      newFiber,
      lastPlacedIndex,
      i,
      shouldTrackSideEffects
    );

    // 最后，我们需要将 newFiber 加入到 fiber 链表中去
    if (previousNewFiber === null) {
      // 说明你是第一个子节点
      returnFiber.child = newFiber;
    } else {
      // 进入此分支，说明当前生成的 fiber 节点并非父 fiber 的第一个节点
      previousNewFiber.sibling = newFiber;
    }

    // 将 previousNewFiber 设置为 newFiber
    previousNewFiber = newFiber;
    // oldFiber 存储下一个旧节点信息
    oldFiber = nextOldFiber;
  }

  // 2. 检查 newChildren 是否完成了遍历
  // 从上面的 for 循环出来，有两种情况
  // 1. oldFiber 为 null，说明是初次渲染
  // 2. i === newChildren.length，说明是遍历完了出来的
  if (i === newChildren.length) {
    // 如果还剩余有旧的 fiber 节点，那么就需要将其删除掉
    deleteRemainingChildren(returnFiber, oldFiber);
    return;
  }

  // 3. 接下来就是我们初次渲染的情况
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

  // 4. 处理新旧节点都还有剩余的情况
  // 首先我们需要创建一个 map 结构，用于存储剩余的旧节点
  const existingChildren = mapRemainingChildren(oldFiber);
  // 去遍历剩余的新节点
  for (; i < newChildren.length; i++) {
    // 先拿到当前的 vnode
    const newChild = newChildren[i];
    if (newChild === null) continue;

    // 根据新节点的 vnode 去生成新的 fiber
    const newFiber = createFiber(newChild, returnFiber);

    // 接下来就需要去哈希表里面寻找是否有可以复用的节点
    const matchedFiber = existingChildren.get(newFiber.key || newFiber.index);
    // 这里就有两种情况：
    // 有可能从哈希表里面找到了，也有可能没有找到
    if (matchedFiber) {
      // 说明找到了，那么我们就可以复用
      // 复用旧 fiber 上面的部分信息，特别是 DOM 节点
      Object.assign(newFiber, {
        stateNode: matchedFiber.stateNode,
        alternate: matchedFiber,
        flags: Update,
      });
      // 删除哈希表中的旧 fiber
      existingChildren.delete(newFiber.key || newFiber.index);
    }

    // 更新 lastPlacedIndex 的值
    lastPlacedIndex = placeChild(
      newFiber,
      lastPlacedIndex,
      i,
      shouldTrackSideEffects
    );

    // 形成链表
    if (previousNewFiber === null) {
      // 说明你是第一个子节点
      returnFiber.child = newFiber;
    } else {
      // 进入此分支，说明当前生成的 fiber 节点并非父 fiber 的第一个节点
      previousNewFiber.sibling = newFiber;
    }
    // 不要忘了更新 previousNewFiber
    previousNewFiber = newFiber;

    // 5. 整个新节点遍历完成后，如果 map 中还有剩余的旧节点，这些旧节点也就没有用了，直接删除即可
    if (shouldTrackSideEffects) {
      existingChildren.forEach((child) => {
        deleteChild(returnFiber, child);
      });
    }
  }
}
