import React from 'react'

export default function App() {
  return (
    <div>
      <button onClick={(e) => {
        console.log(e)// 合成事件
        console.log('button 被点击了')//2
      }}>点击</button>
    </div>
  )
}
// 因为事件冒泡，document身上的事件最后触发