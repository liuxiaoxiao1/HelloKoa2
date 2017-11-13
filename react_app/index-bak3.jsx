import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter,
    Router,
    Link,
    HashRouter,
    hashHistory,
    IndexLink,
    Route,
    Switch,
    Prompt
} from 'react-router-dom'

import RouteMap from './router/routeMap'

import './static/css/common.less'
import './static/css/test2.less'

const getConfirmation = () => {
    console.log(999);
}

const Home = (props) => {
    console.log(props, 'home');
    return <h1>Home page</h1>
}
const Home2 = (props) => {
    console.log(props, 'home');
    console.log('test',props.match.params.id);
    return <h1>Home page33</h1>
}

const RouteConfigExample = () => (
    <BrowserRouter basename="/minooo" forceRefresh={false} getUserConfirmation={getConfirmation()} keyLength={12}>
        <div>
            <Link to="/xiaoxiao">Home</Link>
            <a href="/minooo/xiaoxiao">啊哈哈哈</a>
            <Switch>
                <Route exact={false} strict={true} path="/xiaoxiao" component={Home}></Route>
                <Route exact path="/list/:id" component={Home2}></Route>
                <Route exact path="*" component={Home2}></Route>
                <Prompt message="确定要离开？" when={true} />
            </Switch>
        </div>

    </BrowserRouter>
)


render(
    <RouteConfigExample />,
    document.getElementById('root')
)

