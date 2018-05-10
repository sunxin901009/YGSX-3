import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class List extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='kind-list'>
                {
                    this.props.fruit.map((item, index) => (
                        <Link to="/kind/list"
                            className="photograph"
                            key={index}
                        >
                            <img src={item.url} alt="" />
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        )
    }
}