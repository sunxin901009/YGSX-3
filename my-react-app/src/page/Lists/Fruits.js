import React,{Component} from 'react';
import axios from "../../api";
import ListsHeader from '../../components/ListsHeader/ListsHeader';
import './index.less'
export default class Fruits extends Component{
    constructor() {
        super();
        this.state = {fruitsList: []}
    }

    componentDidMount() {
        axios.get('/fruit?offset=0&limit=5').then(data => {
            this.setState({fruitsList: data.lists});
        });

    }

    render(){
        return(<div>
            <ListsHeader>

            </ListsHeader>
            <div className="sort">

                <div sort-attr="new">
                    销量 :
                </div>
                <div sort-attr="time">
                    新品 :
                </div>
                <div sort-attr="price">
                    价格 :
                    <i className="up"></i>
                    <i className="down"></i>
                </div>
            </div>
            <div className='contentList'>
                <ul>
                {
                    this.state.fruitsList.map((item, index) => (
                        <li className='row-list2' key={index}>
                            <img src={item.url} alt=""/>
                            <div className='row-bot2'>
                                <p>{item.title}</p>
                                <span>￥{item.price }</span>
                                <span> {item.count}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>)
    }
}