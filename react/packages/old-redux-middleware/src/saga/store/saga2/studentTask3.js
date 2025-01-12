import {
  actionTypes,
  setIsLoading,
  setStudentsAndTotal,
} from "../action/student/searchResult";
import { takeEvery, put, call, select } from "redux-saga/effects";

/**
 * 回调模式的异步 没有返回值，所以只能用cps
 * @param {*} callback
 */
function mockStudents(condition, callback) {
  console.log("mockStudents", condition);
  setTimeout(() => {
    if (Math.random() > 0.5) {
      //nodejs风格
      callback(null, {
        // null表示没有错误
        cont: 78,
        datas: [
          { id: 1, name: "abc" },
          { id: 2, name: "bcd" },
        ],
      });
    } else {
      callback(new Error("出错了！！！1"), null);
    }
  }, 3000);
}

function* fetchStudents() {
  //设置为正在加载中
  yield put(setIsLoading(true));
  const condition = yield select((state) => state.students.condition);
  //使用call指令，按照当前仓库中的条件
  // call绑定this
  // 方法1const resp = yield call(["abc", searchStudents]);
  // 方法2 const resp = yield call({
  //   context:'abc',
  //   fn:searchStudents
  // })
  const resp = yield call(mockStudents, condition); // 会按照条件查询
  // apply:
  // const resp = yield apply(null,searchStudents,[])//this 调用的函数  具体往函数里面传递的参数
  yield put(setStudentsAndTotal(resp.datas, resp.cont));
  yield put(setIsLoading(false));
}

export default function* () {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听 fetchStudents");
}
