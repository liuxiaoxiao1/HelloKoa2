/**
 * Created by liuxiaoxiao1 on 2017/11/3.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'


class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
        this.state = {
            index: 0
        }
    }
    render() {
        var me = this;
        var opt = {
            auto: 2000,
            callback: function (index) {
                console.log('index', index)
                me.setState({index: index});
            }
        }
        return (
            <div>
                <ReactSwipe className='carousel' swipeOptions={opt}>
                    <div>11</div>
                    <div>22</div>
                    <div>33</div>
                </ReactSwipe>
                <div>
                    <li className={this.state.index == 0 ? 'selected' : ''}></li>
                    <li className={this.state.index == 1 ? 'selected' : ''}></li>
                    <li className={this.state.index == 2 ? 'selected' : ''}></li>
                </div>
            </div>

        )
    }
}

export default Category