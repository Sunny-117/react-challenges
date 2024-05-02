import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reducer from "@handle-react/old-redux/src/redux/reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
} from "@handle-react/old-redux/src/redux/action/usersAction";
import logger, { createLogger } from "redux-logger";
// const logger = createLogger({
//   // 配置
//   collapsed: true, //是都被折叠,
//   duration: true,
// });
const store = createStore(reducer, applyMiddleware(logger)); //如果有很多中间件，logger应该放在最后一个

const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction,
};

const actions = bindActionCreators(actionCreators, store.dispatch);

actions.addUser({ id: 3, name: "abc", age: 111 });
actions.deleteUser(3);
