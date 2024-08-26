import PropTypes from "prop-types";
// import React from "./lib/react/React";
import { useState, useReducer, useEffect } from "./lib/react/ReactHooks";

function App({ id }) {
  // 定义一个状态 count，以及修改状态的方法 setCount
  const [count1, setCount1] = useState(0);

  const [count2, setCount2] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    console.log("执行副作用方法1");
    // 清理函数，会在下一次执行副作用函数之前执行
    return function () {
      console.log("执行了清理方法1");
    };
  }, [count1]);

  useEffect(() => {
    console.log("执行副作用方法2");
    // 清理函数，会在下一次执行副作用函数之前执行
    return function () {
      console.log("执行了清理方法2");
    };
  }, [count2]);

  return (
    <div className="container" id={id}>
      <div className="one">
        <div className="two">
          <p>1</p>
          <p>2</p>
        </div>
        <div className="three">
          <p>3</p>
          <p>4</p>
        </div>
      </div>
      <p>this is a tes1</p>
      <div>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
        <span>
          <span>状态值1：</span>
          <span>{count1}</span>
        </span>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
        <span>
          <span>状态值2：</span>
          <span>{count2}</span>
        </span>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="container" id={this.props.id}>
//         <div className="one">
//           <div className="two">
//             <p>1111</p>
//             <p>2222</p>
//           </div>
//           <div className="three">
//             <p>3333</p>
//             <p>4444</p>
//           </div>
//         </div>
//         <p>this is a test!!!</p>
//       </div>
//     );
//   }
// }

App.propTypes = {
  id: PropTypes.string.isRequired,
};

export default App;
