import React, { Component } from 'react';
import store from '../store/index.js';
import {changeInputAction, changeAddAction, changeDeleteAction} from'../store/actionCreator'
import StudyReduxChild from './StudyReduxSplitChild'

// 用ant-design todo list
class StudyRedux extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
       
        this.handelChange = this.handelChange.bind(this)
        // 订阅后调用函数-新版本不用这一步
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.handelBtn = this.handelBtn.bind(this)
        this.handelDelete = this.handelDelete.bind(this)
    }
    render() {
        return (
            <StudyReduxChild
                inputValue = {this.state.imputValue}
                handelChange = {this.handelChange}
                handelBtn = {this.handelBtn}
                list = {this.state.list}
                handelDelete={this.handelDelete}
            ></StudyReduxChild>
        )
    }
    handelChange(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    // 改变状态
    storeChange() {
        this.setState(store.getState())
    }
    // 按钮点击handelBtn
    handelBtn() {
        const action = changeAddAction()
        store.dispatch(action)
    }
    handelDelete(index) {
        const action = changeDeleteAction(index)
        store.dispatch(action)
    }
}
export default StudyRedux