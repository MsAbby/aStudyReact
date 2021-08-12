import React, {Component, Fragment} from 'react'
import './SmallSister.css'

class SmallSister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    render() {
        return (
            // <div>
            //     <div>
            //         <input />
            //         <button>增加服务</button>
            //     </div>
            //     <ul>
            //         <li>头部按摩</li>
            //         <li>精油推背</li>
            //     </ul>
            // </div>
            <Fragment>
                <div>
                    <label htmlFor="logo">增加服务：</label>
                    <input
                        id="logo"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        className="name"/>
                    <button onClick={this.btnClick.bind(this)}>增加服务</button>
                </div>
                {/* jsx */}
                <ul>
                    {
                        this.state.list.map((item, index) => {
                        return (
                            <li 
                                key={index}
                                onClick={this.deleteList.bind(this, index)}
                                dangerouslySetInnerHTML={{__html: item}}
                            >
                            </li>
                            )
                        })
                    }
                  
                </ul>
            </Fragment>
        )
    }

    // 触发方法
    // this 在这里面是不存在的， 如何this 指向正确，需要用到es6
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    // 新增
    btnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }

    // 删除
    deleteList(index) {
        console.log(index)
        var newList = this.state.list
        newList = newList.splice(index, 1)
        console.log(newList)
        this.setState({
            // list: this.state.list.splice(index, 1) // 不允许直接操作state 里面的值
            list: this.state.list
        })
    }
}

export default SmallSister
