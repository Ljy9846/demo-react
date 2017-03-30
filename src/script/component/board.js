import React from "react"
import Carousel from '../../component_dev/carousel/src/'
import fetchData from '../util/util.fetch.js'
import Scroller from '../../component_dev/scroller/src/'

class Board extends React.Component{
	constructor (props) {
	    super(props);
	    this.top = this.top.bind(this);
	    this.state = {
	      scolist:[],//横向导航
	      bannerlist: [<div/>],//轮播
	      homenav:[],//分类
	      newlist:[],//新产品
	      productlist:[]//产品
	    }
	}
	top(){
		this.refs.bodyBox.scrollTop = 0
	}
	render(){
		return(
			<div className="m-board" ref="bodyBox">
				<Scroller scrollX={true} scrollY={false}>
					{this.state.scolist}
				</Scroller>
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
					<img src="./image/btn_top.png" className="go"/>
				</div>
			</div>
		)
	}
	componentDidMount() {
		
			
		//横向导航、轮播、五个分类
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
	    	console.log(res.data.topNavigateList.list)
	    	let scolist = res.data.topNavigateList.list.map(val=>{
				return(
					<a href={val.jump_url}>
						{val.label}
					</a>
				)
			})
	      	this.setState({
		        bannerlist:bannerlist,
		        homenav:homenav,
			    newlist:newlist,
			    scolist:scolist
		       
	        })
	    })
	    //商品列表
	    let url2='/api/product/recommendproducts?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F&needPagination=1&pageNum=1&pageLimit=20'
	    fetchData(url2, function (res) {
		    let Lis = res.data.list.map(val=>{
		        return(
					<a href={val.skuInfo.skuThumbnail	}>
						<img src={val.skuInfo.skuThumbnail} />
						<div className="product-right">
							<h3>{val.skuInfo.name}</h3>
							<p><i>￥</i>{val.skuInfo.price/100}<s>{val.skuInfo.market_price/100}</s></p>
							<img src="./images/button_shopCart.png"/>
							<img src="./image/button_shopCart.png"/>
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
export default Board
