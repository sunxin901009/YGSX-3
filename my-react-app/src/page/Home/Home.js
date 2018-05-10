import ReactDom from 'react-dom';
import React, { Component } from 'react';









export default class Home extends Component {

    render(){
        return(


import Header from './Header';
import Slider from './Slider';
import HomeLittleList from './HomeLittleList';
import RunLeft from './RunLeft';
import RunRight from './RunRight';
import BotList from './BotList';
import GoTop from './GoTop';
import './Home.less';

import { getSlider } from "../../api/home";
export default class Home extends Component {
    constructor() {
        super();
        this.state = {slider: []}
    }

    getData = () => {
        getSlider().then((data) => {
            this.setState({slider: data});
        });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <Header/>
<<<<<<< HEAD
                <div className='content'>
=======

>>>>>>> 453ae0dcda8bfb8564d82cb3193ad403cde8a78e
                {this.state.slider.length > 0 ?
                    <Slider lists={this.state.slider}/> : "加载中"}
                <HomeLittleList/>
                <RunLeft/>
                <RunRight/>
                <BotList/>
                <GoTop/>
                </div>
            </div>
        )
    }}
