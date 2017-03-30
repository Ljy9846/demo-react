import React from "react"
import Carousel from '../../../component_dev/carousel/src/'
import fetchData from '../../util/util.fetch.js'
import Scroller from '../../../component_dev/scroller/src/'

class Home extends React.Component{
	constructor (props) {
	    super(props);
	    this.top = this.top.bind(this);
	    this.state = {
	      bannerlist: [<div/>],//轮播
	      homenav:[],//分类
	      newlist:[],//团购产品
	      productlist:[]//产品
	    }
	}
	top(){
		this.refs.bodyBox.scrollTop = 0
	}
	render(){
		return(
			<div className="m-board" ref="bodyBox">
				<div className="swiper">
					<Carousel>
			            {this.state.bannerlist}
			        </Carousel>
				</div>
				<div className="homenav">
					<ul>
						{this.state.homenav}
					</ul>
				</div>
				<div className="new">
					{this.state.newlist}
				</div>
				<div className="product">
					{this.state.productlist}
				</div>
				<div onClick={this.top}>
					<img src="./images/btn_top.png" className="go"/>
				</div>
			</div>
		)
	}
	componentDidMount() {
		//轮播、五个分类
		let ul='/api/common/index?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F'
	    fetch(ul)
	    .then(response=>response.json())
	    .then(res=>{
	    
	    	let bannerlist = res.data.bannerList.map(val=>{
				return(
					<li className="item"><img className="img" src={val.image} /></li>
				)
			})
	    	let homenav = res.data.subButtonList.map(val=>{
				return(
					<li key={val.id}>
						<img src={val.icon}/>
						<p>{val.label}</p>
					</li>	
				)
			})
	    	let newlist = res.data.marketingActivities.map(val=>{
				return(
					<a key={val.id} href={val.jump_url}>
						<img src={val.icon}/>
					</a>
				)
			})
	      	this.setState({
		        bannerlist:bannerlist,
		        homenav:homenav,
			    newlist:newlist
	        })
	    })
	    //商品列表
	    let url2='/api/product/recommendproducts?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F&needPagination=1&pageNum=2&pageLimit=20'
	    fetchData(url2, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let skuInfo= val.skuInfo.price/100;
		    	let market_price= val.skuInfo.market_price/100;
		        return(
					<a href={val.skuInfo.skuThumbnail	}>
						<img src={val.skuInfo.skuThumbnail} />
						<div className="product-right">
							<h3>{val.skuInfo.name}</h3>
							<p><i>￥</i>{ skuInfo }<s>{ market_price }</s></p>
							<img src="./images/button_shopCart.png"/>
						</div>
					</a>
				)
		      
		    })
		    this.setState({
	        	productlist: Lis
	      	})
	    }.bind(this))
	}
}
  
export default Home
