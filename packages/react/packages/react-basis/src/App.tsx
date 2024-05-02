import { NavLink } from "react-router-dom";
import RouterConfig from "./router/router"
// import { Loading } from '@handle-react/components'
import './main.css'
import { useState } from "react";

function App() {
  const [navLinkList] = useState([
    { to: "/", title: "主页" },
    { to: "/ChangePic", title: "图片切换" },
    { to: "/student", title: "学生列表" },
    { to: "/ClassComponentSetState ", title: "class组件的stateState" },
    { to: "/Ball ", title: "自由移动小球" },
    { to: "/Event ", title: "事件" },
    { to: "/Pager ", title: "分⻚组件" },
    { to: "/DeepSetState", title: "深入认识setState" },
    { to: "/Lifecycle", title: "Lifecycle" },
    { to: "/ModalTest", title: "ModalTest" },
    { to: "/ThreeLayoutTest", title: "ThreeLayoutTest" },
    { to: "/Form", title: "Form" },
    { to: "/EncapsulationForm", title: "EncapsulationForm" },
    { to: "/hoc", title: "HOC" },
    { to: "/ref", title: "ref" },
    { to: '/banner', title: 'banner' },
    { to: "/Content", title: 'Content' },
    { to: "/ContextForm", title: 'ContextForm' },
    { to: "/PureComponent", title: 'PureComponent' },
    { to: '/renderProps', title: 'renderProps' },
    { to: '/ErrorBoundaries', title: 'ErrorBoundaries' },
  ])
  return (
    <div>
      <div style={{
        border: '1px solid',
        display: 'flex'
      }}>
        {navLinkList.map(item => {
          return <div
            key={item.title}
            style={{
              border: '1px solid',
              width: '200px',
            }}>
            <NavLink to={item.to} className='mx'>{item.title}</NavLink>
          </div>
        })}
      </div>
      <div className="content">
        <RouterConfig />
      </div>
    </div>
  )
}

export default App;
