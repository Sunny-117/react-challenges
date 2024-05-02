import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



document.addEventListener("click", function (e) {
  e.stopImmediatePropagation(); //阻止剩余的事件处理程序运行
});

// document.addEventListener("click", function (e) {
//   console.log("真实DOM：document 被点击了");
// });
