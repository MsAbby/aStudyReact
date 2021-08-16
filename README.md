# React 基础

## React学习
01 组件化开发， 复用性好<br>
02 无需关注dom, 直接关注数据， 数据驱动<br>
03 有极好的开发生态<br>

## JSX
01 是javascript 和 xml的结合， 虚拟dom ， 当遇到< 当html解析， 当遇到 { 当javascript 解析<br>
02 总结1： 可以在react Javascript 中写html 代码<br>
03 踩坑1： 注释 {/*  这是注释 */} - 推荐<br>
04 踩坑2:  类： className="name"<br>
05 踩坑3： 解析html标签： dangerouslySetInnerHTML={{__html: item}}<br>
06 踩坑4:  label标签激活input htmlFor<br>

## 自定义组件
01 必须大写字母开头， 否则报错 App<br>

## Fragment
01 代替最外层div<br>

## 数据驱动
01 constructor 中定义state<br>
02 {} - 字面量<br>

## 事件绑定
01 触发： onChange<br>
02 onChange={this.inputChange.bind(this)}: 定义this的指向， 方法中才不会报错<br>
03 赋值： <br>
````
    this.setState({
        key: value<br>
    })
````


01 触发 onClick<br>
02 onClick={this.btnClick.bind(this)}<br>
03 数组赋值: <br/>
````
    this.setState({
        key: [...value, value2]
    })
````

04 不允许直接操作state 里面的值。后期会有问题<br>

## this指向的问题
01 btnClick.bind(this)<br>
02 在constructor(props) {<br>
    super(props)<br>
    this.btnClick = this.btnClick.bind(this) // 便于性能优化<br>
}<br>

## 循环js
01 this.state.value.map((item, index) => {})<br>

## 快速生成代码插件simple React Snippets
｜ 代码编写速度：<br>
01 imrc: import React, {Component} from 'react  <br>
02 cc: 快速继承方法， 导出<br>


## 组建拆分，组建通信
01 父传子： 子接收 props, 父传递就是组建身上写属性<br>
02 子传父： 都是pros, 方法写在子组件身上， react明确规定子组建不可以干预父祖件内容<br>
03 prop-types  父子组件传值校验： PropTypes.string (校验属性类型-子组件中设置)<br>
04 prop-types  父子组件传值校验： PropTypes.string.isRequired (校验必传-子组件中设置)<br>
05 prop-types  父子组件传值校验： PropTypes.string.isRequired (默认值-子组件中设置)<br>

## 单向数据流
01 定义： 父组件传递数据给子组件的， 但是传递过去只能使用，不能修改<br>
02 原因： 防止数据冲突<br>
03 解决： 传递方法<br>

## 结合jquery使用
01 完全可以的<br>

## 函数式编程
01 代码清晰： 每一个函数代表一个功能<br>
02 测试友好： 便于单元测试<br>
03 大型开发配合更好<br>

## 调试react
?? console.log: 调试效率低<br>
01 React Developer Tools: facebook出的<br>
   灰色： 说明网站不是react技术开发的<br>
   黑色： 说明网站是react技术开发的<br>
   红色： 说明我们正在访问react程序<br>


## ref属性的使用
01 <br>
02 坑1: 虚拟dom渲染也是有时间的, 异步<br>
02 解决1: 在setState后面加流回调函数<br>
````
this.setState({}, () => {})

````

## react 生命周期
00 生命周期定义： 在某一时刻，可以自动执行的函数 <br>
01 分为四个大阶段： Initialization(初始化),  Mounting（虚拟dom挂载阶段）, Updation（组件更新时）, Unmounting(卸载dom)

### 02 Initialzation: 
+ construtor： 属于es6的语法，不属于 react 生命周期，可以当作生命周期的初始化阶段（props和state）
### 03 Mounting: 
+ componentWillMount: dom挂载之前执行的 
+ render: 渲染，state状态或者属性变化，才会发生渲染
+ componentDidMount： dom 挂载完了，执行函数
### 04 Updation:
| states:

+ shouldComponentUptate: return true： 渲染之前； return false: 不往下执行
+ componentWillUpdate: (废弃了)
+ render: 渲染：
+ componentDidUpdate: 组件更新完毕后， 虚拟dom已经渲染完毕

| props:（比较难的）
+ componentWillReceiveProps: 直接写不显示， 满足两个条件，第一次存在于dom中，函数不会被执行，如果已经存在dom中，函数才会执行
+ shouldComponentUpdate: 同上
+ componentWillUpdate: 同上
+ render: 同上
+ componentDidUpdate: 同上
### 05 Unmounting:
+ componentWillUnmount: 当我们组件将要被删除， 但是又还没有被删除
### 06 改善组件性能
+ shouldComponentUpdate: 两个参数，知道变化
````
shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content)  {
        retun true
    } else {
        return false
    }
}
````

## axios 远程请求数据
01 独立程序-和许多项目可以结合 <br>
02 使用位置： 推荐componentDidMount()

## Easy-Mock 造数据
01 打开easy-mock 网站(网站经常挂)
02 mock.js 本地可以

## react 简单css3动效果
01 keyframes
02 react-transition-group: 推荐，官方出的，完善的api {组成： Transtion, CSSTransition, TransitionGroup}

## 将本地存在项目一次性push至远程仓库
01  touch README.md //新建说明文件<br>
02  git init // 生成本地git管理,并建立一个隐藏.git目录<br>
03  git add . //添加当前目录中的所有文件到索引<br>
04  git commit -m "first commit" //提交到本地源码库，并附加提交注释<br>
05  git remote add origin https://github.com/MsAbby/aStudyReact.git //添加到远程项目，别名为origin<br>
06  git push -u origin master // 把本地源码库push到github 别名为origin的远程项目中，确认提交<br>


# Redux基础

## Redux
01 状态管理： 管理数据状态和UI状态<br>
02 angular 和 vue 也可以用<br>
03 flux 和 redux 关系： redux是flux的升级版本<br>
04 工作流程：<br>
````
    React Component -> ActionCreaturs -> Store  -> Reducer -> Store -> React Component
````
05 新建文件： src/store/index.js<br>
06 创建仓库： createStore<br>
````
import {createStore} from 'redux'
const store = createStore()
````
07 建立reducer： src/store/reducer.js<br>

## 从 Store 中获取 state 一般采用下面的方式
01 store.getState<br>

## redux 插件- redux DevTools
01 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()<br>

## ant design
01 行内样式： 小驼峰



