import React from "react";
import { Route, Switch } from "react-router-dom";
import routeConfig from "./routeConfig";

/**
 * 根据一个路由配置数组，遍历该数组，得到一组Route组件
 * @param {*} routes
 */
function getRoutes(routes: any[], basePath: string) {
  if (!Array.isArray(routes)) {
    return null;
  }
  var rs = routes.map((rt, i) => {
    // 去除children属性
    const { children, name, path, component: Component, ...rest } = rt;
    let newPath = `${basePath}${path}`; //拼接完后可能有两个斜杠
    newPath = newPath.replace(/\/\//g, "/"); //变成一个斜杠
    return (
      <Route
        key={i}
        {...rest}
        path={newPath}
        render={(values) => {
          //render处理children
          return (
            <Component {...values}>{getRoutes(rt.children, newPath)}</Component>
          );
        }}
      />
    );
  });
  return <Switch>{rs}</Switch>;
  //   套上switch，就匹配了一个就不匹配了
}

/**
 * 使用Route组件，根据不同的路径，渲染顶级页面
 */
export default function RootRouter() {
  return (
    <>
      {/* 返回一组Route */}
      {getRoutes(routeConfig, "/")}
    </>
  );
}
