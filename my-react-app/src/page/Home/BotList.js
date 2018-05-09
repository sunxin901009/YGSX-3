
import React, {Component} from 'react';
import {render} from 'react-dom'
import axios from '../../api/index'
import './index.less'

export default class BotList extends Component {
    constructor() {
        super();
        this.state = {rowList: []}
    }

    componentDidMount() {
        axios.get('/fruit?offset=0&limit=5').then(data => {
            this.setState({rowList: data.lists});
            console.log(this.state.rowList);
        });

    }

    render() {
        return (
            <div className='outer-list'>
                <div className='row-out-list'>
                    <ul className='row-oul-list'>
                        {
                            this.state.rowList.map((item, index) => (
                                <li className='bot-row-list' key={index}>
                                    <img className='bot-list-pic' src={item.url} alt=""/>
                                    <div className='bot-list'>
                                        <p>{item.title}</p>
                                        <span className='left-span'>￥{item.price}</span>
                                        <span>{item.count}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}