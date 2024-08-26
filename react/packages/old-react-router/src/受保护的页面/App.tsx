// @ts-nocheck
import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Personal from "./Personal";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

export default function AppProtestComponent() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/login">登录页</Link>
          </li>
          <li>
            <Link to="/personal">个人中心</Link>
          </li>
        </ul>
        <div>
          <Switch>
            {/* 特殊的路径放前面 */}
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/personal" component={Personal} />
            {/* render和children的区别：render是匹配后才会运行，children无论是否匹配都会运行 */}
            {/* <Route path="/personal" render={ values => {
                            console.log(values)//上下文对象
                            return <h1>asdfdasdfa</h1>
                        }} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
