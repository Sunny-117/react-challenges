import loginUserReducer from "./loginUser";
import usersReducer from "./users";
import { combineReducers } from "redux"; // 内置提供了合并

// 由于在大中型项目中，操作比较复杂，数据结构也比较复杂，因此，需要对reducer进行细分。

// export default (state = {}, action) => {
//     const newState = {
//         loginUser: loginUserReducer(state.loginUser, action),
//         users: usersReducer(state.users, action)
//     };
//     return newState;
// }
// 等效于：
export default combineReducers({
  // 对比上面代码，所以返回一个函数
  loginUser: loginUserReducer,
  users: usersReducer,
});
