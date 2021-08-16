import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';

// 组件化传参数
// 用ant-design todo list
class StudyReduxChild extends Component {
    render() {
        return (
            <div>
                <div style={{margin: '10px'}}>
                    <Input
                        placeholder="something"
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={this.props.handelChange}
                        value={this.props.imputValue}></Input>
                    <Button type="primary" onClick={this.props.handelBtn}>增加</Button>
                </div>
                <div style={{width: '300px'}}>
                    <List
                        bordered
                        dataSource={ this.props.list }
                        renderItem={(item, index) => (
                            <List.Item onClick={()=>{ this.props.handelDelete(index)}}>{item}</List.Item>
                        )}>
                    </List>
                </div>
            </div>
        )
    }
}
export default StudyReduxChild