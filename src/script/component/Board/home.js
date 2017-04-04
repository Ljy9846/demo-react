import React from "react"
import Carousel from '../../../component_dev/carousel/src/'
import fetchData from '../../util/util.fetch.js'
import Scroller from '../../../component_dev/scroller/src/'
import { Link } from 'react-router'
class Home extends React.Component{
	constructor (props) {
	    super(props);
	    this.state = {
	      bannerlist: [<div/>],//轮播
	      homenav:[],//分类
	      newlist:[],//团购产品
	      productlist:[],//产品
	      i:2
	    }
	}
	render(){
		return(
			<div className="home" ref="oo">
				<Scroller
				    ref="scroller"
				    usePullRefresh={true}
				    momentum={true}
				    onRefresh={() => {
					    //下啦 刷新
					    let url2='/api/product/recommendproducts?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F&needPagination=1&pageNum=1&pageLimit=10'
					    fetchData(url2, function (res) {
						    res.data.list.map(val=>{})
							this.refs.scroller.stopRefreshing(true); 
					    }.bind(this))// 这个调用也可以放在异步操作的回调里之后
					    
				    }}
				    useLoadMore={true}
				    onLoad={() => {
				    	let p=this.state.i
				        //上啦加载更多
					    let url2='/api/product/recommendproducts?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F&needPagination=1&pageNum='+p+'&pageLimit=10'
					    fetchData(url2, function (res) {
						    let Lis = res.data.list.map(val=>{
						    	let skuInfo= val.skuInfo.price/100;
						    	let market_price= val.skuInfo.market_price/100;
						    	let skuId = val.skuInfo.skuId;
		    					let product_id = val.skuInfo.product_id;
						        return(
						        	<Link to={"/details/"+skuId+"&&"+product_id}>
										<div href={val.skuInfo.skuThumbnail	}>
											<img src={val.skuInfo.skuThumbnail} />
											<div className="product-right">
												<h3>{val.skuInfo.name}</h3>
												<p><i>￥</i>{ skuInfo }<s>{ market_price }</s></p>
												<Scroller.LazyImage height="100" src="./images/button_shopCart.png"/>
											</div>
										</div>
									</Link>
								)
						      
						    })
						    this.setState({
					        	productlist: this.state.productlist.concat(Lis),
					        	i:p+1
					      	})
						    
							 this.refs.scroller.stopLoading(true); // 这个调用也可以放在异步操作的回调里之后
					    }.bind(this))// 这个调用也可以放在异步操作的回调里之后
				
				       
				    }}
				>		
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
						<div className="product1">
							{this.state.productlist}
						</div>
				</Scroller>
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
					<li className="item"><Scroller.LazyImage height="100" className="img" src={val.image} /></li>
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
						<Scroller.LazyImage height="100" src={val.icon}/>
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
	    let url2='/api/product/recommendproducts?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F&needPagination=1&pageNum=1&pageLimit=10'
	    fetchData(url2, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let skuInfo= val.skuInfo.price/100;
		    	let market_price= val.skuInfo.market_price/100;
		    	let skuId = val.skuInfo.skuId;
		    	let product_id = val.skuInfo.product_id;
		        return(
		        	
		        	<Link to={"/details/"+skuId+"&&"+product_id}>
					<div>
						<Scroller.LazyImage height="100" src={val.skuInfo.skuThumbnail} />
						<div className="product-right">
							<h3>{val.skuInfo.name}</h3>
							<p><i>￥</i>{ skuInfo }<s>{ market_price }</s></p>
							<img src="./images/button_shopCart.png"/>
						</div>
					</div>
					</Link>
				)
		      
		    })
		    this.setState({
	        	productlist: Lis
	      	})
	    }.bind(this))
	}
}
  
export default Home
