
import ReactDom from 'react-dom';
import React, { Component } from 'react';
import {render} from 'react-dom';
import Header from './Header';
import  Slider from './Slider';
import HomeLittleList from './HomeLittleList';
import  RunLeft from './RunLeft';
import  RunRight from './RunRight';
import BotList from './BotList';
import GoTop from './GoTop';
import './Home.less';
import axios from '../../api';
import {getSlider} from "../../api/home";
export default class Home extends Component {
    constructor(){
        super();
        this.state={slider:[]}
    }
    getData=()=>{
        getSlider().then((data) => {
            this.setState({slider:data});
        });
    };
    componentDidMount() {
        this.getData();
    }
    render(){
        return(
            <div>
                <Header/>
                <div className='content'>
                {this.state.slider.length > 0 ?
                    <Slider lists={this.state.slider} /> : "加载中"}
                <HomeLittleList/>
                <RunLeft/>
                <RunRight/>
                <BotList/>
                <GoTop/>
                </div>
            </div>
        )
    }
}
