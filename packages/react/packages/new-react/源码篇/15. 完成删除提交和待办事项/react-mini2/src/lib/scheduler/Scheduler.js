/**
 * 该文件就是调度器的具体实现
 */

import { push, pop, peek } from "./SchedulerMinHeap";
import { getCurrentTime } from "../shared/utils";

// 任务队列
const taskQueue = [];

// 任务 id 计数器
let taskIdCounter = 1;

// 是否有剩余时间
let hasTimeRemaining = true;

// 通过 MessageChannel 来模拟浏览器的 requestIdleCallback
const { port1, port2 } = new MessageChannel();

/**
 * 该函数的作用是为了组装一个任务对象，然后将其放入到任务队列
 * @param {*} callback 是一个需要执行的任务，该任务会在每一帧有剩余时间的时候去执行
 */
export default function scheduleCallback(callback) {
  // 获取当前时间
  const currentTime = getCurrentTime();
  // 接下来设置任务过期时间
  // 在 React 源码中，针对不同的任务类型，设定了不同的过期时间
  // 那么我们这里做一个简化，所有任务的优先级都相同
  const timeout = -1;

  // 计算出过期时间
  const expirationTime = currentTime + timeout;

  // 组装一个新的任务对象
  const newTask = {
    id: taskIdCounter++,
    callback,
    expirationTime,
    sortIndex: expirationTime, // 回头会根据这个 sortIndex 来进行排序
  };

  // 将新的任务推入到任务队列
  push(taskQueue, newTask);

  // 接下来请求调度，这样会产生一个宏任务
  port1.postMessage(null);
}

// 每次 port1.postMessage(null) 的时候，就会触发 port2.onmessage
// 在 port2.onmessage 中，我们会去执行任务队列中的任务
port2.onmessage = function () {
  // 该方法的作用就是不停的从任务队列中取出任务，然后执行

  // 获取当前时间
  const currentTime = getCurrentTime();
  // 从任务队列中取出第一个任务
  let currentTask = peek(taskQueue);

  while (currentTask) {
    // 首先这里需要做一个时间上面的判断
    // 如果任务的过期时间远大于当前时间（说明当前这个任务不着急，可以延期执行）
    // 并且当前帧所剩余的时间也不够了，那么就不执行了
    if (currentTask.expirationTime > currentTask && !hasTimeRemaining) {
      break;
    }
    // 没有进入到上面的 if，说明当前的任务是需要执行的
    const callback = currentTask.callback;
    currentTask.callback = null;
    // 执行对应的任务，传入剩余的时间
    const taskResult = callback(currentTime - currentTask.expirationTime);
    if (taskResult === undefined) {
      // 进入此 if，说明是任务执行完了才退出来的，那么就可以将其从任务队列中删除了
      pop(taskQueue);
      currentTask = peek(taskQueue);
    }
  }
};
