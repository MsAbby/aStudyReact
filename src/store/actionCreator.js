
import {CHANGEVALUE, ADD, DELETE} from './actionType'

// 派发的方法集中写在一起，否则每个页面都写上会比较乱
export const changeInputAction =  (val) =>({
    type: CHANGEVALUE,
    value: val
}) 
export const changeAddAction =  (val) =>({
    type: ADD
}) 
export const changeDeleteAction =  (val) =>({
    type: DELETE,
    index: val
}) 