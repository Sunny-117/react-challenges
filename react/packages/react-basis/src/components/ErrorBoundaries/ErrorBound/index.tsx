import React, { PureComponent } from "react";

export default class ErrorBound extends PureComponent {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error: any) {
    console.log("发生错误了", error);
    return {
      hasError: true,
    };
  }
  componentDidCatch(error: any, info: any) {
    console.log("记录错误信息");
  }
  render() {
    // setTimeout(() => {
    //     throw new Error("asfasdfasf");
    // }, 1000);
    if (this.state.hasError) {
      return <h1>出现错误了！</h1>;
    }
    //没有错误
    return this.props.children;
  }
}
