import { takeEvery, delay, put } from "redux-saga/effects";
import { actionTypes, increase, decrease } from "../action/counter";

function* asyncIncrease() {
  // 里面不能使用setTimeout，saga控制不了，没法使用指令
  yield delay(2000);
  yield put(increase()); //触发一个新的action：增加
}
function* asyncDecrease() {
  yield delay(2000);
  yield put(decrease());
}
export default function* () {
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("正在监听asyncIncrease、asyncDecrease");
}
