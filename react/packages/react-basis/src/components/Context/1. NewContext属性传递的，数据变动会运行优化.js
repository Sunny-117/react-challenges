import React, { Component } from "react";

const ctx = React.createContext();
class ChildB extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("运行了优化"); //绕过了这个函数---强制更新，不允许此函数
    return false;
  }
  render() {
    console.log("childB render");
    return (
      <h1>
        a:{this.props.a}，b:{this.props.b}
      </h1>
    );
  }
}

export default class NewContext extends Component {
  state = {
    a: 0,
    b: "abc",
    changeA: (newA) => {
      this.setState({
        a: newA,
      });
    },
  };

  render() {
    return (
      <div>
        <ChildB {...this.state} />
        <button
          onClick={() => {
            this.setState({
              a: this.state.a + 1,
            });
          }}
        >
          父组件的按钮，a加1
        </button>
      </div>
    );
  }
}
