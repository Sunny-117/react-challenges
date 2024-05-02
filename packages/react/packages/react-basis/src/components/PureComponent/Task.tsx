import { ObjectEqual } from "@handle-react/shared";
import React, { Component } from "react";
import "./Task.css";
export default class Task extends Component {
  static propTypes = {
    // name: PropTypes.string.isRequired, //任务名称
    // isFinish: PropTypes.bool.isRequired, //任务是否完成
  };
  // 利用生命周期优化
  /* shouldComponentUpdate(nextProps, nextState) {
        if (相等(this.props, nextProps) && (相等(this.state, nextState))) {
            return false;
        }
        return true;
    } */
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("Task是否要重新渲染");
    // 如果一个组件的属性和状态，都没有发生变化，该组件的重新渲染是没有必要的
    if (
      ObjectEqual(this.props, nextProps) &&
      ObjectEqual(this.state, nextState)
    ) {
      return false;
    }
    return true;
  }

  render() {
    console.log("Task Render"); //第一次渲染长度为0，渲染TaskList的时候得不到任何Task
    // 第二次10个都相当于第一次渲染 10次
    return (
      <div>
        <li className={this.props.isFinish ? "finish" : ""}>
          {this.props.name}
        </li>
      </div>
    );
  }
}
