import PropTypes from "prop-types";
// import React from "./lib/react/React";
import { useState } from "./lib/react/ReactHooks";

function App({ id }) {
  // 定义一个状态 count，以及修改状态的方法 setCount
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
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
