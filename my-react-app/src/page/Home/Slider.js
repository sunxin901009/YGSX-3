import React from 'react'
import ReactDOM from 'react-dom';

import ReactSwipe from 'react-swipe';
import axios from '../../api'
import './index.less'
export default class Slider extends React.Component {
    state = {
        index: 0,
        slider:[]
    };
    componentDidMount(){
        axios.get('/slider').then(data=>{
            this.setState({...this.state,slider:data})
        })
    }
    render() {
        let ops = {
            continuous: true, auto: 2000, transitionEnd: (index) => {
                this.setState({ index })
            }
        };
        return (
            <div className="home-swiper">
                <ReactSwipe className="carousel" swipeOptions={ops}>
                    {this.state.slider.map((item, index) => (
                        <div key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </ReactSwipe>
                <div className="dots">
                    {this.state.slider.map((item, index) => (
                        <span key={index} className={index === this.state.index ? 'active' : ''}></span>
                    ))}
                </div>
            </div>
        );
    }
}
