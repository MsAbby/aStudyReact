## React学习
01 组件化开发， 复用性好<br>
02 无需关注dom, 直接关注数据， 数据驱动<br>

## JSX
01 是javascript 和 xml的结合， 虚拟dom ， 当遇到< 当html解析， 当遇到 { 当javascript 解析<br>
02 总结： 可以在react Javascript 中写html 代码<br>
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
03 赋值： this.setState({<br>
            key: value<br>
         })<br>


01 触发 onClick<br>
02 onClick={this.btnClick.bind(this)}<br>
03 数组赋值: this.setState({<br>
                key: [...value, value2]<br>
            })<br>

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

## 将本地存在项目一次性push至远程仓库
01  touch README.md //新建说明文件<br>
02  git init // 生成本地git管理,并建立一个隐藏.git目录<br>
03  git add . //添加当前目录中的所有文件到索引<br>
04  git commit -m "first commit" //提交到本地源码库，并附加提交注释<br>
05  git remote add origin https://github.com/MsAbby/aStudyReact.git //添加到远程项目，别名为origin<br>
06  git push -u origin master // 把本地源码库push到github 别名为origin的远程项目中，确认提交<br>
