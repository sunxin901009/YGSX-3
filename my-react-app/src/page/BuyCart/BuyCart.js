import React,{Component} from 'react';
import CartBox from "./add";
import CartList from "./addList";
import getList from "../../api/buyCart";
import add from "../../api/buyAdd";
import buyList from "../../api/buyList"
import "./index.less";
import remove from "../../api/remove";
export default class extends Component {
    constructor () {
        super();
        this.state = {
            fruits:[],
            buyCart:[]
        };
    }
    componentDidMount () {
       getList().then((data)=>{
           console.log(data);
           this.setState({fruits:data.lists})
       });
        this.zhixin()
    }
    zhixin=()=>{
        buyList().then((data)=>{
            this.setState({...this.state,buyCart:data})
        })
    };
    handleAdd=(id)=>{
        add(id).then((data)=>{this.setState({...this.state,buyCart:JSON.parse(data)})})
    };
    remove=(id)=>{
        remove(id).then((data)=>{
            // console.log(id);
            // console.log(data);
            // console.log(this.state.buyCart);
            this.setState({...this.state,buyCart:JSON.parse(data)})
        });
    };
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
                    {this.state.buyCart.length>0?<CartList
                        buyCart={this.state.buyCart}
                        remove={this.remove}
                    />:<CartBox/>}
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
                                                <span className="right" onClick={()=>this.handleAdd(item.id)}></span>
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