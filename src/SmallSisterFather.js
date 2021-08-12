import React, {Component, Fragment} from 'react'
import './SmallSister.css'
import SmallSisterItem from './SmallSisterItem'

class SmallSisterFather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背', '脚底按摩']
        }
    }
    render() {
        return (
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
                <SmallSisterItem content={this.state.list} deleteList={this.deleteList.bind(this)}></SmallSisterItem>
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

export default SmallSisterFather
