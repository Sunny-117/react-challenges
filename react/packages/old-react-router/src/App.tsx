import React from 'react'
import AppTransition from './切换动画/App'
import AppProtestComponent from './受保护的页面/App'
import AppVue from './实现vue路由模式/App'
import RouteGuardApp from './导航守卫/App'
import AppScroll from './滚动条复位/App'
import AppPrompt from './阻止跳转/App'

export default function App() {
    return (
        <div>
            {/* <AppProtestComponent /> */}
            {/* <AppVue /> */}
            {/* <RouteGuardApp /> */}
            {/* <AppTransition /> */}
            {/* <AppScroll /> */}
            <AppPrompt />
        </div>
    )
}
