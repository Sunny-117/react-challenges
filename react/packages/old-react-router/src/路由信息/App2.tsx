import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props: any) {
  return (
    <div>
      <p>组件A</p>
      <button
        onClick={() => {
          props.history.replace("/b", "状态数据");
        }}
      >
        跳转到/b
      </button>
    </div>
  );
}

function B(props: any) {
  console.log(props.history.location.state)
  return (
    <div>
      <p>组件B</p>
      <p>获取状态数据：{props.history.location.state}</p>
      <button
        onClick={() => {
          props.history.replace("/a");
        }}
      >
        跳转到/a
      </button>
    </div>
  );
}

function NotFound() {
  return <h1>找不到页面</h1>;
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
