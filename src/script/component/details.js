import React from "react"

import fetchData from '../util/util.fetch.js'
import { Link } from 'react-router'
import Alert from '../../component_dev/alert/src'
import Carousel from '../../component_dev/carousel/src/'
import Scroller from '../../component_dev/scroller/src/'


class Details extends React.Component{
	constructor (props) {
	    super(props);
	    this.one = this.one.bind(this);
	    this.two = this.two.bind(this);
	    this.addGoods = this.addGoods.bind(this);
	    this.state = {
	      goodsList:[],
	      currentIndex:1,
	      name:"",
	      price:"",
	      market_price:"",
	      bannerlist:[<div/>]
	    }
	}
	
	one(){
		this.setState({
	        currentIndex:1,
	        goodsList:[]
        })
		let num = this.props.params.id;
		let num2 = num.replace(/^[0-9]{1,}&&/g,"");
		let url2='/api/product/productdetail?device=pc&channel=h5&swidth=1440&sheight=900&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23detail%3Fsid%3D13047%26channel_id%3Dh5&productId='+num2
		
		fetchData(url2, function (res) {
			let reg=/\" style=\"width:100%;display:block;\"\/>$/;
			let re = ""+res.data.graphicDetail
			let rr = re.substring(re.indexOf("<img"),re.indexOf("</div><ul"));
		    let list = rr.replace(reg,"").replace("<img src=\"","").split("\" style=\"width:100%;display:block;\"/><img src=\"")
	   		
	        let Lis = list.map(val=>{
	        	return( <img src={val} />)

	         })
		    this.setState({
		        goodsList:Lis,
		        currentIndex:1
	        })
	    }.bind(this))
	}

	two(){
		this.setState({
	        goodsList:[
	        	<img src="./images/usericon_normal.png"/>
	        ],
	        currentIndex:2
        })
	}
	
	addGoods(){
		var data = localStorage.getItem("user");
		if(!data){
			Alert("请先登录！")
		}else{
			var goodIfo={
				"name" : this.state.name,
			    "price" : this.state.price,
			    "market_price" : this.state.market_price,
			    imgSrc : this.state.bannerlist[0].props.children.props.src
			}
			var goods = JSON.parse(localStorage.getItem("user")).id;
			window.localStorage.setItem(goods,JSON.stringify(goodIfo));
		}
	}

	render(){
		return(
			<div className="m-details">
				<Scroller scrollY={true}>
					<div className="products">
						<div className="swiper">
							<Carousel autoplay={false}>
					            {this.state.bannerlist}
					        </Carousel>
						</div>
						<div className="article">
							<p>{this.state.name}</p>
							<i className="page"><span>￥</span>{this.state.price}</i>
							<i className="s-del">价格：<span>{this.state.market_price}</span></i>
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
						<div className="sumimg">
							{this.state.goodsList}
						</div>
					</div>
				</Scroller>
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
						<Link to="/cart">
							<i className="yo-ico">&#xe6ff;</i>
							<b>购物车</b>
						</Link>
					</p>
					<p className="addCart" onClick={this.addGoods}>加入购物车</p>
				</div>
			</div>
		)
	}
	componentDidMount() {
		
		let num = this.props.params.id;
		let num1 = num.replace(/^&&[0-9]{1,}$/g,"");
		let num2 = num.replace(/^[0-9]{1,}&&/g,"");
		
		
		let url='/api/product/iteminfo?device=pc&channel=h5&swidth=1440&sheight=900&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23detail%3Fsid%3D13047%26channel_id%3Dh5&skuId='+num1
	    fetchData(url, function (res) {
		    let bannerlist = res.data.pics.map(val=>{
		        return(
					<li className="item"><img className="img" src={val} /></li>
				)
		    })
			this.setState({
	        	name: res.data.name,
	        	price: (res.data.price/100).toFixed(2),
	        	market_price: (res.data.market_price/100).toFixed(2),
	        	bannerlist:bannerlist
	      	})
	    }.bind(this))

	    let url2='/api/product/productdetail?device=pc&channel=h5&swidth=1440&sheight=900&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23detail%3Fsid%3D13047%26channel_id%3Dh5&productId='+num2
	    
	    fetchData(url2, function (res) {
			let reg=/\" style=\"width:100%;display:block;\"\/>$/;
			let re = ""+res.data.graphicDetail
			let rr = re.substring(re.indexOf("<img"),re.indexOf("</div><ul"));
		    let list = rr.replace(reg,"").replace("<img src=\"","").split("\" style=\"width:100%;display:block;\"/><img src=\"")
	   		
	        let Lis = list.map(val=>{
	        	return( <img src={val} />)

	         })
		    this.setState({
	        	goodsList: Lis
	      	})
	    }.bind(this))
	}
  	
}
export default Details
