import { createStore, applyMiddleware, compose } from 'redux'
import reducer from'./reducer'
import thunk from 'redux-thunk' 
// import createSagaMiddleware from 'redux-saga'
// import MySaga from'./mysaga'
// const sagaMiddleware = createSagaMiddleware()

// 增强函数(compose )
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}): compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
//引入可视化工具 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 创建仓库
// 生成store之后要暴露出去
// createStore 只接收两个参数（1.reducer, 2.增强函数包括devtools和中间件）
const store = createStore(
    reducer, // reducer
    enhancer // 增强函数
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
sagaMiddleware.run(MySaga)
export default store