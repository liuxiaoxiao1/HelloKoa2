import React from 'react'
import { Link } from 'react-router'
// import { DatePicker } from 'antd'


class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>
                <Link to="/list">to list</Link>
                {/*<DatePicker/>*/}
            </div>
        )
    }
}

export default Home