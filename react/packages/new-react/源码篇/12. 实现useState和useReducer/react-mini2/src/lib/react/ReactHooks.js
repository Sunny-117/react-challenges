/**
 * 该文件就是用于实现各种 Hooks
 */
import scheduleUpdateOnFiber from "../reconciler/ReactFiberWorkLoop";

// 首先我们先定义一些全部变量
let currentlyRenderingFiber = null; // 当前渲染的 fiber 对象
let workInProgressHook = null; // 当前正在处理的 hook
let currentHook = null; // 当前处理完的 hook

/**
 * 该方法主要是对当前这颗 fiber 以及 hooks 进行一个初始化
 * @param {*} wip 接收一个 fiber 对象
 */
export function renderWithHooks(wip) {
  currentlyRenderingFiber = wip; // 将当前渲染的 fiber 对象赋值给 currentlyRenderingFiber
  currentlyRenderingFiber.memorizedState = null; // 将当前渲染的 fiber 对象的 memorizedState 置为 null
  workInProgressHook = null; // 将当前正在处理的 hook 置为 null
  //存储 effect 对应的副作用函数和依赖项，这节课用不到
  currentlyRenderingFiber.updateQueue = [];
}

/**
 * 该方法的作用主要就是返回一个 hook 对象
 * 并且让 workInProgressHook始终指向 hook 链表的最后一个 hook
 */
function updateWorkInProgressHook() {
  // 这个变量就是存储最终我们要向外部返回的 hook
  let hook = null;

  const current = currentlyRenderingFiber.alternate; // 旧的 fiber 对象
  if (current) {
    // 进入此分支，说明不是第一次渲染，存在旧的 fiber 对象
    currentlyRenderingFiber.memorizedState = current.memorizedState;
    if (workInProgressHook) {
      // 链表已经存在
      workInProgressHook = hook = workInProgressHook.next;
      currentHook = currentHook.next;
    } else {
      // 链表不存在
      workInProgressHook = hook = currentlyRenderingFiber.memorizedState;
      currentHook = current.memorizedState;
    }
  } else {
    // 说明是第一次渲染
    // 第一次你进来，你啥都没有，那么我们就需要做一些初始化的工作
    hook = {
      memorizedState: null, // 存储数据
      next: null, // 指向下一个 hook
    };
    if (workInProgressHook) {
      // 说明这个链表上面已经有 hook 了
      workInProgressHook = workInProgressHook.next = hook;
    } else {
      // 说明 hook 链表上面还没有 hook
      workInProgressHook = currentlyRenderingFiber.memorizedState = hook;
    }
  }

  return hook;
}

/**
 * 该方法所做的事情，及其的简单
 * 根据用户传入的 reducer，计算最新的状态，然后处理一下 fiber 对象
 * @param {*} fiber 当前正在处理的 fiber 对象
 * @param {*} hook 当前正在处理的 hook
 * @param {*} reducer 用户传入的 reducer 函数，这个有可能是没有的
 * @param {*} action 如果没有，那么说明用户调用的是 useState，那么传入的状态就是最终的状态，不需要在计算
 * 这个状态可以在 action 中获取到
 */
function dispatchReducerAction(fiber, hook, reducer, action) {
  // 下面的代码能够得到一个最新的状态
  hook.memorizedState = reducer ? reducer(hook.memorizedState) : action;
  // 状态更新完毕，该 fiber 就是旧的 fiber，我们需要对这个 fiber 进行一个处理
  fiber.alternate = { ...fiber };
  // 将相邻的 fiber 节点置为 null，不去更新相邻的节点
  fiber.sibling = null;
  scheduleUpdateOnFiber(fiber);
}

/**
 *
 * @param {*} initialState 初始化状态
 */
export function useState(initialState) {
  return useReducer(null, initialState);
}

/**
 *
 * @param {*} reducer 改变状态的纯函数
 * @param {*} initialState 初始化状态
 */
export function useReducer(reducer, initialState) {
  // 首先我们要拿到最新的 hook
  // 这里的 hook 其实是一个对象，里面存储了一些数据
  // hook ---> {memorizedState: xxx, next: xxx}
  // hook 对象里面有两个属性，一个 memorizedState 用于存储数据，一个 next 用于指向下一个 hook
  const hook = updateWorkInProgressHook();

  if (!currentlyRenderingFiber.alternate) {
    // 说明是首次渲染
    hook.memorizedState = initialState; // 将当前 hook 的 memorizedState 置为 initialState
  }

  const dispatch = dispatchReducerAction.bind(
    null,
    currentlyRenderingFiber,
    hook,
    reducer
  );

  return [hook.memorizedState, dispatch];
}
