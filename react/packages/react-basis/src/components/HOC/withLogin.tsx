import React from "react";
/**
 * 如果用户登录，则返回组件。不登录不返回
 * @param {*} Comp
 * @returns
 */
export default function withLogin(Comp) {
  return function LoginWrapper(props) {
    if (props.isLogin) {
      return <Comp {...props} />;
    }
    return null;
  };
}
