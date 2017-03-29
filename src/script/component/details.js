import React from "react"

import fetchData from '../util/util.fetch.js'




class Cart extends React.Component{
	constructor (props) {
	    super(props);
	    this.one = this.one.bind(this);
	    this.two = this.two.bind(this);
	    this.state = {
	      productlist:[],
	      goodsList:[<h1>测试此处请求数据</h1>],
	      currentIndex:1
	    }
	}
	
	one(){
		this.setState({
	        goodsList:[
	        	<h1>测试此处请求数据</h1>
	        ],
	        currentIndex:1
        })
	}

	two(){
		this.setState({
	        goodsList:[
	        	<h1>质量保证，请放心购买！！</h1>
	        ],
	        currentIndex:2
        })
	}


	render(){
		return(
			<div className="m-details">
				<div className="product">
					<div className="swiper">
						<img src=""/>
					</div>
					<div className="article">
						<p>【包邮】波沽屋闽台手造夹酱麻薯多口味混合500克*3</p>
						<i className="page"><span>￥</span>29.90</i>
						<i className="s-del">价格：<span>89.70</span></i>
						<span className="cun">库存974件</span>
					</div>
					<div className="cuxiao">
						<img src="./images/cuxiaotag.png"/> 本商品满1件包邮
					</div>
					<ul className="renzheng">
						<li>
							<img src="./images/zhengpin.png"/>
							<p>正品保证</p>
						</li>
						<li>
							<img src="./images/picc.png"/>
							<p>PICC承保</p>
						</li>
						<li>
							<img src="./images/fahuo.png"/>
							<p>48小时内发货</p>
						</li>
						<li>
							<img src="./images/shouhou.png"/>
							<p>售后无忧</p>
						</li>
					</ul>
					<div className="evaluation">
						<span>评价菜单</span>
						<span className="too">暂无评论></span>
					</div>
					<div className="tu">
						<p onClick={this.one} className={this.state.currentIndex==1?'red':''}>图文详情</p>
						<p onClick={this.two} className={this.state.currentIndex==2?'red':''}>服务保障</p>
					</div>
					<section>
						{this.state.goodsList}
					</section>
				</div>
				<div className="fixed_footer">
					<p>
						<i className="yo-ico one">&#xe681;</i>
						<b>客服</b>
					</p>
					<p>
						<i className="yo-ico">&#xe607;</i>
						<b>收藏</b>
					</p>
					<p>
						<i className="yo-ico">&#xe6ff;</i>
						<b>购物车</b>
					</p>
					<p className="addCart">加入购物车</p>
				</div>
			</div>
		)
	}
	componentDidMount() {

	}
  	
}
export default Cart
