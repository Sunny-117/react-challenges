// 使用Hook的时候，如果没有严格按照Hook的规则进行(这里没有依赖func,duration)，eslint的一个插件（eslint-plugin-react-hooks）会报出警告
/* eslint "react-hooks/exhaustive-deps": "off" */
import { useEffect } from "react";

/**
 * 组件首次渲染后，启动一个Interval计时器
 * 组件卸载后，清除该计时器
 */
export default (func: TimerHandler, duration: number | undefined) => {
  useEffect(() => {
    const timer = setInterval(func, duration);
    return () => {
      clearInterval(timer);
    };
  }, []);
};
