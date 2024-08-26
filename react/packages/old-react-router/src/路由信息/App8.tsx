import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

const AWrapper = withRouter(A);

// 非路由组件获取路由信息
// 高阶组件内部实现：
// function withRouter(Comp) {
//     return function routerWrapper(props) {
//         //获取上下文中的信息
//         return <Comp {...props} history={上下文中的history} />
//     }
// }

function News(props) {
  return (
    <div>
      <h1>新闻列表</h1>
      <AWrapper />
      {/* 这个组件放在news里面，不能拿到props路由信息 */}
    </div>
  );
}

function A(props) {
  console.log(props);
  return (
    <button
      onClick={() => {
        props.history.push("/");
      }}
    >
      点击返回
    </button>
  );
}

function Index() {
  return <h1>首页</h1>;
}

function NotFound() {
  return <h1>找不到页面</h1>;
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news" component={News} />
        <Route path="/" exact component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
