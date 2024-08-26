import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    name: "",
  };
  render() {
    console.log("AddTask Render"); //第二次根本每必要渲染，因为自己没变
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            this.props.onAdd &&
              this.props.onAdd({
                //有这个事件就调用这个事件
                name: this.state.name,
                isFinish: false,
              });
            this.setState({
              name: "",
            });
          }}
        >
          添加任务
        </button>
        {/* 添加任务后，Task渲染了11次 */}
      </div>
    );
  }
}
