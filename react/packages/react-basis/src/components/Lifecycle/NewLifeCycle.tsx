import { Component } from "react";

export class NewLifeCycle extends Component {
    state = {
        n: this.props.number,
    };

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps");
    //     // return null;//不改变当前状态
    //     return { //用新的对象替换掉之前的状态
    //         n: props.n
    //     }
    // }

    getSnapshotBeforeUpdate = (prevProps: any, prevState: any) => {
        console.log("getSnapshotBeforeUpdate");
        return 132;
    };

    componentDidUpdate(prevProps: any, prevState: any, snap: any) {
        console.log("componentDidUpdate", snap); //132
    }

    render() {
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button
                        onClick={() => {
                            this.setState({
                                n: this.state.n + 1,
                            });
                        }}
                    >
                        +1
                    </button>
                </p>
            </div>
        );
    }
}