import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

ReactDOM.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
), document.getElementById('root'));

document.querySelector("#root").onclick = (e) => {
  console.log('div 为 root 的事件触发了')//1
  // e.stopPropagation()
}