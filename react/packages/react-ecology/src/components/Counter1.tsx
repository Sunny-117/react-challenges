import React from 'react'
import store from "../store"
import { asyncDecrease, asyncIncrease, increase, decrease } from "../store/action/counter"

// 如果没有redux-react，自己手写

//展示组件
function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}> 异步减 </button>
                <button onClick={props.onDecrease}> 减 </button>
                <button onClick={props.onIncrease}> 加 </button>
                <button onClick={props.onAsyncIncrease}> 异步加 </button>
            </p>
        </div>
    )
}

/**
 * 将整个仓库的状态，映射到当前需要的数据
 * @param {*} state 
 */
function mapStateToProps(state) {
    return {
        number: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAsyncDecrease() {
            dispatch(asyncDecrease())
        },
        onDecrease() {
            dispatch(decrease())
        },
        onIncrease() {
            dispatch(increase())
        },
        onAsyncIncrease() {
            dispatch(asyncIncrease())
        },
    }
}

//容器组件：以下，就是react-redux的connect做的事情
export default class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        // store.getState() 仓库里面的全部数据，我只需要number
        this.state = mapStateToProps(store.getState());
        /**
         * 当仓库数据变化了，重新改变状态
         */
        store.subscribe(() => {
            this.setState(mapStateToProps(store.getState()))
        })
    }
    render() {
        const eventHandlers = mapDispatchToProps(store.dispatch)// 要传递的事件，写一个函数：映射...到属性：mapDispatchToProps
        return <Counter {...this.state} {...eventHandlers} />
    }
}