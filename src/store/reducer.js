import {CHANGEVALUE, ADD, DELETE} from './actionType'
// reducer 只能接收state, 不能改变state
const defaultState = {
    imputValue: 'something',
    list: [
        '开会开会开会开会开会',
        '吃饭吃饭吃饭吃饭吃饭',
        '打球打球打球打球打球'
    ]
}
// 暴露出去的匿名方法， 返回的是state
export default ((state = defaultState, action) => {
    if (action.type === CHANGEVALUE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.imputValue = action.value
        return newState
    }
    if (action.type ===ADD) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.imputValue)
        newState.imputValue = ''
        return newState
    }
    if (action.type === DELETE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
})