// action创建函数

import * as actionTypes from "./action-type";
/**
 * 得到一个用于增加数字操作的action
 */
export function getIncreaseAction() {
  return {
    type: actionTypes.INCREASE,
  };
}

export function getDecreaseAction() {
  return {
    type: actionTypes.DECREASE,
  };
}

export function getSetAction(newNumber: number) {
  return {
    type: actionTypes.SET,
    payload: newNumber,
  };
}
