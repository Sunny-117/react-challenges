import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reducer from "../reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
} from "../action/usersAction";

const logger1 = (store) => (next) => (action) => {
  console.log("中间件1");
  console.log("旧数据", store.getState());
  console.log("action", action);
  next(action);
  console.log("新数据", store.getState());
  console.log("");
};

const logger2 = (store) => (next) => (action) => {
  console.log("中间件2");
  console.log("旧数据", store.getState());
  console.log("action", action);
  next(action);
  console.log("新数据", store.getState());
  console.log("");
};

// /**
//  * 一个中间件函数
//  * @param {*} store
//  */
// function logger1(store) {// 第一次为了得到仓库
//     return function (next) {
// next:下一个中间件传过来的dispatch
//         //下面返回的函数，是最终要应用的dispatch
//         return function (action) {
//             console.log("中间件1")
//             console.log("旧数据", store.getState());
//             console.log("action", action);
//             next(action);
//             console.log("新数据", store.getState());
//             console.log("")
//         }
//     }
// }
// 洋葱模型
// function logger2(store) {
//     return function (next) {
//         //下面返回的函数，是最终要应用的dispatch
//         return function (action) {
//             console.log("中间件2")
//             console.log("旧数据", store.getState());
//             console.log("action", action);
//             next(action);
//             console.log("新数据", store.getState());
//             console.log("")
//         }
//     }
// }

//应用中间件，方式1：
// const store = createStore(reducer, applyMiddleware(logger1, logger2));

//方式2：
const store = applyMiddleware(logger1, logger2)(createStore)(reducer); //该函数用于记录创建仓库的方法，然后又返回一个函数

const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction,
};

const actions = bindActionCreators(actionCreators, store.dispatch);

actions.addUser({ id: 3, name: "abc", age: 111 });
actions.deleteUser(3);

// 注意：面试题
// store里面的dispatch是最终的dispatch
// next里面的dispatch是下一个中间件的dispatch;

// 为了保证调用的顺序是顺序调用，所以写的时候需要反着写


// 为什么如此嵌套？第一层是为了得到仓库...洋葱模型
// const store = applyMiddleware(logger1, logger2)(createStore)(reducer);
// 第一层函数固定有哪些中间件，第二层知道创建仓库的方法是什么，第三层知道创建仓库时传递的参数是啥——高阶函数