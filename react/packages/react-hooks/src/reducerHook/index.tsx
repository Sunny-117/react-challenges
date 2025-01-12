import React from "react";
import useReducer from "./useReducer";

/**
 * 该函数，根据当前的数据，已经action，生成一个新的数据
 * @param {*} state
 * @param {*} action
 */
function reducer(state: any, action: any) {
    switch (action.type) {
        case "increase":
            return state + 1;
        case "decrease":
            if (state === 0) {
                return 0;
            }
            return state - 1;
        default:
            return state;
    }
}

export default function ReducerApp() {
    const [n, dispatch] = useReducer(reducer, 10, (args: any) => {
        console.log(args);
        return 100; //返回结果作为初始值
    });
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: "decrease" });
                }}
            >
                -
            </button>
            <span>{n}</span>
            <button
                onClick={() => {
                    dispatch({ type: "increase" });
                }}
            >
                +
            </button>
        </div>
    );
}
