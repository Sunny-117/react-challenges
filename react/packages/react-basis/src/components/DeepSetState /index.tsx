import React, { Component } from 'react'

export default class DeepSetState extends Component {
    state = {
        n: 0
    }
    // 这样理解setState 先改变状态 运行render
    handleClick1 = () => {
        this.setState({
            n: this.state.n + 1
        })
        console.log(this.state.n)// 还没有重新渲染，说明目前状态扔没有改变
        // 解决方案：使用第二个参数回调函数
    }

    handleClick2 = () => {
        // 解决方案：使用第二个参数回调函数
        this.setState({
            //这里面默认运行render
            n: this.state.n + 1
        }, () => {
            // 该回调运行在render之后
            console.log(this.state.n)
        })

    }

    handleClick3 = () => {
        // 状态异步更新，所以
        this.setState({
            n: this.state.n + 1,
        });
        this.setState({
            n: this.state.n + 1,
        });
        this.setState({
            n: this.state.n + 1,
        });
    }
    handleClick4 = () => {
        // 解决方案：回调
        this.setState({
            n: this.state.n + 1,
        }, () => {
            this.setState({
                n: this.state.n + 1,
            }, () => {
                this.setState({
                    n: this.state.n + 1,
                });
            });
        });
    }
    handleClick5 = () => {
        // setState第一个参数可以写一个函数
        this.setState((cur: any) => {
            // 参数prev表示当前状态
            // 该函数的返回结果会覆盖掉之前的状态
            // 该函数是异步执行的
            return {
                n: cur.n + 1,
            };
        });
        console.log(this.state.n); //和之前的问题一样，还是异步。只是书写成函数了
        // 解决方法一样，第二个参数写回调
    }
    handleClick6 = () => {
        // 可以优雅的解决+3问题
        this.setState((cur: any) => {
            return {
                n: cur.n + 1
            }
        }, () => {
            //所有状态全部更新完成，并且重新渲染后执行
            console.log("state更新完成", this.state.n); //3
        })
        // 这里的cur可以信任，他是上一个的返回状态
        this.setState((cur: any) => ({
            n: cur.n + 1,
        }));
        this.setState((cur: any) => ({
            n: cur.n + 1,
        }));
        // 实质会形成一个队列，依次执行
    }

    render() {
        console.log("render");//React会对（异步）的setState进行优化，将多次setState进行合并，只允许一次render
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={this.handleClick1}>1+</button>
                    <button onClick={this.handleClick2}>2+</button>
                    <button onClick={this.handleClick3}>3+</button>
                    <button onClick={this.handleClick4}>4+</button>
                    <button onClick={this.handleClick5}>5+</button>
                    <button onClick={this.handleClick6}>6+</button>
                </p>
            </div>
        )
    }
}

