import React,{Component} from 'react';
import getList from "../../api/buyCart"
import "./index.less";
export default class extends Component {
    constructor () {
        super();
        this.state = {
            fruits:[]
        };
    }
    componentDidMount () {
       getList().then((data)=>{
           console.log(data);
           this.setState({fruits:data.lists})
       })
    }

    render () {
        return (
            <div className="cart-new">
                <div className="cart-login">
                    登录可同步购物车内商品
                    <a href="javascript:;" className="line-all">登录</a>
                </div>
                <div className="cart-express">
                    全场满100元包邮，还差
                    <span className="red">100.00</span>
                    元包邮
                </div>
                <div className="cart-wrap">
                    <div className="cart-box">
                        <div className="cart-icon iconfont icon-cart"></div>
                        <p>购物车空空的，快去逛逛吧！</p>
                        <div className="cart-btn">
                            <a href="javascript:;">去逛逛</a>
                        </div>
                    </div>
                    <div className="buyFooter">
                        <div className="title">
                            <h2>猜你喜欢</h2>
                        </div>
                        <div className="cart-list">
                            <ul className="one">
                                {this.state.fruits.map((item,index)=>(
                                    <li key={index}>
                                            <img src={item.url} alt=""/>
                                            <p>{item.title}</p>
                                            <p className="one-footer">
                                                <span className="left">￥{item.price}</span>
                                                <span className="right"></span>
                                            </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="buyEnd"></div>
                    </div>
                </div>
            </div>
        )
    }
}