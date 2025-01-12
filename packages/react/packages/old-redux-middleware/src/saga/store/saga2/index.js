import { all } from "redux-saga/effects"
import counterTask from "./counterTask"
import studentTask from "./studentTask3"
/**
* saga任务
*/
export default function* () {
    yield all([counterTask(), studentTask()])
    console.log("saga 完成")
}
