// @ts-nocheck
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouteGuard from "./RouteGuard1";
function Page1() {
  return <h1>Page1</h1>;
}
function Page2() {
  return <h1>Page2</h1>;
}
let count = 0;
export default function App1() {
  return (
    <Router
      // 默认值getUserConfirmation={(msg,callBack)=>callBack(window.confirm(msg))}
      getUserConfirmation={(msg, callBack) => {
        console.log(msg, "页面想要跳转？没门");
        callBack(true); //表示要跳转
      }}
    >
      <ul>
        <li>
          <Link to="/page1">页面1</Link>
        </li>
        <li>
          <Link to="/page2">页面2</Link>
        </li>
      </ul>
      <RouteGuard
        onChange={(prevLocation, location, action, unListen) => {
          count++;
          console.log(
            `日志${count}:从${prevLocation.pathname}进入页面${location.pathname}, 进入方式${action}`
          );
        }}
      >
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </RouteGuard>
    </Router>
  );
}
