// 写法一： 解构赋值(ES6)
import React, {Component} from 'react'
// 写法二： 传统
// import React from 'react'
// const Component = React.Component

// 写一个类， 继承Component

// jsx写法
class App extends Component {
  render() {
    return (
      <div>
        <ul className="my-list">
          <li>hello</li>
          <li>world</li>
          <li>{true? 'aaaaa': 'sdfsdf'}</li>
        </ul>
      </div>
    )
  }
}

// 传统写法
// var li1 = React.createElement('li', null, 'hello')
// var li12 = React.createElement('li', null, 'world')
// var root = React.createElement('ul', {className: 'my-list'}, li1, li2)

export default App