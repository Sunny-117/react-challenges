import React, { Component } from "react";

export default class Page2 extends Component {
  state = {
    val: "",
  };

  handleBlock(value) {
    if (value) {
      //value有值就添加阻塞
      this.unBlock = this.props.history.block(
        "切换页面会导致文本无法保留，是否真的要切换？"
      );
    } else {
      if (this.unBlock) {
        // 没有值就接触阻塞
        this.unBlock();
      }
    }
  }

  componentWillUnmount() {
    if (this.unBlock) {
      this.unBlock();
    }
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.val}
          onChange={(e) => {
            this.setState({
              val: e.target.value,
            });
            this.handleBlock(e.target.value);
          }}
        ></textarea>
      </div>
    );
  }
}
