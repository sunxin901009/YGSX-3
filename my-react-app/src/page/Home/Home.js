
import ReactDom from 'react-dom';
import React, { Component } from 'react';
import {render} from 'react-dom'
import Header from './Header'
import  Slider from './Slider'
import HomeLittleList from './HomeLittleList'
import  RunLeft from './RunLeft'
import  RunRight from './RunRight'
import BotList from './BotList'
import GoTop from './GoTop'


export default class Home extends Component {

    render(){
        return(
            <div>
                <Header/>
                <Slider/>
                <HomeLittleList/>
                <RunLeft/>
                <RunRight/>
                <BotList/>
                <GoTop/>
            </div>
        )
    }
}
