/**
 * 该文件为最小堆的实现
 * 首先需要你对最小堆有一定的了解
 */

/**
 * 返回任务队列的第一个任务
 * @param {*} heap 任务队列
 */
export function peek(heap) {
  return heap.length === 0 ? null : heap[0];
}

/**
 * 向任务队列中添加一个任务
 * @param {*} heap 任务队列
 * @param {*} task 任务
 */
export function push(heap, task) {
  // 获取任务队列的长度
  const index = heap.length;
  // 将当前任务直接推入到任务队列的末尾，目前不一定在合适的位置
  heap.push(task);
  // 将当前任务进行上浮操作，使其在合适的位置
  siftUp(heap, task, index);
}

/**
 * 负责从任务队列里面删除堆顶的任务
 * @param {*} heap 任务队列
 */
export function pop(heap) {
  // 说明任务队列为空
  if (heap.length === 0) return null;

  // 首先取出堆顶的任务
  const first = heap[0];
  // 接下来再取出堆底的最后一个任务
  const last = heap.pop();

  if (first !== last) {
    // 进入此 if，说明第一个任务不等于最后一个任务
    // 也就是任务队列里面的任务数大于 1
    heap[0] = last; // 将最后一个任务放到堆顶
    // 但是该任务可能不在合适的位置，因此需要进行下沉操作
    siftDown(heap, last, 0);
  }

  // 如果没有进入上面的 if，说明当前队列里面只有一个任务
  return first;
}

/**
 * 上浮操作
 * @param {*} heap 任务队列
 * @param {*} heap 当前推入的任务
 * @param {*} i 任务队列的长度
 */
function siftUp(heap, node, i) {
  let index = i; // index 保存也就是任务队列的长度
  while (index > 0) {
    // 这里涉及到了二进制里面的移位操作的知识，每右移一位，相当于除以 2，每左移一位，相当于乘以 2
    // 这里之所以要除以 2，是因为我们要获取到父节点的索引，要找上一层的节点
    const parentIndex = (index - 1) >> 1; // 获取父节点的索引
    // 通过父节点的索引，就可以获取到父节点的任务
    const parent = heap[parentIndex];
    // 接下来两者之间进行一个比较
    if (compare(parent, node) > 0) {
      // 如果父节点的过期时间大于子节点的过期时间，说明子节点的过期时间更小
      // 子节点的过期时间更紧急，那么就需要将子节点上浮
      // 那么就需要交换父节点和子节点的位置
      heap[parentIndex] = node;
      heap[index] = parent;
      // 接下来需要将 index 更新为父节点的索引
      index = parentIndex;
    } else {
      return;
    }
  }
}

/**
 * 下沉操作
 * @param {*} heap 任务队列
 * @param {*} node 之前的最后一个任务，但是现在已经被放置到堆顶了
 * @param {*} i 该任务的下标，也就是 0
 */
function siftDown(heap, node, i) {
  // 记录任务的下标，也是从 0 开始的
  let index = i;
  // 当前任务队列的长度
  let len = heap.length;
  // 获取当前任务队列一半的下标
  const halfLen = len >> 1;

  // 因为我们是使用的数组来实现的二叉树，那么首先第一个条件就是数组不能越界
  // 因为是二叉树，我们要么比较左树，要么比较右树
  while (index < halfLen) {
    // 得到左边子节点的索引
    const leftIndex = index * 2 + 1; // 得到左边节点的索引
    const rightIndex = index * 2 + 2; // 得到右边节点的索引
    // 左右的索引有了之后，我们就可以得到左右节点对应的任务
    const left = heap[leftIndex];
    const right = heap[rightIndex];

    if (compare(left, node) < 0) {
      // 如果进入此分支，说明左节点的过期时间更紧急
      // 接下来还需要进行左右节点的比较，谁小谁才能上去
      // 为什么要做 rightIndex < len 的判断呢？
      // 因为右边的树可能存在节点缺失的情况，所以需要判断一下索引值是否超出了数组的长度，防止数组越界
      if (rightIndex < len && compare(right, left) < 0) {
        // 如果进入此分支，说明右边节点的过期时间更紧急
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        // 如果进入此分支，说明左边节点的过期时间更紧急
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (compare(right, node) < 0 && rightIndex < len) {
      // 如果进入此分支，说明右节点的过期时间更紧急
      // 但是这里还需要判断一下，右节点的索引不能越界
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // 当前的任务就是最小的
      return;
    }
  }
}

/**
 * 比较函数，接收两个任务
 * @param {*} a
 * @param {*} b
 */
function compare(a, b) {
  // 每个任务都有一个 sortIndex 属性，表示该任务的过期时间
  // 假设父节点的过期时间为 10，子节点的过期时间为 1
  const diff = a.sortIndex - b.sortIndex;
  // 如果通过过期时间比较不出来先后，那么就根据 id 来比较
  return diff !== 0 ? diff : a.id - b.id;
}
