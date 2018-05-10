import React, { Component } from 'react';
import {router,Link} from 'react-router-dom';
import TabBar from '../../components/TabBar/TabBar';
// import Lists from "./Kind-detail";
import axios from "../../api/index"
export default class Kind extends Component {
    constructor(){
        super();
        this.state = {fruit:[]}
    }
    options(){

    }
    componentDidMount(){
        axios.get('/classify').then((data)=>{
            this.setState({fruit:data});
        });
    }
    render(){
        return(
            <div className="kind">
                <div className="kind-seek">
                    <i className="icon iconfont icon-magnifier"></i>
                    <input type="text" placeholder="请输入商品名称"/>
                    <span>搜索</span>
                </div>
                <div  className="kind-nav">
                    <ul>
                        <li className="action">进口水果</li>
                        <li>国产水果</li>
                        <li>精选肉类</li>
                        <li>禽类蛋品</li>
                        <li>海鲜水产</li>
                        <li>即烹美食</li>
                        <li>乳品糕点</li>
                        <li>新鲜蔬菜</li>
                        <li>方便速食</li>
                        <li>粮油杂货</li>
                        <li>饮料酒水</li>
                        <li>礼品礼券</li>
                    </ul>
                    <div className="kind-list">
                        {
                            this.state.fruit.map((item,index)=>(
                                <Link to="/kind/list"
                                    className="photograph"
                                     key={index}
                                >
                                    <img src={item.url} alt=""/>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                    <TabBar/>
                </div>
            </div>
        )
    }
}
import './Kind.less';