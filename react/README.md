# 新版 *React* 课程大纲（第二版）

## 入门篇


### 第一章

- *React* 核心概念
  - *React* 基本介绍
  - *JSX* 基本介绍
  - 事件
  - *React* 中的组件
  - 组件状态传递
  - 表单
  - 生命周期
- *Hooks*
  - *Hooks* 介绍
  - *useState*
  - *useEffect*



### 第二章

- *React-Router-Dom v6*
  - *v6* 版本 *router* 的基本使用
  - 完成学生管理系统
- *React-redux*
  - *redux* 核心概念
  - *react-redux* 的基本使用
  - 完善学生管理系统



### 第三章

- *antd* 介绍
- *Coder Station* 项目介绍
- 完成 *Coder Station* 前台项目



### 第四章

- *dva* 的基本使用
- *antdpro* 介绍
- *Umi4* 基本介绍
- 完成 *Coder Station* 后台项目



## 就业篇



### 序章

- 就业篇整体介绍



### 第一章（进阶知识）

- 属性默认值和类型验证
- 高阶组件
- *Ref*
- *Context*
- *PureComnent*
- *RenderProps*
- *Portals*
- 错误边界



### 第二章（高级概念）

- 事件系统
- 深入 *props*
- 深入 *state*
- 渲染过程
- 渲染控制
- 渲染调优



### 第三章（架构篇）

- *React* 架构概述
- 调度与时间片
- 调和与 *fiber*
- *render* 全流程
- 更新流程
- *v18commit* 全流程
- *Hooks* 原理
- *Context* 原理



### 第四章（v18 新特性）

- *transition*
- *Suspense*
- 新的 *Hooks*
- 订阅外部数据源
- *concurrent* 下的 *state* 更新流程
- *Offscreen*



### 第五章（实践篇）

- 实现 *keepalive* 功能
- 处理海量数据
- ......



## 源码篇



### 序章

- 源码篇介绍



### 第一章

- *React* 源码



### 第二章

- *React-router* 源码



### 第三章

- *Redux* 源码
- *React-redux* 源码
- *dva* 源码



# *React* 基本介绍



本章主要包含以下内容：



- *React* 基本介绍
- *React* 特点
- 搭建开发环境



## *React* 基本介绍

*React* 起源于 *Facebook* 的内部项目，因为该公司对市场上所有 *JavaScript MVC* 框架都不满意，就决定自己写一套，用来架设 *Instagram* 的网站。

*React* 的实质其实是一个用于构建用户界面的 *JavaScript* 库。*React* 主要用于构建 *UI*。*React* 于 *2013* 年 *5* 月开源，由于拥有较高的性能，代码逻辑简单，越来越多的人已开始关注和使用它。

>*UI* = *fn(state)*

由于 *React* 的设计思想极其独特，属于革命性创新，性能出众，所以，越来越多的人开始关注和使用，认为它可能是将来 *Web* 开发的主流工具。

这个项目本身也越滚越大，从最早的 *UI* 引擎变成了一整套前后端通吃的 *Web App* 解决方案。



*React* 官网：*https://reactjs.org/*



*React* 从诞生到现在，一直在给我们带来各种各样的惊喜。甚至从 *2015* 年开始，每年都会举行 *React Conf* 大会，介绍 *React* 本年度所更新的新特性有哪些。

![image-20221027152326265](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-10-27-072327.png)

>*React Conf* 官网：*https://conf.reactjs.org/*
>
>*React Conf* 油管视频：*https://www.youtube.com/channel/UC1hOCRBN2mnXgN5reSoO3pQ*



下面介绍一下 *React* 几个重要版本的重大更新：

- *React 16* :出现了 *Fiber*，整个更新变的可中断、可分片、具有优先级
- *React 16.8*：推出了 *Hooks*，标志着从类组件正式转为函数组件
- *React 17*：过渡版本，没有添加任何面向开发人员的新功能。而主要侧重于**升级简化 *React* 本身**。
- *React 18*
  - *transition*
  - *Suspense*
  - 新的 *Hooks*
  - *Offscreen*
  - ......



## *React* 特点

在 *React* 官网中，罗列了 *3* 个特点：

- 声明式
- 组件化
- 一次学习，跨平台编写



除此之外，*React* 还具有如下的特点：

- 单向数据流
- 虚拟 *DOM*
- *Diff* 算法



## 搭建开发环境

虽然官方提供了通过 *CDN* 引入 *React* 的方式：*https://zh-hans.reactjs.org/docs/cdn-links.html*

但是实际开发中肯定是使用 *React* 的脚手架工具来搭建项目，*React* 官方提供了脚手架工具 *Create React App*：

*https://create-react-app.dev/*



快速开始：

```js
npx create-react-app my-app
cd my-app
npm start
```

# *JSX* 基础语法

本章主要包括以下内容：

- *JSX* 基础语法
- *createElement* 方法



## *JSX* 基础语法

在 *React* 中，使用 *JSX* 来描述页面。

```js
function App() {
  return (
    <div>Hello React~</div>
  );
}
```

你可以把类似于 *HTML* 的代码单独提取出来，例如：

```js
function App() {
  const ele = <div>Hello React~</div>
  return (
    ele
  );
}
```

注意这种类似于 *HTML* 的语法在 *React* 中称之为 *JSX*， 这是一种 *JavaScript* 的语法扩展。在 *React* 中推荐使用 *JSX* 来描述用户界面。*JSX* 乍看起来可能比较像是模版语言，但事实上它完全是在 *JavaScript* 内部实现的。



使用 *JSX* 来描述页面时，有如下的一些语法规则：

- 根元素只能有一个
- *JSX* 中使用 *JavaScript* 表达式。表达式写在花括号 *{}* 中
- 属性值指定为字符串字面量，或者在属性值中插入一个 *JavaScript* 表达式
- *style* 对应样式对象，*class* 要写作 *className*
- 注释需要写在花括号
- *JSX* 允许在模板中插入数组，数组会自动展开所有成员



## *createElement* 方法

*JSX* 是一种 *JavaScript* 的语法扩展，*Babel* 会把 *JSX* 转译成一个名为 *React.createElement* 函数调用。

```js
React.createElement(type, [props], [...children]);
```

参数说明：

- *type*：创建的 *React* 元素类型（可选的值有：标签名字符串、*React* 组件）。
- *props*（可选）：*React* 元素的属性。
- *children*（可选）：*React* 元素的子元素。

例如，下面两种代码的作用完全是相同的：

```js
const element1 = (
    <h1 className="greeting">
    	Hello, world!
    </h1>
);
const element2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
```

这些对象被称为 “*React* 元素”。它们描述了你希望在屏幕上看到的内容。

可以看出，*JSX* 的本质其实就是 *React.createElement* 方法的一种语法糖。

---

-*EOF*-

# 组件与事件绑定

本章包含以下内容：

- *React* 中的组件
- 为组件绑定事件
- *this* 的指向
- 向事件处理函数传参



## *React* 中的组件

在 *React* 中，可以使用类的方式来声明一个组件。

```js
class 类名 extends React.Component{
  render(){
    return (
    	// 一段 JSX
    )
  }
}
```



除了类组件，*React* 中还支持使用函数来创建组件，同样需要返回一段 *JSX*，来表示这个组件的 *UI* 是什么样的。

```js
function 组件名(){
  return (
  	// 一段 JSX
  );
}
```

**早期**的函数组件被称之为无状态组件，一般仅仅用来做纯 *UI* 的展示，里面不会有复杂的逻辑。

但是从 *React 16.8* 推出 *Hooks* 后，现在更多的是使用函数组件了。

这不仅仅是语法的改变，同时也代表着整个 *React* 编程思想的一种转变。



## 为组件绑定事件

在 *React* 中绑定事件的写法如下：

```react
<button onClick={activateLasers}>Activate Lasers</button>
```

在 *React* 中无法通过 *return false* 来阻止默认行为，所以只有使用 *e.preventDefault* 的方式来阻止默认行为。

```react
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

如果是类组件，那么事件处理函数写作一个类方法。

```react
class Welcome extends React.Component {
  // 事件处理函数
  eventHandler(e){
    window.alert('Hello');
    e.preventDefault();
  }
  
  render() {
    return (
      <a href="https://www.baidu.com/" onClick={this.eventHandler}>this is a test</a>
    );
  }
}
```

在 *React* 的事件处理函数中所传入的事件对象，是一个合成事件对象。

*React* 也提供了访问原生事件对象的方式。如下：

```react
eventHandler(e){
    e.nativeEvent // 原生事件对象
}
```



## *this* 的指向

由于 *JS* 中 *this* 的特殊性，事件处理函数中的 *this* 并不会指向当前的组件，这就需要我们自行对 *this* 进行指向的修正。

这里介绍 *3* 种解决方式：

- 将事件处理函数修改为箭头函数
- 将事件绑定修改为箭头函数
- 使用 *bind* 方法来强制绑定 *this* 的指向



## 向事件处理程序传参

另外还有一个非常重要的问题，就是如何向事件处理函数传递参数。

如果要传递参数，可以使用下面的两种方式来进行传参：

- 通过 *bind* 方法在绑定 *this* 指向时向事件处理函数进行传参
- 绑定事件时，通过书写箭头函数的形式来传参



# 组件状态与数据传递



本章主要包含以下知识点：

- 组件状态
- *props*
- *props* 验证
- 状态提升



## 组件状态

早期类组件被称之为有状态组件，就是因为在类组件中能够维护组件数据。

```js
class 类名 extends React.Component{
  constructor(){
    super();
    // 设置组件自身的数据状态
    this.state = {
      xxx : xxx
    }
  }
  render(){
    return (
    	// 通过 {this.state.xxx} 来获取状态数据
    )
  }
}

// 或者
class 类名 extends React.Component{
  state = {
      xxx : xxx
  }
  render(){
    return (
    	// 通过 {this.state.xxx} 来获取状态数据
    )
  }
}
```



不要直接去修改状态值，而是应该通过 *setState* 方法修改组件的 *state* 状态数据。

```js
this.setState({
  xxx: 新值
})
```

*setState*，它对状态的改变，**可能**是异步的。

> 如果改变状态的代码处于某个 *HTML* 元素的事件中，则其是异步的，否则是同步



如果在事件处理函数里面想拿到 *setState* 执行后的数据，可以提前使用一个变量来存储计算结果，或者使用 *setState* 的第二个参数，它是一个函数，这个函数会在 *state* 更新后被调用。



最佳实践：

1. 把所有的 *setState* 当作是异步的
2. 永远不要信任 *setState* 调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（*setState* 的第二个参数）
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（*setState* 的第一个函数）



*React* 会对异步的 *setState* 进行优化，将多次 *setState* 进行合并（将多次状态改变完成后，再统一对 *state* 进行改变，然后触发 *render*）



## *props*

和 *Vue* 一样，在 *React* 中组件会存在层级关系，那么自然会涉及到组件之间进行数据的传递。

如果是父组件向子组件传递数据，则使用 *props*。

如果是函数组件，*props* 作为函数的一个参数传入：

```react
function 组件名(props) {
  return (
    // 一段 JSX
    // 通过 props.xxx 获取传入的值
    <div>
      <p>姓名：{props.name}</p>
      <p>年龄：{props.age}</p>
      <p>性别：{props.gender}</p>   
    </div>
  );
}
```

如果是类组件，则需要在 *constructor* 中将 *props* 通过 *super* 传递给父类，然后通过 *this.props* 的方式来获取传入的值：

```react
class 组件名 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       // 一段 JSX
    	 // 通过 this.props.xxx 获取传入的值
        <div>
          <p>姓名：{this.props.name}</p>
          <p>年龄：{this.props.age}</p>
          <p>性别：{this.props.gender}</p>   
        </div>
     );
	}
}
```



通过 *props.children*，可以实现类似于 *Vue* 中插槽的功能，例如：

```react
class 组件B extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}
class 组件A extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <组件B>
        <p>Hello, React</p>
        <p>Hello, Redux</p>
        <p>Hello, Facebook</p>
        <p>Hello, Google</p>
      </组件B>
    );
  }
}
```



## *props* 验证

在 *Vue* 中，可以对传入的 *props* 设置默认值，以及验证 *props* 的有效性，在 *React* 中，针对 *props* 也可以做这些事。

通过 *defaultprops* 就可以对 *props* 设置默认值。

```react
function Greeting(props) {
  const { name, age, gender } = props;
  return (
    <div>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>性别：{gender}</p>   
    </div>
   );
}
// 设置默认的 props 值，当组件没有传值时会使用默认值
Greeting.defaultProps = {
  name : 'xiejie',
  age : 18,
  gender : 'male'
};
```

```react
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  // 设置默认的 defaultProps 属性值
  static defaultProps = {
    name : "xiejie",
    age : 18,
    gender : 'male' 
  }
  render() {
    return (
      <div>
        <p>姓名：{this.props.name}</p>
        <p>姓名：{this.props.age}</p>
        <p>姓名：{this.props.gender}</p>
      </div>
    );
  }
}
// 或者
Greeting.defaultProps = {
    name : "xiejie",
    age : 18,
    gender : 'male' 
}
```



关于 *props* 的类型检查，从 *React v15.5* 版本开始，移入到了 [`prop-types` 库](https://www.npmjs.com/package/prop-types) 。

```react
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

```react
import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
}

export default HelloWorldComponent
```



## 状态提升

在 *Vue* 中，父传子通过 *props*，子传父通过触发自定义事件。

在 *React* 中，如果子组件需要向父组件传递数据，同样是通过触发父组件传递给子组件的事件来进行传递。

这在官网中被称之为“状态提升”：*https://zh-hans.reactjs.org/docs/lifting-state-up.html*

汇率转换案例：

父组件

```react
import React from "react";
import Money from "./component/Money";

// 类组件
class App extends React.Component {
  state = {
    dollar: "",
    rmb: ""
  }

  transformToRMB = (value) => {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      this.setState({
        dollar: value,
        rmb: value === "" ? "" : (value * 7.3255).toFixed(2)
      })
    } else {
      alert("请输入数字");
    }
  }

  transformToDollar = (value) => {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      this.setState({
        dollar: value === "" ? "" : (value * 0.1365).toFixed(2),
        rmb: value
      })
    } else {
      alert("请输入数字");
    }
  }

  render() {
    return (
      <div>
        <Money text="美元" money={this.state.dollar} transform={this.transformToRMB} />
        <Money text="人民币" money={this.state.rmb} transform={this.transformToDollar} />
      </div>
    )
  }

}

export default App;
```

子组件

```react
import React from 'react';

function Money(props) {


    function handleChange(e){
       // 在子组件中，要做的事情很简单，将用户数据的值，传递给父组件
       // 让父组件来进行修改
       props.transform(e.target.value);
    }


    return (
        <fieldset>
            <legend>{props.text}</legend>
            <input type="text" value={props.money} onChange={handleChange}/>
        </fieldset>
    );
}

export default Money;
```



---

-*EOF*-



# 表单

本章主要包含以下内容：

- 受控组件
- 非受控组件



## 受控组件

无论是学习 *Vue*，还是 *React*，最重要的是要转换思想，这一步非常重要，往往也比较困难。

在以前 *jQuery* 时代，开发人员需要获取到 *DOM* 节点，然后进行操作。而在现代前端开发中，采用的是 *MVVM* 的模式，将视图和视图模型进行绑定，视图模型的改变，会自然的带来视图的改变。开发人员需要专注在视图模型上面。



因此，这里所谓的受控组件，本质上其实就是将表单中的控件和视图模型（状态）进行绑定，之后都是针对状态进行操作。

下面，我们来看一些具体的案例：

- 一个基本的受控组件

```react
import React from "react";

// 类组件
class App extends React.Component {
  state = {
    value : ""
  }

  handleChange = (e) => {
    this.setState({
      value : e.target.value
    })
  }

  clickHandle = () => {
    // 提交整个表单
    console.log(`你要提交的内容为：${this.state.value}`);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.clickHandle}>提交</button>
      </div>
    )
  }

}

export default App;
```

- 对用户输入的内容进行限制

```react
import React from "react";

// 类组件
class App extends React.Component {
  state = {
    value1 : "",
    value2 : ""
  }

  handleChange = (e) => {
   const name = e.target.name;
   switch(name){
    case "one": {
      // 用户输入的是第一个输入框
      // 只能输入大写
      this.setState({
        value1 : e.target.value.toUpperCase()
      })
      break;
    }
    case "two":{
      // 用户输入的是第二个输入框
      // 只能输入数字
      const newValue = e.target.value.split("").map(item=>{
        if(!isNaN(item)){
          return item
        }
      }).join("");
      this.setState({
        value2 : newValue
      })
      break;
    }
   }
  }

  clickHandle = () => {
    // 提交整个表单
    console.log(`你要提交的内容为：${this.state.value}`);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="one"
          value={this.state.value1}
          onChange={this.handleChange}
          placeholder="自动转为大写"
        />
        <input
          type="text"
          name="two"
          value={this.state.value2}
          onChange={this.handleChange}
          placeholder="只能输入数字"
        />
        <button onClick={this.clickHandle}>提交</button>
      </div>
    )
  }

}

export default App;
```

- 文本域

```react
import React from "react";

// 类组件
class App extends React.Component {
  state = {
   value : ""
  }

  handleChange = (e) => {
   this.setState({
    value : e.target.value
   })
  }

  clickHandle = () => {
    // 提交整个表单
    console.log(`你要提交的内容为：${this.state.value}`);
  }

  render() {
    return (
      <div>
        <textarea 
          cols="30" 
          rows="10" 
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.clickHandle}>提交</button>
      </div>
    )
  }

}

export default App;

```

- 多选框

```react
import React from "react";

// 类组件
class App extends React.Component {
  state = {
    checkBoxs: [
      { content: "html", checked: false },
      { content: "css", checked: false },
      { content: "js", checked: false },
      { content: "vue", checked: false },
      { content: "react", checked: false },
    ],
  }

  handleChange = (index) => {
    const arr = [...this.state.checkBoxs];
    arr[index].checked = !arr[index].checked;
    this.setState({
      checkBoxs: arr
    })
  }

  clickHandle = () => {
    // 提交整个表单
    console.log(this.state.checkBoxs);
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.checkBoxs.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={item.content}
                  checked={item.checked}
                  onChange={()=>this.handleChange(index)}
                />
                <span>{item.content}</span>
              </div>
            ))
          }
        </div>
        <button onClick={this.clickHandle}>提交</button>
      </div>
    )
  }

}

export default App;
```

- 下拉列表

```react
import React from "react";

// 类组件
class App extends React.Component {
  state = {
    value : "html"
  }

  handleChange = (e) => {
    this.setState({
      value : e.target.value
    })
  }

  clickHandle = () => {
    // 提交整个表单
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JS</option>
          <option value="vue">Vue</option>
          <option value="react">React</option>
        </select>
        <button onClick={this.clickHandle}>提交</button>
      </div>
    )
  }

}

export default App;
```



## 非受控组件

大多数情况下，在 *React* 中推荐使用受控组件来对表单进行操作，这样能够对表单控件的数据进行一个统一管理。

但是在某些特殊情况下，需要使用以前传统的 *DOM* 方案进行处理，此时替代的方案就是非受控组件。

- 非受控组件基本示例

```react
import React from "react";

// 类组件
class App extends React.Component {
 
  constructor(){
    super();
    // 创建了一个 ref，回头我们就可以获取到和该 ref 绑定了的 DOM 节点
    this.inputCon = React.createRef();
  }

  clickHandle = () => {
    // 通过 this.inputCon.current 可以获取到 input DOM 节点
    console.log(this.inputCon.current.value);
  }


  render() {
    return (
      <div>
        <input type="text" ref={this.inputCon}/>
        <button onClick={this.clickHandle}>获取用户输入的内容</button>
      </div>
    )
  }

}

export default App;

```

- 非受控组件的默认值

```react
<div>
  {/* 一旦你用了 value，React 会认为你这是一个受控组件 */}
  {/* 如果想要给默认值，使用 defaultValue */}
  <input type="text" ref={this.inputCon} defaultValue="123"/>
  <button onClick={this.clickHandle}>获取用户输入的内容</button>
</div>
```

- 文件上传

```react
import React from "react";

// 类组件
class App extends React.Component {

  constructor() {
    super();
    // 创建 ref 的时候，命名一般采用 xxxRef 结尾
    this.uploadRef = React.createRef();
  }

  clickHandle = () => {
    // 通过 this.uploadRef.current 可以获取到 input DOM 节点
    console.log(this.uploadRef.current.files);
  }


  render() {
    return (
      <div>
        <input type="file" ref={this.uploadRef}/>
        <button onClick={this.clickHandle}>获取用户输入的内容</button>
      </div>
    )
  }

}

export default App;

```



关于受控组件和非受控组件，可以参阅：*https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/*

# 生命周期

本章主要包含以下知识点：

- 什么是生命周期
- 常用的生命周期钩子函数



## 什么是生命周期

所谓生命周期，指的是组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。

*React* 在组件的生命周期中提供了一系列的钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时候运行。

**生命周期钩子函数是属于类组件所独有的东西**，但是从 *React 16.8* 推出 *Hooks* 以来，整体已经开始以函数组件为主，因此这里我们仅介绍一些常用的生命周期钩子函数。

完整的生命周期图谱，可以参阅官网：*https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/*



## 常用的生命周期钩子函数

有关生命周期钩子函数的介绍，可以参阅官网：*https://zh-hans.reactjs.org/docs/react-component.html*

官网中在介绍这些钩子函数时，也是分为了**常用**和**不常用**两大块来介绍的。

常用的生命周期钩子函数如下：

- *constructor*
  - 同一个组件对象只会创建一次
  - 不能在第一次挂载到页面之前，调用 *setState*，为了避免问题，构造函数中严禁使用 *setState*

- *render*
  - *render* 是整个类组件中必须要书写的生命周期方法
  - 返回一个虚拟 *DOM*，会被挂载到虚拟 *DOM* 树中，最终渲染到页面的真实 *DOM* 中
  - *render* 可能不只运行一次，只要需要重新渲染，就会重新运行
  - 严禁使用 *setState*，因为可能会导致无限递归渲染

```react
import React from "react";

// 类组件
class App extends React.Component {

  constructor() {
    super();
    // 主要做一些初始化操作，例如该组件的状态
    this.state = {
      value : 1
    }
    console.log("constructor");
  }


  clickHandle=()=>{
    this.setState({
      value : this.state.value + 1
    })
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.clickHandle}>+1</button>
      </div>
    )
  }

}

export default App;

```

- *componentDidMount*
  - 类似于 *Vue* 里面的 *mounted*
  - 只会执行一次
  - 可以使用 *setState*
  - 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中
- *componentWillUnmount*
  - 通常在该函数中销毁一些组件依赖的资源，比如计时器



# *Hooks*



本章主要包含以下内容：

- *Hooks* 基本介绍
- *useState* 和 *useEffect*
- 自定义 *Hook*



## *Hooks* 基本介绍

> *Hook* 是 *React 16.8* 的新增特性。它可以让你在不编写 *class* 的情况下使用 *state* 以及其他的 *React* 特性。



*Hooks* 的出现，首先能解决如下的一些问题：

- 告别令人疑惑的生命周期
  - 例如下面的例子，相同的代码在不同的生命周期中存在了两份


```react
import React from "react";

// 类组件
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count : 0
    }
  }

  componentDidMount(){
    document.title = `你点击了${this.state.count}次`;
  }

  componentDidUpdate(){
    document.title = `你点击了${this.state.count}次`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}

export default App;

```

- 告别类组件中烦人的 *this*
  - 在类组件中，会存在 *this* 的指向问题，例如在事件处理函数中，不能直接通过 *this* 获取组件实例，需要修改 *this* 指向
- 告别繁重的类组件，回归前端程序员更加熟悉的函数



另外，*Hooks* 的出现，还有更加重要的一个信号，那就是整个 *React* 思想上面的转变，从“面向对象”的思想开始转为“函数式编程”的思想。这是编程范式上面的转变。

编程范式：

- 命令式编程：告诉计算机怎么做（*How*），我们需要给计算机指明每一个步骤
  - 面向过程
  - 面向对象
- **声明**式编程：告诉计算机我要什么（*What*）
  - 函数式编程
  - *DSL*（领域专用语言，*HTML、CSS、SQL*）

声明式编程并不是新的产物，它是和命令式编程同期出现的。但是，早期更加流行命令式编程。不过随着近几年整个项目工程越来越复杂，以前的命令式编程就有点力不从心，所以现在慢慢开始流行声明式编程。



因此当你学习 *Hooks* 的时候，会发现突然多了一些以前不熟悉的概念，例如：纯函数、副作用、柯里化、高阶函数等概念。

当然，你可能好奇“面向对象”和“函数式编程”有什么区别，这里推荐一篇文章：

*https://www.imaginarycloud.com/blog/functional-programming-vs-oop/*



*Hook* 就是 *JavaScript* 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 *Hook*。不要在循环、条件判断或者子函数中调用。
- 只能在 ***React* 的函数组件**中调用 *Hook*。不要在其他 *JavaScript* 函数中调用。



## *useState* 和 *useEffect*

*React* 内置了一些实用的 *Hook*，并且随着 *React* 版本的更新，*Hook* 的数量还在持续增加当中。

入门阶段，我们掌握两个最常用的 *Hook*，一个是为函数组件添加状态的 *useState*，另一个是处理函数副作用的 *useEffect*。



*useState* 包含以下的知识点：

- 基本使用

```react
import { useState } from 'react';

function App(props) {

  let [count, setCount] = useState(0);

  function clickhandle(){
    setCount(++count);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={clickhandle}>+1</button>
    </div>
  );
}

export default App;

```

- 声明多个 *state* 状态

```react
import { useState } from 'react';

function App(props) {

  let [age, setAge] = useState(18);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: '学习 Hook' }]);

  function clickhandle(){
    setAge(++age);
  }


  return (
    <div>
      <div>年龄：{age}</div>
      <div>水果：{fruit}</div>
      <div>待办事项：{todos[0].text}</div>
      <button onClick={clickhandle}>+1</button>
    </div>
  );
}

export default App;
```



*useEffect* 包含以下知识点：

- 副作用的概念

  - 纯函数：一个确切的参数在你的函数中运行后，一定能得到一个确切的值，例如下面的例子：

  ```js
  function test(x){
    return x * 2;
  }
  
  x => 2 ===> 4
  x => 3 ===> 6
  ```

  - 如果一个函数中，存在副作用，那么我们就称该函数不是一个纯函数，所谓副作用，就是指函数的结果是不可控，不可预期。
  - 常见的副作用有发送网络请求、添加一些监听的注册和取消注册，手动修改 *DOM*，以前我们是将这些副作用写在生命周期钩子函数里面，现在就可以书写在 *useEffect* 这个 *Hook* 里面

- 基本使用

```react
import { useState, useEffect } from 'react';

function App() {

  let [count, setCount] = useState(0);

  useEffect(()=>{
    // 书写你要执行的副作用，会在组件渲染完成后执行
    document.title = `你点击了${count}次`;
  });


  function clickhandle() {
    setCount(++count);
  }

  return (
    <div>
      <div>你点击了{count}次</div>
      <button onClick={clickhandle}>+1</button>
    </div>
  );
}

export default App;
```

- 执行清理工作

```react
import { useState, useEffect } from 'react';

function App() {

  let [count, setCount] = useState(0);

  useEffect(()=>{
    // 书写你要执行的副作用，会在组件渲染完成后执行
    const stopTimer = setInterval(()=>{
      console.log("Hello");
    },1000)   

    // console.log("副作用函数执行了");
    // 在 useEffect 中，可以返回一个函数，该函数我们称之为清理函数（一般就是做一些清理操作）
    // 该函数会在下一次渲染之后，但是在执行副作用操作之前执行
    return ()=>{
      // console.log("清理函数执行了");
      clearInterval(stopTimer);
    }
  });


  function clickhandle() {
    setCount(++count);
  }

  return (
    <div>
      <div>你点击了{count}次</div>
      <button onClick={clickhandle}>+1</button>
    </div>
  );
}

export default App;
```

- 副作用的依赖

  - 目前，我们的副作用函数，每次重新渲染后，都会重新执行，有些时候我们是需要设置依赖项，传递第二个参数，第二个参数为一个依赖数组

  ```react
  import { useState, useEffect } from 'react';
  
  function App() {
  
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
  
    useEffect(()=>{
      console.log("执行副作用函数");
    },[count1]);
  
    return (
      <div>
        <div>count1:{count1}</div>
        <div>count2:{count2}</div>
        <div>count3:{count3}</div>
        <button onClick={()=>setCount1(++count1)}>+1</button>
        <button onClick={()=>setCount2(++count2)}>+1</button>
        <button onClick={()=>setCount3(++count3)}>+1</button>
      </div>
    );
  }
  
  export default App;
  ```

  - 如果想要副作用只执行一次，传递第二个参数为一个空数组

  ```js
  useEffect(()=>{
    console.log("执行副作用函数");
  },[]);
  ```

  

## 自定义 *Hook*

除了使用官方内置的 *Hook*，我们还可以自定义 *Hook*，自定义 *Hook* 的本质其实就是函数，但是和普通函数还是有一些区别，主要体现在以下两个点：

- 自定义 *Hook* 能够调用诸如 *useState*、*useRef* 等，普通函数则不能。由此可以通过内置的 *Hooks* 获得 *Fiber* 的访问方式，可以实现在组件级别存储数据的方案等。
- 自定义 *Hooks* 需要以 *use* 开头，普通函数则没有这个限制。使用 *use* 开头并不是一个语法或者一个强制性的方案，更像是一个约定。

*App.jsx*

```react
import { useState } from 'react';
import useMyBook from "./useMyBook"

function App() {

  const {bookName, setBookName} = useMyBook();
  const [value, setValue] = useState("");


  function changeHandle(e){
    setValue(e.target.value);
  }

  function clickHandle(){
    setBookName(value);
  }

  return (
    <div>
      <div>{bookName}</div>
      <input type="text" value={value} onChange={changeHandle}/>
      <button onClick={clickHandle}>确定</button>
    </div>
  )
  
}

export default App;
```

*useMyBook*

```react
import { useState } from "react";

function useMyBook(){
    const [bookName, setBookName] = useState("React 学习");
    return {
        bookName, setBookName
    }
}

export default useMyBook;
```

​	*React-router v6*



- 前端路由概念
- *React-router*



## 前端路由概念

早期的时候并不存在前端路由，那个时候只有后端路由，类似于下图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-01-120014.png" alt="image-20221101200014494" style="zoom:50%;" />

后来，随着单页应用的流行，整个 *Web* 应用之存在一个页面，通过 *JS* 调整模块来显示不同的内容，类似于下图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-01-120408.png" alt="image-20221101200407424" style="zoom:50%;" />

可以看到，所谓前端路由实际上就是协调当前页面显示什么模块。那么单页应用时代，还存在后端路由么？

实际上也是存在的，后端路由负责返回对应的数据，如下图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-01-120622.png" alt="image-20221101200622242" style="zoom:50%;" />



## *React-router*

*React-router* 是 *React* 官方所推出的前端路由库，官网地址：*https://reactrouter.com/en/main*

目前最新的版本为 *v6* 版本。相比之前的版本，该版本变化略大，加入了许多新的 *Hook*，比如 *useRoutes* 这个 *Hook* 就提供了类似于 *Vue-router* 相似的特性，从而使得使用起来更加的方便。

整个官网可以分为几大块：

- *Components* 组件
- *Hooks* 函数
- *API* 函数

整个 *React-router*，我们将写一个学生管理系统，用到什么讲什么。

# *React-router v6* 版本学生管理系统课堂笔记



## 快速搭建服务器



这里我们选择使用 *json-server* 来快速搭建一个服务器

*npm* 地址：*https://www.npmjs.com/package/json-server*

首先 *npm init* 初始化一个服务器的目录，然后安装 *json-server* 依赖，之后创建 *db.json*，该文件就是我们的数据文件

```json
{
    "students": [
        {
            "name": "xiejie",
            "age": "18",
            "phone": "333-444-555",
            "email": "xiejie@gmail.com",
            "education": "adsfasfd",
            "graduationschool": "asdfasfd",
            "profession": "asdfasdf",
            "profile": "asdfasfdasdf",
            "id": 1
        },
        {
            "name": "yajing",
            "age": "34",
            "phone": "123-345-678",
            "email": "yajing@hotmail.com",
            "education": "fasdfasfd",
            "graduationschool": "fasfasdf",
            "profession": "sdfasdfafd",
            "profile": "asdfasdf",
            "id": 3
        },
        {
            "name": "xizhi",
            "age": 47,
            "phone": "13112341234",
            "email": "1234567@qq.com",
            "education": "硕士",
            "graduationschool": "北京大学",
            "profession": "前端开发工程师",
            "profile": "大家好!",
            "id": 2
        }
    ],
    "classes" : [
        {
            "id" : 1,
            "name" : "前端01班",
            "description" : "这是一个积极向上的班级"
        },
        {
            "id" : 2,
            "name" : "前端02班",
            "description" : "这也是一个非常积极向上的班级"
        }
    ]
}
```

之后在 *package.json* 中添加一条命令：

```js
"json:server":"json-server --watch db.json"
```

最后就可以启动服务器了：

```js
npm run json:server
```



## 快速搭建整个管理系统

因为目前还没有学习组件库，我们选择使用 *Bootstrap*

这里我们使用的模板地址：*https://v3.bootcss.com/examples/starter-template/#*

因为我们用了 *bootstrap* 相关的样式类，所以我们需要引入 *Bootstrap*，我们这里选择使用 *CDN* 的方式来引入

*https://www.bootcdn.cn/twitter-bootstrap/*

可以在 *index.html* 中添加如下的代码

```html
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  crossorigin="anonymous"
/>

<!-- 引入 jQuery -->
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
  integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
  crossorigin="anonymous"
></script>
```





## *React-router v6* 路由总结



### 组件

- BrowserRouter：整个前端路由以 history 模式开始，包裹根组件
- HashRouter：整个前端路由以 hash 模式开始，包裹根组件
- Routes：类似于 v5 版本的 Switch，主要是提供一个上下文环境
- Route：在 Route 组件中书写你对应的路由，以及路由所对应的组件
  - path：匹配的路由
  - element：匹配上该路由时，要渲染的组件
- Navigate：导航组件，类似于 useNavigate 的返回值函数，只不过这是一个组件
- NavLink：类似于 Link，最终和 Link 一样，会被渲染为 a 标签，注意它和 Link 的区别，实际上就是当前链接，会有一个名为 active 的激活样式，所以一般用于做顶部或者左侧导航栏的跳转



### *Hooks*

- useLocation：获取到 location 对象，获取到 location 对象后，我们可以获取 state 属性，这往往是其他路由跳转过来的时候，会在 state 里面传递额外的数据
- useNavigate：调用之后会返回一个函数，通过该函数可以做跳转。
- useParams：获取动态参数



## 补充内容



### *useRoutes*

使用示例如下：

```react
function Router(props) {
    return useRoutes([
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/add",
            element: <AddOrEdit />,
        },
        {
            path: "/detail/:id",
            element: <Detail />,
        },
        {
            path: "/edit/:id",
            element: <AddOrEdit />,
        },
        {
            path: "/",
            element: <Navigate replace to="/home" />
        }
    ]);
}

export default Router;
```



### 嵌套路由

直接在 useRoutes 进行 chilren 属性的配置即可，类似于 vue-router，children 对应的是一个数组，数组里面是一个一个路由对象

```react
 {
   path: "/about",
     element: <About />,
     children : [
         {
           path : "email",
           element : <Email/>
         },
         {
           path : "tel",
           element : <Tel/>
         },
         {
           path : "",
           element: <Navigate replace to="email" />
         }
       ]
 },
```

之后，使用 Outlet 组件，该组件表示匹配上的子路由组件渲染的位置。



# *React-redux* 介绍



- 什么是状态管理
- *Redux* 的核心思想
- *React-redux* 介绍



## 什么是状态管理

所谓状态管理，指的是**把组件之间需要共享的状态抽取出来，遵循特定的约定，统一来管理，让状态的变化可以预测**。

组件之间通常会有一些共享的状态，在 *Vue* 或者 *React* 中我们一般会将这部分状态提升至公共父组件的 *props* 中，由父组件来统一管理共享的状态，状态的改变也是由父组件执行并向下传递。这样会导致两个问题:

- 需要将共享的状态提升至公共的父组件，若无公共的父组件，往往需要自行构造
- 状态由父组件自上而下逐层传递，若组件层级过多，数据传递会变得很冗杂

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-023144.png" alt="image-20221104103143856" style="zoom:50%;" />

此时，我们就需要一个统一的仓库来对组件状态进行管理，如下图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-023459.png" alt="image-20221104103459131" style="zoom:50%;" />



## *Redux* 的核心思想

早期的时候，*React* 官方提供了 *Flux*，*Flux* 的特点如下：

- 单向数据流。视图事件或者外部测试用例发出 *Action* ，经由 *Dispatcher* 派发给 *Store* ，*Store* 会触发相应的方法更新数据、更新视图
- **Store 可以有多个**
- **Store 不仅存放数据，还封装了处理数据的方法**



*2015* 年的时候，*Dan Abramov* 推出的 *Redux* 席卷了整个 *React* 社区，*Redux* 本质就是在 *Flux* 上做了一些更新：

- **单向数据流**。*View* 发出 *Action* (`store.dispatch(action)`)，*Store* 调用 *Reducer* 计算出新的 *state* ，若 *state* 产生变化，则调用监听函数重新渲染 View （`store.subscribe(render)`）

- **单一数据源**，只有一个 *Store*

- *state* 是只读的，每次状态更新之后只能返回一个新的 *state*

- 没有 *Dispatcher* ，而是在 *Store* 中集成了 *dispatch* 方法，**`store.dispatch()` 是 *View* 发出 *Action* 的唯一途径**

- 支持使用中间件（*Middleware*）管理异步数据流

*Redux* 官网：*https://redux.js.org/*

*Redux* 数据流：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-030252.png" alt="image-20221104110251637" style="zoom:50%;" />

*Redux* 示例：*ToDoList*

在浏览器中使用 *redux* 扩展工具，首先需要打开谷歌浏览器的扩展应用商店，下载 *redux devtools*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-07-062826.png" alt="image-20221107142826791" style="zoom:50%;" />

接下来需要在创建 *store* 的地方，添加如下的代码：

```js
export const store = createStore(
    todoReducer,
  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

详细可以参阅：*https://github.com/zalmoxisus/redux-devtools-extension#usage*



## *React-redux* 介绍

*Redux* 是一个独立的第三方库，之后 *React* 官方在 *Redux* 的基础上推出了 *React-redux*：*https://react-redux.js.org/*

最新版的 *React-redux*，已经全面拥抱了 *Hooks*，内置了诸如：

- *useSelector*
- *useDispatch*
- *useStore*

一类的 *Hook*，我们只要掌握这一类 *Hook*，就可以轻松上手。

另外，*Redux* 官方还推出了 *Redux Toolkit*，来简化整个 *Redux* 的使用。官方文档：*https://redux-toolkit.js.org/*

因此现在在 *React* 应用中，状态管理库的使用一般都是 *React-redux + Redux Toolkit*



*React-redux* 示例：*ToDoList*



**和后端进行交互**

一般来讲，当数据发生变化时，不仅仅是前端的状态库要更新数据，服务器端也要对应的对数据进行更新，此时的更新流程如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-051248.png" alt="image-20221104131247736" style="zoom:50%;" />

和后端交互示例：学生管理系统

# *React-redux* 介绍



- 什么是状态管理
- *Redux* 的核心思想
- *React-redux* 介绍



## 什么是状态管理

所谓状态管理，指的是**把组件之间需要共享的状态抽取出来，遵循特定的约定，统一来管理，让状态的变化可以预测**。

组件之间通常会有一些共享的状态，在 *Vue* 或者 *React* 中我们一般会将这部分状态提升至公共父组件的 *props* 中，由父组件来统一管理共享的状态，状态的改变也是由父组件执行并向下传递。这样会导致两个问题:

- 需要将共享的状态提升至公共的父组件，若无公共的父组件，往往需要自行构造
- 状态由父组件自上而下逐层传递，若组件层级过多，数据传递会变得很冗杂

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-023144.png" alt="image-20221104103143856" style="zoom:50%;" />

此时，我们就需要一个统一的仓库来对组件状态进行管理，如下图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-023459.png" alt="image-20221104103459131" style="zoom:50%;" />



## *Redux* 的核心思想

早期的时候，*React* 官方提供了 *Flux*，*Flux* 的特点如下：

- 单向数据流。视图事件或者外部测试用例发出 *Action* ，经由 *Dispatcher* 派发给 *Store* ，*Store* 会触发相应的方法更新数据、更新视图
- **Store 可以有多个**
- **Store 不仅存放数据，还封装了处理数据的方法**



*2015* 年的时候，*Dan Abramov* 推出的 *Redux* 席卷了整个 *React* 社区，*Redux* 本质就是在 *Flux* 上做了一些更新：

- **单向数据流**。*View* 发出 *Action* (`store.dispatch(action)`)，*Store* 调用 *Reducer* 计算出新的 *state* ，若 *state* 产生变化，则调用监听函数重新渲染 View （`store.subscribe(render)`）

- **单一数据源**，只有一个 *Store*

- *state* 是只读的，每次状态更新之后只能返回一个新的 *state*

- 没有 *Dispatcher* ，而是在 *Store* 中集成了 *dispatch* 方法，**`store.dispatch()` 是 *View* 发出 *Action* 的唯一途径**

- 支持使用中间件（*Middleware*）管理异步数据流

*Redux* 官网：*https://redux.js.org/*

*Redux* 数据流：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-030252.png" alt="image-20221104110251637" style="zoom:50%;" />

*Redux* 示例：*ToDoList*

在浏览器中使用 *redux* 扩展工具，首先需要打开谷歌浏览器的扩展应用商店，下载 *redux devtools*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-07-062826.png" alt="image-20221107142826791" style="zoom:50%;" />

接下来需要在创建 *store* 的地方，添加如下的代码：

```js
export const store = createStore(
    todoReducer,
  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

详细可以参阅：*https://github.com/zalmoxisus/redux-devtools-extension#usage*



- 获取仓库仓库：*store.getState( )*
- 派发 *action*：*store.dispatch( action object)*
- 订阅：*store.subscribre( )*



## *React-redux* 介绍

*Redux* 是一个独立的第三方库，之后 *React* 官方在 *Redux* 的基础上推出了 *React-redux*：*https://react-redux.js.org/*

最新版的 *React-redux*，已经全面拥抱了 *Hooks*，内置了诸如：

- *useSelector*
- *useDispatch*
- *useStore*

一类的 *Hook*，我们只要掌握这一类 *Hook*，就可以轻松上手。

另外，*Redux* 官方还推出了 *Redux Toolkit*，来简化整个 *Redux* 的使用。官方文档：*https://redux-toolkit.js.org/*

因此现在在 *React* 应用中，状态管理库的使用一般都是 *React-redux + Redux Toolkit*



*React-redux* 示例：*ToDoList*

首先第一个安装两个依赖，命令如下：

```js
npm install @reduxjs/toolkit react-redux
```

*Redux* 目录中的 *4* 个文件会直接简化为 *2* 个，有些东西不需要我们再写了，会有 *toolkit* 自动帮我们生成。



index.js 的变化，需要从 react-redux 中引入 *Provider* 的组件，用于提供一个上下文环境，包裹应用的根组件，之后仓库会做为 *Provider* 的 store 属性，不需要再在 App.jsx 根组件上面挂载了

```js
// ....
import { Provider } from "react-redux";

// 引入仓库
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```



store.js 的变化，从 *toolkit* 里面引入 *configureStore* 方法，用于创建我们的数据仓库

```js
// 引入创建仓库的方法
import { configureStore } from "@reduxjs/toolkit";

// 调用该方法时，传入一个配置对象
// 其中一个选项是配置 reducer
export default configureStore({
    reducer : {

    }
});

```



组件连接仓库的改变，之前使用 redux 的时候，组件还是需要从父组件传递的 props 上面拿到仓库数据，现在可以通过 useSelector 这个 Hook 直接连接仓库

```js
const {list} = useSelector(state=>state.todo);
```



组件向仓库派发 action 时的改变，首先是获取 dispatch 方法的方式，之前使用纯 redux 的时候，dispatch 是通过 store 拿到的，现在是通过 useDispatch 来拿到。

```js
 dispatch(add(value));
```

action 之前是通过我们自己书写的 action creator 来创建的，现在是直接从 slice 里面导出即可。

```js
export const {add,del,change} = todolistSlice.actions;
```



**和后端进行交互**

一般来讲，当数据发生变化时，不仅仅是前端的状态库要更新数据，服务器端也要对应的对数据进行更新，此时的更新流程如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-04-051248.png" alt="image-20221104131247736" style="zoom:50%;" />

和后端交互示例：学生管理系统



# *Antd* 介绍

*Antd* 是一个由蚂蚁集团推出的组件库，全称为 *Ant design*，官网地址：*https://ant.design/index-cn*

早期 *Antd* 主要是基于 *React* 的组件库，对应的基于 *Vue* 的组件库，大家大多使用 *ElementUI*。而现在即使你是使用 *Vue* 技术栈，也能够使用 *Antd Vue* 来做为自己项目的组件库，官方地址：*https://antdv.com/components/overview*

关于组件库的概念，这里不再做过多的介绍，只要你会用 *ElementUI*，那么使用 *Antd* 也没有太多的问题。

下面我们主要看两个点：

- 安装 *Antd*
- 使用 *Antd*



## 安装 *Antd*

首先第一步就是安装 *Antd*，可以通过命令：

```js
npm i antd
```

在使用的时候，需要引入对应的样式，因此我们在 *index.js* 中通过 *import* 来进行样式的引入：

```js
// index.js
import "antd/dist/antd.min.css";
```

另外，组件里面的文本默认都是英文的，如果要配置成中文，需要引入中文语言包以及 *ConfigProvider* 组件，之后包裹项目根组件：

```react
// index.js
import zhCN from "antd/es/locale/zh_CN"; // 中文语言包
import { ConfigProvider } from "antd"; 

// ...

root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
```



## 使用 *Antd*

安装好 *Antd* 之后，就可以愉快的使用组件库为我们所提供的组件了。

使用的步骤和 *ElementUI* 一样，首先通过 *import* 引入组件，例如：

```js
import { Button } from 'antd';
```

之后就可以在 *JSX* 中使用该组件：

```react
const App = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);
```

至于该组件有一些什么样的属性和方法，需要我们参阅对应组件的文档说明。

下面是开发中常用的一些组件，大家可以提前去熟悉一下：

- 通用

  - *Button*
  - *Icon*

- 布局

  - *Grid*

- 导航

  - *Pagination*

- 数据录入

  - *Form*
    - *Input、Radio、Select...*

- 数据展示

  - *Table*
  - *Card*

- 反馈

  - *Alert*
  - *Message*
  - *Model*

  







# *coder station* 前台系统笔记



## 准备工作



1. **启动服务器**

首先从课件资料拿到服务器的项目目录coderstation-server(express+mongo)，进入项目根目录，安装依赖：

```js
npm i
```

启动服务器：

```js
npm start
```

如果看到控制台如下的输出：

```js
服务器端已启动，监听 7001 端口...
coderstation 数据库已经连接...
```

说明服务器已经启动成功。



2. **数据恢复**

在课件资料中，你还能看到提前准备好了一些数据，coderstationData，接下来可以将数据进行一个恢复。

首先需要你安装 *Mongodb*：*https://www.mongodb.com/*

![image-20221109142847200](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-062847.png)

接下来下载 mongodb

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-062943.png" alt="image-20221109142943156" style="zoom:50%;" />

*Mac* 系统建议放置到 /usr/local/mongodb

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-063106.png" alt="image-20221109143105682" style="zoom:50%;" />

要启动 mongodb，需要 bin 目录下面的 mongod

后期可能会用到很多其他的可执行文件

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-063207.png" alt="image-20221109143207171" style="zoom:50%;" />

新版本的 mongodb，有一个特点就是 bin 目录下面的可执行文件大大减少，如果想要补全，需要自己去官网下载，下载下来是一个压缩包，解压就会得到一堆可执行文件，放入到 *Mongodb* 安装目录的 *bin* 目录下面

![image-20221109143317367](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-063317.png)

启动 *Mongodb*，使用 *Mongod* 可执行文件

```js
./mongod -f 配置文件地址
例如：
./mongod -f /usr/local/mongodb/mongodb.conf
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-063605.png" alt="image-20221109143605101" style="zoom:50%;" />

配置文件的内容如下：

```js
systemLog:
  destination: file # 日志输出方式。file/syslog,如果是file，需指定path，默认是输出到标准输出流中
  path: /usr/local/mongodb/mongod.log  # 日志路径
  logAppend: true # 启动时，日志追加在已有日志文件内还是备份旧日志后，创建新文件记录日志, 默认false

net:
  port: 27017 # 监听端口，默认27017
  bindIp: 127.0.0.1 # 绑定监听的ip，设置为127.0.0.1时，只会监听本机
  maxIncomingConnections: 65536 # 最大连接数，可接受的连接数还受限于操作系统配置的最大连接数
  wireObjectCheck: true # 校验客户端的请求，防止错误的或无效BSON插入,多层文档嵌套的对象会有轻微性能影响,默认true

processManagement:
  fork: true  # 后台运行

security:
  authorization: disabled  # enabled/disabled # 开启客户端认证

storage:
  dbPath: /usr/local/mongodb/data # 数据库地址
```

> 注意：*Windows* 下面自带配置文件，后缀为 cfg，然后还有就是 *windows* 下面的配置文件的格式会有一些区别



建议安装一个数据库可视化工具，这个自由选择：

- *robo3t*
- *stduio3t*：基础功能是免费的，*https://studio3t.com/*
- *compass*：mongo 官方推出的可视化工具
- *navicat*



关于数据的恢复，这边需要使用到一个可执行命令，*mongorestore*，还需要保证 *mongodb* 的数据库服务器是启动起来的

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-064349.png" alt="image-20221109144349195" style="zoom:50%;" />

```js
mongorestore -h dbhost -d dbname --dir dbdirectory
例如：
./mongorestore -h localhost:27017 -d coderstation2 --dir /Users/jie/Desktop/coderstationData
```

如果你在恢复数据的时候，名字取了其他名字，服务器那边也需要修改成对应的名字：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-09-064932.png" alt="image-20221109144932400" style="zoom:50%;" />



3. **数据接口**：*https://yapi.duyiedu.com/project/387/interface/api*



4. **本次项目讲解约定**
   - 这一次项目不会像个人博客，把所有的功能就讲解，只会讲解核心的功能，重复的代码模块大家自己完成
   - 上课的时候不会带着写 *CSS*，涉及到 *CSS* 的时候会直接使用成品里面的 *CSS* 
   - 关于 *JSX* 部分，只会挑一些重要的来讲的，有一些 *JSX* 会直接从成品里面拿过来



## 项目笔记

1. 有关 *CSS*

当我们书写 *CSS* 的时候，如果 *CSS* 文件名包含 *module*，格式为 *xxx.module.css*，那么说明该 *CSS* 是一个局部的 *CSS* 样式文件，类似于 *vue* 组件里面的 *scoped*



2. *Icon*

如果要使用 *Icon*，*Antd* 为我们提供了很多实用的 *Icon*，对应的地址为：*https://ant.design/components/icon/*

每一个 *Icon*，使用之前需要引入，例如：

```js
import { UserOutlined } from "@ant-design/icons";
```



3. 请求转发

在 *src* 目录下面新建一个 *setupProxy* 的文件，在该文件中进行请求转发的配置

在使用的时候，还需要安装一个插件 *http-proxy-middleware*，配置示例如下：

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
    app.use(createProxyMiddleware("/res", {
        target: "http://127.0.0.1:7001",
        changeOrigin : true
    }),createProxyMiddleware("/api", {
        target: "http://127.0.0.1:7001",
        changeOrigin : true
    }),createProxyMiddleware("/static", {
        target: "http://127.0.0.1:7001",
        changeOrigin : true
    }))
}
```



4. 如何渲染出 *svg* 图片

之前在使用 *vue* 做个人博客的时候，如果想要渲染一段 *html* 或者 *svg*，需要使用 *v-html*

在 *react* 中，可以通过如下的方式：

```react
 <div dangerouslySetInnerHTML={{ __html: captcha }}></div>
```



5. 如何修改打包后的目录

由于我们的静态资源以 *static*，所以我们配置了请求转发，但是 *create-react-app*（基于 *webpack*）默认在打包应用的时候，也会将打包好的资源放置到 *static* 目录下，导致在加载打包好后的资源时，也会进行请求转发，从而报错。

我们需要做的是修改打包好后的目录。首先运行下面的命令：

```js
npm run eject
```

> 注意：弹射的时候要求 *git* 仓库不能有未提交的文件

弹射出来后，会多出来很多隐藏文件，我们就可以修改对应的配置，但是会有一个关于 *Babel* 的错误，最快的解决方案就是在 *package.json* 中删除如下的配置：

```js
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
},
```

接下来，在弹射出来的配置文件中，我们就可以修改 *webpack* 的打包配置：

*config/webpack.config.js* 的 *output* 对应的配置

```js
 filename: isEnvProduction
        ? 'assets/js/[name].[contenthash:8].js'
        : isEnvDevelopment && 'assets/js/bundle.js',
      // There are also additional JS chunk files if you use code splitting.
      chunkFilename: isEnvProduction
        ? 'assets/js/[name].[contenthash:8].chunk.js'
        : isEnvDevelopment && 'assets/js/[name].chunk.js',
      assetModuleFilename: 'assets/media/[name].[hash][ext]',
```



6. 关于 *redux* 中将异步获取到的数据填充到状态仓库

之前我们介绍了一种方式，是通过 *action* 来派发一个 *reducer* 从而实现状态填充。例如之前所写学生管理系统：

```js
export const getStuListAsync = createAsyncThunk(
  "stu/getStuListAsync",
  async (_, thunkApi) => {
    // 发送 ajax 请求
    const response = await getStuListApi();
    // 派发 action
    thunkApi.dispatch(initStuList(response.data));
  }
);
```

也可以使用 *redux-toolkit* 官网所示例的方式：

```js
export const getTypeList = createAsyncThunk(
    "type/getTypeList",
    async ()=>{
        const response = await getType();
        // 填充返回的数据到状态仓库
        return response.data;
    }
);

// ....

// 专门处理异步的 reducer
extraReducers : {
  // 这里就会有三种状态
  [getTypeList.fulfilled] : (state, { payload }) => {
    state.typeList = payload;
  }
}
```



7. 关于使用自定义图标字体

首先可以在 *iconfont* 上面下载你喜欢的图标字体：*https://www.iconfont.cn/*

选择了需要下载的图标字体后，添加到购物车，之后可以选择下载代码

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-11-064915.png" alt="image-20221111144914697" style="zoom:50%;" />

下载完成后，是一个压缩包，解压之后会得到一些 *CSS、JS、ttf* 一类的文件，首先我们需要将 *ttf* 字体文件添加到我们的项目中

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-11-065018.png" alt="image-20221111145017874" style="zoom:50%;" />

还需要将一些样式放置到我们的项目中，注意，需要将 *src* 中的 *url* 路径进行一下修改

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-11-065229.png" alt="image-20221111145228623" style="zoom:50%;" />

修改完之后，就可以在我们的代码中使用这些样式类，例如：

```html
<span class="iconfont iconfont-jiangbei"></span>
```



8. 在 *React* 中，如果想要设置多个类名样式，可以借助一个第三方的库，叫做 classnames，官方地址：*https://www.npmjs.com/package/classnames*



9. 关于 *markdown* 的编辑器

我们在项目中会频繁的使用到 *markdown* 的编辑器，我们使用的是 *toast-ui edior*，官网地址：*https://ui.toast.com/tui-editor/*

我们这一次会使用到的是 *react* 版本的编辑器，可以参阅如下链接：

- 关于 *react markdown* 编辑器的使用：*https://github.com/nhn/tui.editor/tree/master/apps/react-editor*
- 详细的配置项目：*https://nhn.github.io/tui.editor/latest/ToastUIEditor#focus*

大家在安装这个编辑器的时候，会遇到一个问题，如下图所示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-11-072713.png" alt="image-20221111152713064" style="zoom:50%;" />

该问题的出现是因为该插件内部仍然依赖 *React 17* 版本，解决方式也很简单，直接强制安装即可：

```js
npm install --save @toast-ui/react-editor --force
```

添加 *--force* 参数表示强制安装。



10. 关于使用 *toast-ui markdown editor* 时生成 *source map* 文件失败

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-11-120547.png" alt="image-20221111200546585" style="zoom:50%;" />

出现该问题的根源在于找不到 *purify.js.map* 文件，解决方案参考了 *https://github.com/nhn/tui.editor/issues/2137*

最直接的方案就是不生成 *sourcemap* 文件

```js
"start": "GENERATE_SOURCEMAP=false node scripts/start.js",
```



11. Cross-Origin Read Blocking (CORB) 已屏蔽 MIME 类型为 text/html 的跨域响应

![image-20221112105645409](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-12-025645.png)

参阅官网：

- *https://chromium.googlesource.com/chromium/src/+/refs/heads/main/services/network/cross_origin_read_blocking_explainer.md*
- *https://chromestatus.com/feature/5629709824032768*

简单来讲，这是一种新的 *Web* 平台安全功能，*CORB* 的目的是防止浏览器向网页接收某些跨源网络响应，因为这些响应可能包含敏感信息，而且现有的网页功能不需要这些响应。

**什么样的内容会被 *CORB-protected* ？**

当跨域请求回来的数据 *MIME type* 同跨域标签应有的 *MIME* 类型不匹配时，浏览器会启动 *CORB* 保护数据不被泄漏.
例如: *script* 标签请求的响应是 *json*. *img* 标签请求回来的是 *json*.

**如何解决？**

如果是请求我们自己的服务器出现这样的问题，那就调整服务器的 *MIME* 信息。



## 项目总结

- 没有什么比做一个实际项目让你对某一个技术更有信心（技术是否能够落地）
- 项目由于时间关系，里面可能会存在没有发现的 bug
  - 同学们尝试自己解决一下，然后反馈给我
  - 如果解决不了，直接反馈给我，我这边来处理
- 如果要将项目写入到自己简历里面，可以参阅下面的方式
  - 项目的描述
    - 项目本身的描述（我这是一个什么样的项目，项目提供了哪些功能，项目分为几个模块，每个模块大致是做什么的）
    - 采用的技术的描述（整个项目用到了什么技术栈，前端是什么技术栈，后端是什么技术栈）
  - 你自己在项目中的职责（你在这次项目中负责做了什么）
    - 负责还原 UI 设计师的设计稿
    - 负责使用 *Create-React-App* 搭建前台项目整体框架
    - 负责 xxx 模块的开发
    - ....

示例1:

![image-20221116113057984](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-16-033058.png)

示例2:

![image-20221116113141125](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-16-033141.png)





# *Dva* 介绍

*Dva* 是一个基于 [redux](https://github.com/reduxjs/redux) 和 [redux-saga](https://github.com/redux-saga/redux-saga) 的数据流方案，可以理解为一个轻量级的应用框架。

官网：*https://dvajs.com/*

*Dva* 的本意，是将基于 *React* 技术栈中常用到的库集成到一起。当时，*React* 社区中最流行的应用架构方案如下：

- 路由： [React-Router](https://github.com/ReactTraining/react-router/tree/v2.8.1)
- 状态管理： [Redux](https://github.com/reactjs/redux)
- 异步操作： [Redux-saga](https://github.com/yelouafi/redux-saga)



上面的架构中，除了 *Redux-saga* 我们没有介绍，前面两个我们都是有所接触的。

而 *Dva* 则是将上面三个 *React* 工具库包装在一起，简化了 *API*，让开发 *React* 应用更加方便和快捷。因此：

> ***Dva = React-Router + Redux + Redux-saga***



*Redux-saga* 主要是为了处理数据流中异步操作的问题，虽然我们没有前面没有介绍，但是并不影响我们学习 *Dva*。

*Dva* 中提供的数据流方案如下图：

数据流图1:

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-05-082108.png" alt="image-20221105162108061" style="zoom:50%;" />

数据流图2:

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-05-082152.png" alt="image-20221105162152274" style="zoom:50%;" />

*Dva* 中的核心概念如下：

- *app.model*
  - *namespace*: 当前 *Model* 的名称。整个应用的 *State*，由多个小的 *Model* 的 *State* 以 *namespace* 为 *key* 合成
  - *state*: 该 *Model* 当前的状态。数据保存在这里，直接决定了视图层的输出
  - *reducers*: *Action* 处理器，处理同步动作，用来算出最新的 *State*
  - *effects*：*Action* 处理器，处理异步动作，*Effect* 是一个 *Generator* 函数，内部使用 *yield* 关键字，标识每一步的操作（不管是异步或同步）
    - *dva* 提供多个 *effect* 函数内部的处理函数，比较常用的是 `call` 和 `put`
    - *call*：执行异步函数
    - *put*：发出一个 *Action*，类似于 *dispatch*



*Dva* 练习：学生管理系统

目前，*Dva* 已经被融入到了 *Umi* 当中，之后我们在 *Umi* 中可以以插件的形式开启 *Dva* 来管理应用的数据流。

# *Umi.js* 介绍

接下来要介绍的最后一个东西，就是 *Umi.js*，这也是由蚂蚁金服所推出的基于 *React* 的前端框架，它和前面所介绍的 *Dva*、*Antd pro* 之间的关系是包含关系，也就是说整个 *Umi* 是一个集大成的框架，这从官方给出的插图也能看出来：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-05-065301.png" alt="image-20221105145301148" style="zoom:50%;" />

有关 *Umi* 的介绍，可以参阅：*https://umijs.org/docs/introduce/introduce*

有关 *Umi* 的设计哲学，可以参阅：*https://umijs.org/docs/introduce/philosophy*



目前，*Umi* 最新的版本为 *4.0*，分为了**普通版**和 ***Max* 版本**，在开发后台时，我们大多使用 *Umi Max*，因为里面涵盖了我们要用到的 *antd、antd pro、dva*等技术。

在正式开始做项目之前，我们需要了解一些有关 *umi* 的基本使用和特点，主要有以下几个点：

- 约定式路由
- 插件机制
- 构建时配置和运行时配置



## 约定式路由

约定式路由并不是 *Umi* 独有的东西，像基于 *Vue* 的 *Nuxt.js*，基于 *React* 的 *Next.js* 框架，都提供了约定式路由的方式。

而早期在 *Umi 2.x* 时代，团队借鉴了这种方式，加入了约定式路由的功能，并沿用至今。

所谓约定式路由，简单来讲，就是根据你的页面级组件自动生成路由的配置，而不再需要我们自己去书写路由配置。

有关约定式路由的说明，在 *v4* 的文档中介绍相对比较简单：*https://umijs.org/docs/guides/directory-structure#pages*，*v4* 更多的是介绍配置式路由。

如果想要了解约定式路由，这里可以参阅 *v2* 和 *v3* 的文档：

- *v2* 文档：*https://v2.umijs.org/zh/guide/router.html*

- *v3* 文档：*https://v3.umijs.org/zh-CN/docs/convention-routing*

> 注意不同版本之间会有略微的差异，例如动态路由在 *v2* 和 *v3* 中的使用方式就有所区别，当发现差异时，应该查询自己对应版本的文档说明



## 插件机制

在 *Umi* 中，采用了插件的机制，所涵盖的其他技术都以插件的形式引入。

要开启某个插件，我们可以在 *.umirc.js* 中进行配置，例如：

```js
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  dva: {},
  npmClient: 'npm',
});
```

另外，如果*.umiirc.js* 文件配置的内容很多的话，可以单独提取出来，放入到 *config/config.js* 里面（二选一，*.umirc.js* 优先）



## 构建时配置和运行时配置

从 *v2* 版本开始，*Umi* 就一直包含两个配置文件，到了 *v4* 也一直保持这一特点。

**构建时配置**

在 *Umi* 中，约定项目根目录下的 *.umirc.js/ts* 为构建时配置，当我们启动 *Umi* 项目时，*Umi* 会对整个项目进行一次构建，在 *src* 目录下生成一个 *.umi* 的临时目录，构建时配置则决定了所生成的 *.umi* 目录的样子。

*.umi* 目录的结构如下：

```js
+ .umi
  + core     # 内部插件生成
  + pluginA  # 外部插件生成
  + presetB  # 外部插件生成
  + umi.ts   # 入口文件
```

因此，在构建时配置中，一个很重要的用途就是开启插件。

有关 *.umirc.js/ts* 具体的配置项，请参阅：*https://umijs.org/docs/api/config*



**运行时配置**

运行时配置和配置的区别是他跑在浏览器端，基于此，我们可以在这里写函数、*tsx*、*import* 浏览器端依赖等等，注意不要引入 *node* 依赖。

在 *umi* 中，约定 *src* 目录下的 *app.js/ts/jsx/tsx* 为运行时的配置文件。

有关运行时配置项目，请参阅：*https://umijs.org/docs/api/runtime-config*





# *coder station* 后台管理系统笔记



## 项目准备

这一次项目会有一些前置知识需要学习：

- *Antd pro*
- *Dva*
- *UmiJS 4.0*

# *Antd pro* 介绍

前面介绍过 *Antd*，这是蚂蚁旗下的一个组件库，提供了 *React* 和 *Vue* 双版本，这就类似于 *Vue* 的 *ElementUI*。

而这里要介绍的 *Antd pro*，则是蚂蚁推出的集成了 *Antd* 组件库的**后台集成解决方案**，类似于之前我们所学的 *vue-element-admin*

>补充一下：
>
>*vue-element-admin* 使用的是 *vue 2.x*，如果想要基于 *vue 3.x* 的后台管理集成方案，可以使用 *vue-element-plus-admin*，官网地址：*https://kailong110120130.gitee.io/vue-element-plus-admin-doc/*
>
>另外，蚂蚁同样也推出了基于 *vue* 技术栈的 *antd pro vue*，不过 *antd pro vue* 使用的 *vue 2.x*，官网地址：*https://pro.antdv.com/* 



*Antd pro* 的官网地址：*https://pro.ant.design/zh-CN/*

由于后期我们所使用的 *Umi Max* 集成了 *Antd pro* 在里面，所以我们需要提前了解 *Antd pro*，要了解的主要有以下几个点：

- 新增布局
- 将文件加入菜单和路由
- *UI* 配置（*layout* 配置对象）

>*https://pro.ant.design/zh-CN/docs/new-page*



***ProComponents***

*ProComponents* 是基于 *Ant Design* 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。可以显著的提升制作 *CRUD* 页面的效率，更加专注于页面。

*ProComponents* 官网：*https://procomponents.ant.design/*

*ProComponents* 针对中后台系统中常用的组件进行了二次封装，主要包含：

- 布局
  - [ProLayout](https://procomponents.ant.design/components/layout) 解决布局的问题，提供开箱即用的菜单和面包屑功能
  - [ProCard](https://procomponents.ant.design/components/card) 提供卡片切分以及栅格布局能力
- 数据录入
  - [ProForm](https://procomponents.ant.design/components/form) 表单模板组件，预设常见布局和行为
- 数据展示
  - [ProTable](https://procomponents.ant.design/components/table) 表格模板组件，抽象网络请求和表格格式化
  - [ProDescriptions](https://procomponents.ant.design/components/descriptions) 定义列表模板组件，ProTable 的配套组件
- 通用
  - [ProSkeleton](https://procomponents.ant.design/components/skeleton) 页面级别的骨架屏





## 项目笔记



1. 如何修改项目的端口号

在项目根目录下面创建一个 *.env* 文件，之后就可以配置端口号之类的内容

参阅文档：*https://umijs.org/docs/guides/directory-structure#env*



2. 关于路由的配置，需要参阅 *Antd pro* 这个文档的“新增页面”部分的内容

文档：*https://pro.ant.design/zh-CN/docs/new-page*

如果想要某个页面不出现在左侧的导航栏中，可以配置 *hideInMenu:true*



3. 配置代理服务器直接在 *umirc.js* 中进行配置

文档：*https://umijs.org/docs/api/config#proxy*

例如：

```js
proxy : {
    "/api" : {
      target : "http://127.0.0.1:7001",
      changeOrigin : true,
    },
    "/static" : {
      target : "http://127.0.0.1:7001",
      changeOrigin : true,
    },
    "/res" : {
      target : "http://127.0.0.1:7001",
      changeOrigin : true,
    }
  },
```



4. 当我们使用 *antd* 里面的表格的时候，和 *Element-ui* 不同的是，在 *antd* 中的表格需要配置每一列

例如：

```js
// 对应表格每一列的配置
const columns = [{
  title : "登录账号",
  dataIndex : "loginId",
  key : "loginId",
  align : "center"
}];
```

具体请参阅文档：*https://ant.design/components/table-cn/#Column*

注意，在配置列的时候，有一些列选项是输属于 *procomponents* 新增的，所以有些属性我们需要参阅 *procomponents* 的文档

文档：

- *columns* 列定义：*https://procomponents.ant.design/components/table#columns-%E5%88%97%E5%AE%9A%E4%B9%89*

- *valueType* 对应的值：*https://procomponents.ant.design/components/schema#valuetype-%E5%88%97%E8%A1%A8*

如果是单纯的渲染某一个值，那么直接配置 *dataIndex* 即可，但是很多时候，我们是根据数据对应的值渲染成其他的东西，例如：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-18-064046.png" alt="image-20221118144046443" style="zoom:50%;" />

那么这个时候，咱们就需要使用到 *render*。

如果不要搜索，可以将搜索选项关闭：*search：false*



5. 设置全局的 *CSS* 样式

在 *src* 目录下面创建一个 *global.css* 的文件，该 *CSS* 文件就是一个全局的样式：

*https://umijs.org/docs/guides/directory-structure#globalcsslesssassscss*



6. 如何回填表单的值

我们在修改的时候，经常会涉及到回填表单的值，在 *ant design* 里面，使用 *setFieldsValue*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-22-074057.png" alt="image-20221122154057171" style="zoom:50%;" />



7. 关于发送请求获取数据

有两种处理方式：

- 通过 *dispatch* 一个 *action* 到状态仓库，然后状态仓库来发请求，请求回来的数据放入到数据仓库中（管理员模块）
  - 适用于数据量不多
  - 多个组件要共享某一块数据
- 直接在组件里面请求数据
  - 数据量很大，在向服务器发送请求的时候，只能分页请求
  - 不需要和其他组件共享



8. 关于在 *ProTable* 组件中使用 *request* 发送请求

*ProTable* 有一个重要的属性叫做 *request*，该属性对应的值一般是一个异步函数，该异步函数自动接受一个 *params*，*params* 中会有默认的当前页码（*current*）和每一页的条数（*pageSize*），这两个值会有默认值，*current* 默认为 *1*，*pageSize* 默认为 *20*，可以通过配置 *pagination* 属性来修改 *current* 和 *pageSize* 的值

```js
<ProTable
  headerTitle="用户列表"
  pagination={{
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: [5, 10, 15, 20],
    ...pagination,
    onChange: handlePageChange
  }}
  request={async (params) => {
    console.log(params);
  }}
/>
```



9. 刷新表格

获取到表格的实例（通过 *ref*），注意这里是 *actionRef*，然后调用 *reload* 方法

```react
<ProTable
  actionRef={tableRef}
  ...
/>
tableRef.current.reload();
```

请参阅：*https://procomponents.ant.design/components/table/#actionref-%E6%89%8B%E5%8A%A8%E8%A7%A6%E5%8F%91*



10. 如何新增不再导航栏显示的页面

只需要一个配置项即可

```js
hideInMenu : true
```

更多的配置项，请参阅：*https://pro.ant.design/zh-CN/docs/new-page*



11. *Warning: Cannot update a component (`InternalFormItem`) while rendering a different component (`UserForm`).*

该警告出现的原因，是因为在初次渲染组件的时候，我们设置了数据的回填，导致组件初次还没有渲染完毕，又在更新

如何解决，也非常简单，我们等待第一次渲染完毕后再进行数据的回填，所以我们将回填的代码放入 *useEffect*

```js
useEffect(() => {
  if (formRef.current) {
    formRef.current.setFieldsValue(userInfo);
  }
}, [userInfo]);
```



12. 关于使用 *markdown* 编辑器做修改操作时光标跳转的问题

该问题的出现是因为对应的组件在重新渲染时，*markdown* 编辑器回填了数据多次

要解决这个问题也很简单，我们只需要设置一个状态值，第一次 *markdown* 回填了数据后，之后就不再让编辑器回填数据

```js
useEffect(()=>{
  if(formRef.current && firstIn && bookInfo){
    formRef.current.setFieldsValue(bookInfo);
    // 关键就是关于编辑器的回填
    editorRef.current.getInstance().setHTML(bookInfo?.bookIntro);
    // 将 firstIn 设置为 false
    setFirstIn(false);
  }
  if(formRef.current){
    formRef.current.setFieldsValue(bookInfo);
  }
},[bookInfo])
```



13. 关于登录页面的 Canvas 动画，使用到的是一个第三方库，叫做 *react-canvas-nest*

*https://www.npmjs.com/package/react-canvas-nest*

```react
<ReactCanvasNest
   config={{
   pointColor: '255, 0, 0',
   count: 66,
   follow: false,
   }}
   style={{ zIndex: 1 }}
/>
```



14. 配置初始化数据

在 umi 的运行时配置（*app.js/ts*）中，有一个叫做 *getInitialState* 方法，该方法可以配置一些初始化的数据，回头在其他组件中通过 *useModel* 来获取你返回的初始化数据

*https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81*

后台管理系统导航守卫逻辑如下：

```js
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  if (location.pathname === '/login') {
    // 强行跳登录页
    // 判断是否有有效的 token
    const token = localStorage.getItem('adminToken');
    if (token) {
      const result = await AdminController.getInfo();
      console.log(result, 'result');
      if (result.data) {
        // 不仅有 token，而且 token 是有效的
        // 不允许你去 login
        message.warning('请先退出后在登录');
        history.go(-1);
      }
    }
  } else {
    // 强行要跳内部页面
    const result = await AdminController.getInfo();
    if (result.data) {
      // 说明有 token，并且 token 有效
      // 获取该 id 对应的管理员信息
      const { data } = await AdminController.getAdminById(result.data._id);
      // 这里返回的就是一个全局的初始化数据
      // 之后各个组件都可以通过 useModel 获取到该初始数据
      return {
        name: data.nickname,
        avatar: data.avatar,
        adminInfo: data,
      };
    } else {
      // token 验证失败，跳转至登录
      // 失效可能是因为 token 过期，也有可能是因为压根儿就没有 token，不管有没有，删除掉原有的
      localStorage.removeItem("adminToken");
      location.href = "/login";
      message.warning('请重新登录');
    }
  }
}
```



15. 配置请求和响应拦截器也是在 *app.js/ts* 运行时配置中进行配置

*https://umijs.org/docs/api/runtime-config#request*

```js
export const request = {
  timeout : 3000,
  // 请求拦截器
  requestInterceptors: [function(url, options){
    // 从本地获取 token
    const token = localStorage.getItem("adminToken");
    if(token){
      options.headers['Authorization'] = "Bearer " + token;
    }
    return {url, options};
  }]
}
```



16. 退出登录

退出登录只需要在运行时配置文件 *app.js/ts* 的 *layout* 里面书写 *logout* 对应的回调函数逻辑即可：

```js
logout : ()=>{
  // 删除本地 token
  localStorage.removeItem("adminToken");
  // 跳转到登录页面
  location.href = "/login";
  message.success('退出登录成功');
}
```



17. 关于权限

*https://umijs.org/docs/max/access*

首先需要在构建时配置文件 *umirn.js/ts* 中启动 *access*，之后在 *src* 目录下面创建一个 *access.js/ts* 文件

接下来在路由配置中，为每一个路由配置对应权限，例如：

```js
{
  name: '首页',
  path: '/home',
  component: './Home',
  icon : "HomeOutlined",
  access : "NormalAdmin"  // 普通管理员能够访问
},
{
  name : "管理员",
  path : "/admin",
  icon: 'UserOutlined',
  access : "SuperAdmin",  // 超级管理员能够访问
  ...
},
```

最后在 *access.js* 文件中，根据登录的账户的 *permission* 来确定返回的对象

```js
// 在该函数中，我们需要返回一个对象，对象里面对应一个一个权限项目，每个权限项目对应的值是一个布尔值
// true 代表有权限 false 代表没有权限

// 假设现在是超管登录 adminInfo.permission ---> 1
// { SuperAdmin : true, NormalAdmin : true}
// 假设现在登录的是普通管理员 adminInfo.permission ---> 2
// { SuperAdmin : false, NormalAdmin : true}

if (initialState) {
  return {
    SuperAdmin: initialState.adminInfo.permission === 1,
    NormalAdmin:
    initialState.adminInfo.permission === 1 ||
    initialState.adminInfo.permission === 2,
  };
} else {
  return {
    SuperAdmin : false, 
    NormalAdmin : false
  }
}
```

针对页面中某一块区域如果要设置权限，那么可以通过 *useAccess* *hook* 函数获取到当前的权限对象（*access.js* 中我们返回的对象）

之后通过 *Access* 组件包裹有权限的区域，设置 *accessible* 属性即可

```react
<Access accessible={access.SuperAdmin}>
  //...
</Access>
```



18. 在页面中获取全局初始化数据

可以通过 *useModel* 来进行获取，示例如下：

```js
const { initialState } = useModel("@@ininitialState");
```



19. 关于首页的 Echarts

*https://umijs.org/docs/max/charts*

首先安装 *Echart* 相关的依赖：

```js
npm install @ant-design/charts
```

之后引入对应的图表，做好数据配置，直接使用即可。

具体可以使用的图表类型可以参阅：*https://charts.ant.design/*



20. *mf-dep____vendor.0d0d1aca.js:389066 Warning: [antd: Dropdown] `overlay` is deprecated. Please use `menu` instead.*

该问题是 *umi.js* 内部的问题，并非我们的代码，随着 *umi.js* 的升级，期望后期官方能够修复这个问题。

可以参阅：*https://github.com/ant-design/pro-components/issues/6162*

关于运行时配置中，*layout* 能够配置的项目，可以参阅：*https://procomponents.ant.design/components/layout/#prolayout*



## 项目总结

- *dva*
- *antd* 组件库以及 *antd pro* 后台集成方案
- *umi.js 4.x*

整个项目使用到的是 *react* 技术栈，前端路由使用到了 *react-router*，数据流方案采用的是基于 *redux* 和 *redux-saga* 的 *dva*，整体项目框架采用 *umijs.4.x* 搭建，里面使用到了 *antd pro* 后台集成解决方案。





## 后期课程安排

- 入门篇
  - *React* 核心知识（你必须要掌握的）
    - 基础语法
    - *Hooks*
  - 周边库
    - *router*
    - *redux*
  - **课程短、学习快、只讲最必要的知识**
- 就业篇
  - 类似于三阶段的笔面试题
  - 大致目录如下
    - 官方文档的进阶部分
    - 高级概念
      - 事件系统
      - 渲染流程
    - *React* 架构
    - *v18* 的一些新特性
    - 常见应用场景
  - 就业篇会长期保持更新
- 源码篇
