// @ts-nocheck
import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginInfo from "./loginInfo";

// 自定义路由
export default function ProtectedRoute({
  component: Component, // 解构出来换个名字
  children,
  render,
  ...rest // 剩下的属性
}) {
  return (
    <Route
      {...rest} // 不需要children component render属性, 我来自己写render
      render={(values) => {
        if (loginInfo.isLogin) {
          //可以正常展示页面
          return <Component />;
        } else {
          // 没有授权要跳转
          // return <Redirect to={{
          //     pathname: "/login",
          //     search: "?returnurl=" + values.location.pathname
          // }} />
          // 方法2
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: values.location.pathname,
              }}
            />
          );
        }
      }}
    />
  );
}
