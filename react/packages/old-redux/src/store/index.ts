import './middleware/index2.js'
import { createStore } from "redux";
import reducer from "./reducer";
import {
    createAddUserAction,
    createDeleteUserAction,
} from "./action/usersAction";

const store = createStore(reducer);

console.log(store);
// 可以注册多个监听器
const unListen = store.subscribe(() => {
    // console.log('状态改变了')
    console.log(store.getState());
});

store.dispatch(
    createAddUserAction({
        id: 3,
        name: "abc",
        age: 10,
    })
);

unListen(); //取消监听

store.dispatch(createDeleteUserAction(3));
