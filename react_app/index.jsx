//下面是React-router的代码

import React from 'react'
import { render } from 'react-dom'
import {
    hashHistory
} from 'react-router'

import RouteMap from './router/routeMap'

import './static/css/common.less'
import './static/css/font.css'
import './static/css/test2.less'

import fn from './redux-demo.js'
fn()

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)



//下面是redux的代码

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
//
// import './static/css/common.less'
// import './static/css/test2.less'
//
// // 引用并执行 redux-demo
// // import fn from './redux-demo.js'
// // fn()
//
// import Hello from './containers/Hello'
//
// const store = configureStore()
//
// render(
//     <Provider store={store}>
//         <Hello/>
//     </Provider>,
//     document.getElementById('root')
// )