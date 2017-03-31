import React from "react"
import { Link , hashHistory } from 'react-router'
import Kind from './kind.js'

import Alert from '../../component_dev/alert/src';
import {loading} from '../../component_dev/loading/src';

import MyAjax from '../util/util.myAjax.js'

/*class userCenter extends React.Component{
	render(){
		<div className="center">
			<div className="center_header">
				<div></div>
			</div>

		</div>
	}
}*/

class LoginUp extends React.Component{
	handleLoginUp(){
		var userName = this.refs.un.value
		var password = this.refs.pw.value
		console.log("pwd",password)
		console.log("un",userName)
		if(userName && password){
			var url = "http://datainfo.duapp.com/shopdata/userinfo.php"
			var info = {status:"login",userID:userName,password:password}
			loading.show()
			MyAjax("post",url,false,info,function(res){
				if(res==0){
					loading.hide()
					Alert("用户名不存在") 
				}else if(res==2){
					loading.hide()
					Alert("您输入的密码或账号有误") 
				}else if(res){
					var userID={
						"id" : userName
					}
					window.localStorage.setItem("user",JSON.stringify(userID))
					console.log(window.localStorage.getItem("user"))
					loading.hide()
					window.location.hash = '#my'
				}
			})
		}else{
			Alert('请输入登录信息');
		}	
	}

	render(){		
		return (
			<div className="m-my-loginUp">
				<ul>
					<li><input ref="un" className="phoNum" type="text" placeholder="请输入手机号"/></li>
					<li className="authCode">
						<input ref="pw" type="text" placeholder="密码"/>
					</li>
				</ul>
				<span className="submit" onClick={this.handleLoginUp.bind(this)}>登录</span>
				<p>没有账号，我要去<Link to="/my/loginin">注册</Link></p>
			</div>
		)
	}
}

class LoginIn extends React.Component{
	constructor(props){
		super(props);
		/*this.handleSub=this.handleSub.bind(this)*/
		this.state={
			value:""
		}
	}
	handleLoginIn(){
		var userName = this.refs.phNum.value
		var password1 = this.refs.pwd1.value
		var password2 = this.refs.pwd2.value
		
		var phonReg = /[A-Za-z0-9]{4,10}/ 
		var pwdReg = /[A-Za-z0-9]{6,20}/

		if(!phonReg.test(userName)){
			Alert("用户名格式不正确")
		}else{
			if(!pwdReg.test(password1)){
				Alert("密码不符合要求")
			}else{
				if(!this.refs.check.checked){
					Alert("请选择同意")
				}else{
					loading.show()
					if( phonReg.test(userName) && pwdReg.test(password1)){
						if(password1==password2){
							var url = "http://datainfo.duapp.com/shopdata/userinfo.php"
							var info = {status:"register",userID:userName,password:password1}
							MyAjax("post",url,false,info,function(res){
							// console.log("res",res)
								if(res==0){
									Alert("用户名重名")
									loading.hide()
								}else if(res==1){
									var id=userName
									// window.location.hash = '#my?id='+id
									var userID={
										"id" : userName
									}
									window.localStorage.setItem("user",JSON.stringify(userID))
									// console.log(window.localStorage.getItem("user"))
									loading.hide()
									window.location.hash = '#my'
								}else{
									loading.hide()
									Alert("系统异常请重试一次")
								}
							})
						}else {
							Alert("密码输入不一致")
						}
					}
				}
			}
		}
			
	}

	shouldComponentUpdate(){
	}

	componentWillUpdate(){
		
	}

	render(){
		return (
			<div className="m-my-loginIn">
				<ul>
					<li><input className="phoNum" ref="phNum" type="text" placeholder="请输入用户名"/></li>
					<li className="authCode">
						<input type="pwd" ref="pwd1" placeholder="请输入密码（6-20位字母或数字）"/>
					</li>
					<li className="pwd">
						<input className="password" ref="pwd2" type="text" placeholder="请再次输入密码"/>
					</li>
				</ul>
				<span className="submit" onClick={this.handleLoginIn.bind(this)}>注册</span>
				<p>	
					<label >
						<input type="checkbox" ref="check"/>我接受用户协议
					</label>
					，已有账号
					<Link to="my/loginup">登录</Link>
				</p>
			</div>
		)
	}
}

class My extends React.Component{
	constructor(props){
		super(props)
		this.state={
			name:"未登录",
			none:false
		}
	}

	handleOut(){
		if(localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).id){
			var user = JSON.parse(localStorage.getItem("user"))
			localStorage.removeItem("user")
			this.setState({name:"未登录",none:false})
		}
	}

	componentDidMount(){
		if(localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).id){
			var user = JSON.parse(localStorage.getItem("user"))
			 // console.log("use.id",user.id)
			this.setState({name:user.id,none:true})
		}else{
			
		}
	}
	render(){
		return(
			<div className="m-my">
				<div className={this.state.none ? "none" : "yes"}>
			    	<Link className="skip" to="/my/loginup">
				    	<div className="myIcon">
							<div className="imgCtn">
								<img src="images/usericon_normal.png" alt=""/>
							</div>
							<span className="loginStatus">未登录</span>
							<span className="useMsg">账户、收货地址管理 ></span>
				    	</div>
			    	</Link>

			    	<Link to="/my/loginup">
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
					</Link>

					<Link to="/my/loginup">
						<ul className="pri">
							<li><span className="yo-ico">&#xe642;</span>我的优惠券<i>></i></li>
							<li><span className="yo-ico">&#xe8e8;</span>我的拼团<i>></i></li>
							<li><span className="yo-ico">&#xe632;</span>我的抽奖<i>></i></li>
						</ul>
					</Link>

					<Link to="/my/loginup">
						<ul className="another">
							<li><span className="yo-ico">&#xe607;</span>我的收藏<i>></i></li>
							<li><span className="yo-ico">&#xe612;</span>意见反馈<i>></i></li>
							<li><span className="yo-ico">&#xe689;</span>关于好食期<i>></i></li>
						</ul>
					</Link>
				</div>
				
				<div className={this.state.none ? "yes" : "none"}>
					
			    	<div className={this.state.none ? "myIcon" : "myIcon  none"}>
						<div className="imgCtn">
							<img src="images/usericon_normal.png" alt=""/>
						</div>
						<span className="loginStatus">{this.state.name}</span>
						<span className="useMsg">账户、收货地址管理 ></span>
			    	</div>

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
					
					<div className={this.state.none ? "out" : "out  none"}>
						<span onClick={this.handleOut.bind(this)}>注销</span>
					</div>
				</div>

	      	</div>
		)
	}
}
export { My, LoginUp, LoginIn } 