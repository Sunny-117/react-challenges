import * as usersAction from "../action/usersAction";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4, name: "用户1", age: 11 },
  { id: uuidv4, name: "用户2", age: 12 },
];

export default (state = initialState, { type, payload }) => {
  // 不能改变原来的状态
  switch (type) {
    case usersAction.ADDUSER:
      return [...state, payload]; //对象混合，原来的展开，用新的把他覆盖
    case usersAction.DELETEUSER:
      return state.filter((it) => it.id !== payload);
    case usersAction.UPDATEUSER:
      return state.map(
        (it) => (it.id === payload.id ? { ...it, ...payload } : it)
        // { ...it, ...payload }先把之前的展开，在吧payload展开
      );
    default:
      return state;
  }
};
