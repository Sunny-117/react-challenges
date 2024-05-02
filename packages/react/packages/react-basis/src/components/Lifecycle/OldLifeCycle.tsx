import { Component } from "react";


export class OldLifeCycle extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            n: 0,
        };
        console.log("constructor", "一个新的组件诞生了");
    }
    componentWillMount() {
        console.log("componentWillMount：", "组件即将被挂载");
    }
    componentDidMount() {
        console.log("componentDidMount", "挂载完成");
    }
    componentWillReceiveProps(nextProps: any) {
        console.log(
            "componentWillReceiveProps",
            "接收到新的属性值",
            this.props,
            nextProps
        );
    }
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log(
            "shouldComponentUpdate",
            "是否应该重新渲染",
            this.props,
            nextProps,
            this.state,
            nextState
        );
        //新属性 新状态
        // 性能优化：
        if (this.props.n === nextProps.n && this.state.n === nextState.n) {
            //属性一样，状态也一样
            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps: any, nextState: any) {
        console.log("componentWillUpdate", "组件即将重新渲染");
    }
    componentDidUpdate(prevProps: any, prevState: any) {
        console.log("componentDidUpdate", "组件已经完全渲染", prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount", "组件被销毁");
    }
    render() {
        console.log("render", "渲染，返回的React元素会被挂载到虚拟DOM树上");
        return (
            <div>
                <h3>旧版声明周期</h3>
                <h4>属性n:{this.props.n}</h4>
                <h5>状态n：{this.state.n}</h5>
                <button
                    onClick={() => {
                        this.setState({
                            n: this.state.n + 1,
                        });
                    }}
                >
                    状态n+1
                </button>
            </div>
        );
    }
}