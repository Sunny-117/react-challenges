import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
export default class TaskContainer extends Component {
    state = {
        tasks: [],
    };
    componentDidMount() {
        const ts = [];
        for (let i = 0; i <= 10; i++) {
            ts.push({
                name: `任务${i}`,
                isFinish: Math.random() > 0.5,
            });
        }
        this.setState({
            tasks: ts,
        });
    }
    handleAdd = (newTask: any) => {
        // 不要直接push,因为地址会相同，没有创建新得数组。所以不要改动之前的
        this.setState({
            tasks: [...this.state.tasks, newTask],
        });
    };
    render() {
        console.log("TaskContainer Render,数组长度", this.state.tasks.length);
        // 运行两次render
        // 第一次加载运行一次；空数组
        // componentDidMount里面改变了状态 一次  数组长度
        return (
            <div>
                <AddTask
                    // onAdd={newTask => {//这里的写法会导致重新渲染，因为每次都不一样，引用值,尽量把函数提出去
                    //     this.setState({
                    //         tasks: [...this.state.tasks, newTask]
                    //     })
                    // }}
                    onAdd={this.handleAdd}
                />
                <TaskList tasks={this.state.tasks} />
            </div>
        );
    }
}
