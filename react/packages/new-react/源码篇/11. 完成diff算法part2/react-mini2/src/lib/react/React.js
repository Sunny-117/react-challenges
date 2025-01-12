function Component(props) {
  this.props = props;
}
// 由于 Component 本质上是一个函数，如果直接这么写的话，最终会进入到函数组件的处理逻辑
// 因此我们添加一个标识，来标识这是一个类组件
Component.prototype.isReactComponent = true;

const React = {
  Component,
};

export default React;
