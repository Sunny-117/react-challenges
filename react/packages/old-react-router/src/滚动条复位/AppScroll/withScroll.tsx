import React from "react";
import reset from "./resetScroll";
export default function withScroll(Comp: any) {
  return class ScrollWrapper extends React.Component {
    componentDidMount() {
      //滚动条复原
      //   window.screenTo(0, 0);
      reset();
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
}
