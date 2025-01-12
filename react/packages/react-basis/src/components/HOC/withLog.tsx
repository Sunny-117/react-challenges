import React from "react";

/**
 * 高阶组件
 * @param {*} comp 传入组件
 * @returns
 */
export default function withLog(Comp, str) {
  // 2. 不要在高阶组件内部更改传入的组件Comp（防止混乱）
  // 也可以添加第二个参数str
  return class LogWrapper extends React.Component {
    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了!!${Date.now()}`);
    }
    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了!!${Date.now()}`);
    }

    render() {
      return (
        <>
          <h1>{str}</h1>
          <Comp {...this.props} />
          {/* 属性的传递可以用这种方法 */}
        </>
      );
    }
  };
}
