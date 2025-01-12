import loginUser from "./loginUser";
import users from "./users";
import { combineReducers } from "redux";

// export default (state = {}, action) => {
//     const newState = {
//         loginUser: loginUser(state.loginUser, action),
//         users: users(state.users, action)
//     };
//     return newState;
// }

export default combineReducers({
  // 导出合并之后的
  loginUser,
  users,
});
