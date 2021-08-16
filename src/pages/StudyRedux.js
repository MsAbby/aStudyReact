import React, { Component } from 'react';
import './StudyRedux.css'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';
import store from '../store/index.js';

// 用ant-design todo list
class StudyRedux extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
        this.state = store.getState()
        
       
        this.handelChange = this.handelChange.bind(this)
        // 订阅后调用函数-新版本不用这一步
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.handelBtn = this.handelBtn.bind(this)
    }
    render() {
        return (
            <div>
                <div style={{margin: '10px'}}>
                    <Input
                        placeholder="something"
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={this.handelChange}
                        value={this.state.imputValue}></Input>
                    <Button type="primary" onClick={this.handelBtn}>增加</Button>
                </div>
                <div style={{width: '300px'}}>
                    <List
                        bordered
                        dataSource={ this.state.list }
                        renderItem={(item, index) => (
                            <List.Item onClick={this.handelDelete.bind(this, index)}>{item}</List.Item>
                        )}>
                    </List>
                </div>
            </div>
        )
    }
    handelChange(e) {
        const action = {
            type: 'CHANGEVALUE',
            value: e.target.value
        }
        store.dispatch(action)
    }
    // 改变状态
    storeChange() {
        this.setState(store.getState())
    }
    // 按钮点击handelBtn
    handelBtn() {
        const action = {
            type: 'ADDITEM'
        }
        store.dispatch(action)
    }
    handelDelete(index) {
        console.log(index)
        const action = {
            type: 'DELETE',
            index: index
        }
        store.dispatch(action)
    }
}
export default StudyRedux