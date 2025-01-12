import React, { Component, createContext, ReactNode } from "react";


const ctx = createContext(1);

class ChildB extends React.Component {
    static contextType = ctx;

    shouldComponentUpdate(nextProps: any, nextState: any) {
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

export default class Content extends Component {
    state = {
        //套一层
        ctx: {
            a: 0,
            b: "abc",
            changeA: (newA: any) => {
                this.setState({
                    a: newA,
                });
            },
        },
    };

    render() {
        return (
            <ctx.Provider value={this.state.ctx}>
                {/* state变化了，但是ctx地址不变，会走一个正常的生命周期，运行了优化，不会强制更新了 */}
                {/* 核心：value没变，两个地址相同 */}
                实现了不变的时候
                <div>
                    <ChildB />

                    <button
                        onClick={() => {
                            this.setState({});
                        }}
                    >
                        父组件的按钮，a加1
                    </button>
                </div>
            </ctx.Provider>
        );
    }
}

