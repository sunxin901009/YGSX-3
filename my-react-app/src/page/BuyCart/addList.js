import React,{Component} from "react";


export default class CartList extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="cart-listBox" >
                <div className="cartList">
                    <ul>
                        {this.props.buyCart.map((item,index)=>(
                            <li key={index}>
                                <div className="check"></div>
                                <div className="img">
                                    <img src={item.url} alt=""/>
                                </div>
                                <div className="text">
                                    <h2>{item.title}</h2>
                                    <span></span>
                                    <p>￥{item.price}</p>
                                </div>
                                <div className="del iconfont icon-shanchu" onClick={()=>this.props.remove(item.id)}></div>
                                <div className="num">
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="computed">
                    <div className="check">
                        <i></i>
                        全选
                    </div>
                    <div className="text">
                        <p>
                            合计(不含运费)：
                            <b>
                                ￥:
                            </b>
                        </p>
                        <span>
                            已优惠: ¥
                            0.00
                        </span>
                    </div>
                    <div className="btn">
                        <a href="javascript:;">
                            去结算(3)
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}