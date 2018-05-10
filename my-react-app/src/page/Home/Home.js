import ReactDom from 'react-dom';
import React, { Component } from 'react';
import {render} from 'react-dom'
import Header from './Header'
import HomeLittleList from './HomeLittleList'
import  RunLeft from './RunLeft'
import  RunRight from './RunRight'
import BotList from './BotList'
import GoTop from './GoTop'
import axios from '../../api'
export default class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <HomeLittleList/>
                <RunLeft/>
                <RunRight/>
                <BotList/>
                <GoTop/>
            </div>
        )
    }
}
