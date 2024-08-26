import { take } from "redux-saga/effects"; // 导入指令
import { actionTypes } from "../action/counter";

/**
 * saga任务
 */
export default function* () {
  while (true) {
    // 因为一旦saga任务完成（生成器函数运行完成），则saga中间件一定结束
    // 所以要持续监听，永远不会完成
    const action = yield take(actionTypes.asyncIncrease); //阻塞，先不调用next
    console.log("发生了异步的increase", action);
  }
}
