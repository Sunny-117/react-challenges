import React, { Component } from "react";
import Task from "./Task";

export default class TaskList extends Component {
  static propTypes = {
    // tasks: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     //一个对象的数组
    //     name: PropTypes.string.isRequired,
    //     isFinish: PropTypes.bool.isRequired,
    //   })
    // ).isRequired,
  };
  render() {
    console.log("taskList Render"); //由于TaskContainer对他进行了渲染，所以会渲染一次。
    // 又因为父组件渲染了两次（数组长度0，数组长度10）所以他也渲染两次
    const ts = this.props.tasks.map((it, i) => (
      <Task
        // 这里导致Task重新渲染
        key={i}
        {...it}
      />
    ));
    return <ul>{ts}</ul>;
  }
}
