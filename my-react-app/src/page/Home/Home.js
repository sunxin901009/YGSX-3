
import ReactDom from 'react-dom';
import React, { Component } from 'react';
import {render} from 'react-dom'
import Header from './Header'
<<<<<<< HEAD
import  Slider from './Slider'
import HomeLittleList from './HomeLittleList'
import  RunLeft from './RunLeft'
import  RunRight from './RunRight'
import BotList from './BotList'
import GoTop from './GoTop'


export default class Home extends Component {

=======
import axios from '../../api'
import Slider from './Slider'
export default class Home extends Component {
>>>>>>> 5fdde48b3130c0baa58526f444389fb96b2acf80
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
