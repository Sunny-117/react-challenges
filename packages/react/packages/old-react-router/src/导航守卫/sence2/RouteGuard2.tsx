// @ts-nocheck
import { Component } from "react";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
class RouteGuard extends Component {
  componentDidMount() {
    this.unListen = this.props.history.listen((location, action) => {
      if (this.props.onChange) {
        const prevLocation = this.props.location; // 运行时间点：发生在即将跳转到新页面时
        this.props.onChange(prevLocation, location, action, this.unListen);
      }
    });
    // 设置阻塞(只能设置1个)
    this.props.history.block("真的要跳转页面吗？");
  }

  componentWillUnmount() {
    this.unListen();
  }
  render() {
    return <Router>{this.props.children}</Router>;
  }
}

export default withRouter(RouteGuard);
