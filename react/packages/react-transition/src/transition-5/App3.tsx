import { useState } from 'react'
import FadeTransition from '../transition-4/components/FadeTransition'
import { TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
export default function TransitionApp() {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), name: "任务1" },
        { id: uuidv4(), name: "任务2" },
        { id: uuidv4(), name: "任务3" },
    ])
    return <div>
        <TransitionGroup component="ul">
            {tasks.map((t) => (
                <FadeTransition appear timeout={500} key={t.id}>
                    <li>
                        {t.name}
                        <button
                            onClick={() => {
                                const newTask = tasks.filter((it) => it.id !== t.id)
                                setTasks(newTask)
                            }}
                        >
                            删除
                        </button>
                    </li>
                </FadeTransition>
            ))}
        </TransitionGroup>
        <button
            onClick={() => {
                var name = window.prompt("请输入任务名称");
                setTasks([...tasks, { id: uuidv4(), name }]);
            }}
        >
            添加
        </button>
    </div>
}
