import React, { Component } from "react";
// 验证每一次调用setState是一个全新对象，对于一个全新对象，比较的时候引用不相同，认为
// 发生了变化
const ctx = React.createContext();
class ChildB extends React.Component {
  static contextType = ctx;

  shouldComponentUpdate(nextProps, nextState) {
    console.log("运行了优化");
    return false;
  }

  render() {
    console.log("childB render");
    return (
      <h1>
        a:{this.context.a}，b:{this.context.b}
      </h1>
    );
  }
}

export default class NewContext extends Component {
  datas = [
    {
      a: 0,
      b: "abc",
      changeA: (newA) => {
        this.setState({
          a: newA,
        });
      },
    },
  ];

  state = this.datas[0];
  render() {
    return (
      <ctx.Provider value={this.state}>
        <div>
          <ChildB />
          <button
            onClick={() => {
              // 每一次调用setState是一个全新对象
              this.setState({}, () => {
                this.datas.push(this.state);
                console.log(this.datas[0] === this.datas[1]);
              });
            }}
          >
            父组件的按钮，a加1
          </button>
        </div>
      </ctx.Provider>
    );
  }
}
