import React, { Component } from 'react';
import {router} from 'react-router-dom';
import Footer from '../../components/TabBar/TabBar';
import axios from "../../api/index"
export default class List extends Component {
    constructor() {
        super();
        this.state = {fruit:[]}
    }
    componentDidMount() {
        axios.get('/classify').then((data)=>{
            this.setState({fruit:data});
        });

    }
    render() {
        return (
            <div className="list-detail">
                <div className="list-header">
                    <div className="list-title action">
                        销量
                    </div>
                    <div className="list-title">
                        新品
                    </div>
                    <div className="list-title">
                        价格
                    </div>
                </div>
                <div className="list-content">
                    {
                        this.state.fruit.map((item,index)=>(
                            <div className="photograph"
                                key={index}>
                                <div>
                                    <img src={item.url} alt=""/>
                                </div>
                                <div className="inPro">
                                    <p className="title">{}</p>
                                    <p >{}</p>

                                </div>
                            </div>
                        ))
                    }



                </div>
                <Footer/>
            </div>
        )
    }
}