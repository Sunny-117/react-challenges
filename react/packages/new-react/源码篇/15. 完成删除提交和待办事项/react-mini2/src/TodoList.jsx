import "./TodoList.css";
import { useState } from "./lib/react/ReactHooks";

function TodoList() {
  // 用于绑定输入框的状态，让输入框成为一个受控组件
  const [item, setItem] = useState("");
  // 待办事项的初始化列表
  const [list, setList] = useState(["吃饭", "学习"]);

  // 添加按钮的点击事件
  function addBtnHandle() {
    // 1. 获取输入框的值
    // 2. 将输入框的值添加到列表中
    // 3. 清空输入框的值
    setList([...list, item]);
    setItem("");
  }

  // 删除某一条待办事项
  function deleteItem(index) {
    // 1. 获取待删除的索引
    // 2. 根据索引删除对应的元素
    // 3. 重新渲染列表
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div className="container">
      <h1>待办事项</h1>

      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          placeholder="请输入待办事项"
          className="input"
        />
        <button className="addBtn" onClick={addBtnHandle}>
          添加
        </button>
      </div>

      <div>
        {list.map((item, index) => {
          return (
            <div
              className="item"
              key={index}
              onClick={(e) => deleteItem(index, e)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
