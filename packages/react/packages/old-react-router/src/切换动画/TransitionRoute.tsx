import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

export default function TransitionRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest}>
      {/* 因为用的是children，所以Route里面始终要渲染，children始终要渲染的，这样才好控制动画 */}
      {({ match }) => {
        //解构，会默认为对象，所以加上小括号
        return (
          // match匹配了就是进入阶段，没匹配就是推出阶段
          <CSSTransition
            in={match ? true : false}
            timeout={500}
            classNames={{
              enter: "animated fast fadeInRight",
              exit: "animated fast fadeOutLeft",
            }}
            mountOnEnter={true} //只有在进入之后会挂载
            unmountOnExit={true} //退出之后把内部组件卸载
          >
            <Component />
          </CSSTransition>
        );
      }}
    </Route>
  );
}
