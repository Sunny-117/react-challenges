import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
export default function TransitionApp() {
  const [tasksList, setTasksList] = useState([
    { id: uuidv4(), name: "任务1" },
    { id: uuidv4(), name: "任务2" },
  ]);
  return (
    <div>
      {/* component：默认自动套一层div，可以更改 */}
      <TransitionGroup appear component="ul" className="abc">
        {tasksList.map((t) => (
          <CSSTransition timeout={2000} key={t.id}>
            <li>
              {t.name}{" "}
              <button
                onClick={() => {
                  var newTasks = tasksList.filter((it) => it.id !== t.id);
                  setTasksList(newTasks);
                }}
              >
                删除
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button
        onClick={() => {
          var name = window.prompt("请输入任务名称");
          setTasksList([...tasksList, { id: uuidv4(), name }]);
        }}
      >
        添加一个任务
      </button>
    </div>
  );
}
