import React from "react"
import { Link } from 'react-router'
import Kind from './kind.js'
class My extends React.Component {
  render() {
    return (
      <div className="m-my">
    	{/*<Link to="/loginIn">*/}
	    	<div className="myIcon">
				<div className="imgCtn">
					<img src="images/usericon_normal.png" alt=""/>
				</div>
				<span className="loginStatus">未登录</span>
				<span className="useMsg">账户、收货地址管理 ></span>
	    	</div>
    	{/*</Link>*/}

    	<div className="myOrd">
			<div className="header">
				<i className="yo-ico">&#xe60f;</i>
				<span className="hdLft">我的订单</span>
				<span className="hdRit">查看全部订单<i>></i></span>
			</div>
			<ul className="list">
				<li>
					<span className="yo-ico">&#xe60b;</span>
					<span>代付款</span>
				</li>
				<li>
					<span className="yo-ico">&#xe608;</span>
					<span>待收货</span>
				</li>
				<li>
					<span className="yo-ico">&#xe681;</span>
					<span>待评价</span>
				</li>
				<li>
					<span className="yo-ico">&#xe61d;</span>
					<span>售后</span>
				</li>
			</ul>
    	</div>

		<ul className="pri">
			<li><span className="yo-ico">&#xe642;</span>我的优惠券<i>></i></li>
			<li><span className="yo-ico">&#xe8e8;</span>我的拼团<i>></i></li>
			<li><span className="yo-ico">&#xe632;</span>我的抽奖<i>></i></li>
		</ul>
		
		<ul className="another">
			<li><span className="yo-ico">&#xe607;</span>我的收藏<i>></i></li>
			<li><span className="yo-ico">&#xe612;</span>意见反馈<i>></i></li>
			<li><span className="yo-ico">&#xe689;</span>关于好食期<i>></i></li>
		</ul>
		
		{/*跳转页面*/}
{/*		<div><input type="text" placeholder="请输入手机号"/><span>获取验证码</span></div>
		<input type="text" placeholder="请输入验证码"/>*/}

      </div>
    )
  }
}

export default My