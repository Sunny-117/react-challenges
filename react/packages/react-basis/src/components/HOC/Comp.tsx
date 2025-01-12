import React, { Component } from "react";

export class A extends Component {
    // 不在关注根该组件不相干的事情
    render() {
        return (
            <h1>A:{this.props.a}</h1>
            // 属性默认给了外层高阶组件。如果想给里面的组件，只需要把属性给高阶组件的返回组件就可
        );
    }
}

export class B extends Component {
    // 不在关注根该组件不相干的事情
    render() {
        return <h1>B:{this.props.b}</h1>;
    }
}
