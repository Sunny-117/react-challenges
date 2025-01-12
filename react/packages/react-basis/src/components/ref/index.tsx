import React, { Component } from 'react'

export default class Ref extends Component {
    handleClick = () => {
        this.txt.focus();
        this.setState({}); //强制刷新,使ref的值发生变动
    };
    // 函数什么时候调用呢？
    componentDidMount() {
        console.log("可以使用了", this.txt);
    }
    // 注意：如果把函数提出来，只会调用一次。此引用始终指向真实DOM对象,DOM对象不变,则只会调用一次
    // getRef = (el) => {
    //     console.log("函数被调用了", el)
    //     this.txt = el
    // }
    render() {
        return (
            <div>
                <input type="txt" name="" id="" ref={(el) => {
                    console.log('函数调用了', el)
                    this.txt = el
                }} />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
