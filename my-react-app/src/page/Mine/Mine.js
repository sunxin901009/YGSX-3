import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './Mine.css'
let a=require('./img/1.jpg');
export default class Mine extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='my-header'>
                <div className='my-log'>
                    <i className='my-set'></i>
                    <div className=''>
                        <img className="my-lo" src={a} alt=""/>
                        <NavLink to="/disembark"><p className="my-deng">注册/登录</p></NavLink>
                    </div>
                </div>
                <div className='my-1'>
                    <div className='my-2'>
                        <span>-</span>
                        <span>账户余额</span>
                    </div >
                    <div className='my-2'>
                        <span>-</span>
                        <span>优惠券</span>
                    </div>
                    <div className='my-2'>
                        <span>-</span>
                        <span>悠币</span>
                    </div>

                </div>
                <ul className="my-n">
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                </ul>
                <ul className="my-n">
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                    <li>
                        <img className='my-lg' src="http://weixin.m.yiguo.com/Images/catimg/czk.png" alt=""/>
                        <i className='ny-lh'>微支付</i>
                    </li>
                </ul>
            </div>)
    }
}


