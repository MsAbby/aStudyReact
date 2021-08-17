import React from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';

// 这是有状态组件
// class NoStateComponent extends Component {

// }

// 无状态组件
const NoStateComponent = (props) => {
    return (
        <div>
            <div style={{margin: '10px'}}>
                <Input
                    placeholder="something"
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={props.handelChange}
                    value={props.imputValue}></Input>
                <Button type="primary" onClick={props.handelBtn}>增加</Button>
            </div>
            <div style={{width: '300px'}}>
                <List
                    bordered
                    dataSource={ props.list }
                    renderItem={(item, index) => (
                        <List.Item onClick={()=>{ props.handelDelete(index)}}>{item}</List.Item>
                    )}>
                </List>
            </div>
        </div>
    )
}
export default NoStateComponent