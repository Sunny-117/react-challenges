import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
import studentTask from "./studentTask";
/**
 * saga任务
 */
export default function* () {
  // all必须所有生成器都结束yield才能结束
  console.log('开始saga')
  yield all([counterTask(), studentTask()]);
  console.log("saga 完成");
}
