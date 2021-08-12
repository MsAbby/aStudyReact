import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './SmallSister.css'

class SmallSisterItem extends Component {
    render() {
        return (
            <Fragment>
                <ul>
                    {
                        this.props.content.map((item, index) => {
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

    // 删除
    deleteList(index) {
        console.log(index)
        // 调用父组件方法
        this.props.deleteList(index)
    }
}

// 传值必填
SmallSisterItem.propTypes = {
    content: PropTypes.array.isRequired
}

// 传值默认值
SmallSisterItem.defaultProps = {
    content: []
}



export default SmallSisterItem
