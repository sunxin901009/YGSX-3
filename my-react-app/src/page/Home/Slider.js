import React, { Component } from 'react';
import {render} from 'react-dom'
import './index.less'
export default class Slider extends Component {
  
    render(){
        return(
            <div className='picture'>
                <img className='slider' src="http://img13.yiguoimg.com/d/items/2018/180423/9288722026013847_1125x652.jpg?w=1125&h=652" alt=""/>
                <img className='pic' src="http://img13.yiguoimg.com/d/items/2018/180503/9710934957630627_1125x344.gif?w=1125&h=344" alt=""/>
            </div>
        )
    }
}