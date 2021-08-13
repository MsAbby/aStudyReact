import React, { Component } from 'react'
import './Animate.css'
import { CSSTransition } from 'react-transition-group'

class Animations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return (  
            <div>
                {/* classNames: css样式 ， in: 是开关, unmountOnExit: 结束时删除dom*/}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit>
                    <div className={this.state.isShow? 'show': 'hide'}> 孙悟空 </div>
                </CSSTransition>
                <div>
                    <button onClick={this.toToggole}>
                        召唤
                    </button>
                </div>
            </div>
        );
    }

    toToggole() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Animations;