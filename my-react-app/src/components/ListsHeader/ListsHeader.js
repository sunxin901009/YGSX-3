import React,{Component} from 'react';
import './index.less';
export default class ListsHeader extends Component{
    render(){
        return(
            <div className='lists'>
            <div className='listsHeader'>

                <i> &lt; </i>
                <div className='input-list'>
                    <i className='iconfont icon-sousuo'></i>
                    <p className='ip-list'>请输入商品名称</p>
                </div>

            </div>

            </div>)
    }
}