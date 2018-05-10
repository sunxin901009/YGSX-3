<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom';

=======
import React, { Component } from 'react';
>>>>>>> 96953a86fd16ff93535135335b13981722493a0a
import ReactSwipe from 'react-swipe';
import 'swipe-js-iso';
export default class Slider extends Component {
    state = {
<<<<<<< HEAD
        index: 0,
        slider:[]
    };
    componentDidMount(){
        axios.get('/slider').then(data=>{
            this.setState({...this.state,slider:data})
        })
=======
        index:0
>>>>>>> 96953a86fd16ff93535135335b13981722493a0a
    }
    render() {
        let opts = {
            continuous: true, auto: 1000, callback: (index) => {
                this.setState({index});
            }
<<<<<<< HEAD
        };
        return (
=======
        }
        return (<div>
>>>>>>> 96953a86fd16ff93535135335b13981722493a0a
            <div className="home-swiper">


            <ReactSwipe className="carousel" swipeOptions={opts}>
                {this.props.lists.map((item, index) => (

                    <div key={index}>
                        <img src={item} alt=""/>
                    </div>
                ))}
            </ReactSwipe>
            <div className="dots">
                {this.props.lists.map((item, index) => (
                    <span key={index} className={index===this.state.index?'active':''}></span>
                ))}
            </div>

        </div>
            <div className="AD">
            <img src="http://img12.yiguoimg.com/d/items/2018/180509/9710935250281641_1125x344.gif?w=1125&h=344" alt=""/>
            </div>
        </div>)
    }
}