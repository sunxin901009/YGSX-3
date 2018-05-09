
import React, { Component } from 'react';
import {render} from 'react-dom'
import axios from '../../../node_modules/axios/dist/axios'
export default class homeLittleList extends Component {
    constructor(){
        super();
        this.state={fruit:[]}
    }
    componentDidMount(){

        axios.get('').then(data=>{
            this.setState({state:data})
        })
    }
    render(){
        return(
            <div className=''>
                <ul>
                    {
                        this.state.fruit.map((item,index)=>(
                            <div>

                            </div>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}