import React, { Component } from "react";
import "./index.css";

interface IProps {
  total: number;
  curIndex: number;
  onChange: (i: any) => void;
}
export default class SwitchDot extends Component<IProps> {

  render() {
    const spans = [];
    for (let i = 0; i < this.props.total; i++) {
      spans.push(
        <span
          key={i}
          className={i === this.props.curIndex ? "active" : ""}
          onClick={() => {
            this.props.onChange && this.props.onChange(i);
          }}
        ></span>
      );
    }
    return <div className="dots">{spans}</div>;
  }
}
