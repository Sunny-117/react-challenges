// @ts-nocheck
import { Component } from "react";
import { withRouter } from "react-router-dom";
class RouteGuard extends Component {
  componentDidMount() {

    // this.props.history.listen((location, action) => {
    //  console.log("地址变化了");
    //   if (this.props.onChange) {
    //     //日志记录
    //     this.props.onChange(location, action);
    //   }
    // });
    // 记录之前的页面:运行时间点：发生在即将跳转到新页面时
    // this.props.history.listen((location, action) => {
    //   if (this.props.onChange) {
    //     const prevLocation = this.props.location; // 运行时间点：发生在即将跳转到新页面时
    //     this.props.onChange(prevLocation, location, action);
    //   }
    // });
    // 关于listen函数的返回结果
    this.unListen = this.props.history.listen((location, action) => {
      if (this.props.onChange) {
        const prevLocation = this.props.location; // 运行时间点：发生在即将跳转到新页面时
        this.props.onChange(prevLocation, location, action, this.unListen);
        // 情景2：外部用户决定是否取消
      }
    });
  }

  // componentWillUnmount() {
  //   // 情景1：组件卸载时候取消监听
  //   this.unListen();
  // }
  render() {
    return this.props.children;
  }
}

export default withRouter(RouteGuard);
