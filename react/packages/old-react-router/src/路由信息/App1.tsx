import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props: any) {
  return (
    <div>
      <p>组件A</p>
      <button
        onClick={() => {
          // 不能用window.history
          props.history.push("/b", "状态数据");
        }}
      >
        跳转到/b
      </button>
    </div>
  );
}

function B(props: any) {
  console.log(
    props.history.location,
    props.history,
    props.history.location === props.location
  ); // true
  return (
    <div>
      <p>组件B</p>
      <p>获取状态数据：{props.history.location.state}</p>
      <button
        onClick={() => {
          props.history.push("/a");
          // props.history.push("/a", "状态数据");//跳转带的状态数据，如果直接访问的话就不能访问到状态数据了
          // props.history.push("https://www.baidu.com");只能无刷新跳转，只能本站，这种不行
          // 想跳转别的站的话，就window.location.href=""
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
