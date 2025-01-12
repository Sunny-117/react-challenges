import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "../action/counter";

function* asyncIncrease() {
  console.log("触发了asyncIncrease");
}

function* asyncDecrease() {
  console.log("触发了asyncDecrease");
}

export default function* () {
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease); //第二个参数是一个生成器
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  // 监听多个
  console.log("正在监听asyncIncrease、asyncDecrease");
}
