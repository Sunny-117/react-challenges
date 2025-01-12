import { fork, take, delay, put, cancel, cancelled } from "redux-saga/effects";
import { actionTypes, increase } from "../action/counter";

/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
  while (true) {
    yield take(actionTypes.autoIncrease); //只监听autoIncrease
    // 开启新任务
    const task = yield fork(function* () {
      try {
        while (true) {
          //死循环不断增加，所以添加新的增加任务无效
          yield delay(2000);
          yield put(increase());
        }
      } finally {
        //无论如何都会执行
        if (yield cancelled()) {
          console.log("自动增加任务被取消掉了！！！");
        }
      }
    });
    // 监听完autoIncrease之后，就不在监听他了，转而监听stopAutoIncrease。所以反复调用autoIncentive没用了
    yield take(actionTypes.stopAutoIncrease); //转而监听stopAutoIncrease
    yield cancel(task);
  }
}

export default function* () {
  yield fork(autoTask);
  console.log("正在监听autoIncrease");
}
