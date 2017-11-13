import React from 'react'


import Category from '../components/category'

import '../components/category/index.less'


class App extends React.Component {
    render() {
        var opt = {
            auto: 2000,
            callback: function (index) {
                console.log('index', index)
            }
        }
        return (
            <div>
                <Category />
                <i className="icon-search"></i>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default App