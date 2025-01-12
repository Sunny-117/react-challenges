import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
let prevLocation, location, action, unBlock;
class _GuardHelper extends Component {
  // 主要为了获取上下文
  componentDidMount() {
    // 添加阻塞
    // this.props.history.block("");
    // 可以写成函数
    unBlock = this.props.history.block((newLocation, ac) => {
      // console.log(this.props.location); //之前的location
      // console.log(this.location); // 现在的location
      // console.log(action);
      // 保存到全局变量里面
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;
      return "";
    });
  }
  componentWillUnmount() {
    unBlock(); //取消阻塞
  }

  render() {
    return null;
  }
}
const GuardHelper = withRouter(_GuardHelper);
class RouteGuard extends Component {
  handleConfirm = (msg, commit) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        location,
        action,
        commit,
        unBlock
      );
    } else {
      //没有阻塞就直接提交
      commit(true);
    }
  };
  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GuardHelper />
        {this.props.children}
      </Router>
    );
  }
}

export default RouteGuard;
