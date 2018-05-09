
import ReactDom from 'react-dom';
import React, { Component } from 'react';
import {render} from 'react-dom'
import Header from './Header'
import  Slider from './Slider'

export default class Home extends Component {
  
    render(){
        return(
            <div>
                <Header/>
                <Slider/>
            </div>
        )
    }
}
