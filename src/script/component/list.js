import React from "react"
import {Link} from "react-router"
import Carousel from '../../component_dev/carousel/src/'
import fetchData from '../util/util.fetch.js'
import Scroller from '../../component_dev/scroller/src/'
import {loading} from '../../component_dev/loading/src'

class List extends React.Component{
	constructor (props) {
	    super(props);
	    this.state = {
	      productlist:[],//产品
	      flag:1
	    }
	   
	}
	
	handleDef(){
		let index = this.props.params.id.replace(":","")-1
		let urls=[
			'/api/product/itemssearch?device=pc&uuid=10886908&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%3Fdevice%3Diphone%26channel%3Dh5%26swidth%3D375%26sheight%3D667%26zoneId%3D857%26v%3D2.1.3%26terminal%3Dwap%26page%3Dhttp%253A%252F%252Fm.haoshiqi.net%252F%26needPagination%3D1%26pageNum%3D8%26pageLimit%3D20%2527%23list%3Fcategoryname%3D%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F%26categoryid%3D1%26channel_id%3Dh5&username=156****0604&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490354050&user_id=10886908&inviteCode=A61EFCX0&userId=10886908&categoryId=1&category=%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F&needPagination=1&pageNum=1&pageLimit=20'
			,'api/product/itemssearch?device=iphone&uuid=10886908&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%3Fdevice%3Diphone%26channel%3Dh5%26swidth%3D375%26sheight%3D667%26zoneId%3D857%26v%3D2.1.3%26terminal%3Dwap%26page%3Dhttp%253A%252F%252Fm.haoshiqi.net%252F%26needPagination%3D1%26pageNum%3D8%26pageLimit%3D20%2527%23list%3Fcategoryname%3D%E9%A5%AE%E6%96%99%E5%86%B2%E8%B0%83%26categoryid%3D2%26channel_id%3Dh5&username=156****0604&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490354050&user_id=10886908&inviteCode=A61EFCX0&userId=10886908&categoryId=2&category=%E9%A5%AE%E6%96%99%E5%86%B2%E8%B0%83&needPagination=1&pageNum=1&pageLimit=20'
		]
	 	let url=urls[index]
	 	loading.show()
	    fetchData(url, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let price =val.skuInfo.price/100;
		    	let market_price=val.skuInfo.market_price/100;
		    	let id = val.id

		        return(
		        	<a >
					<Link to={"/details/"+val.skuInfo.skuId+"&&"+val.skuInfo.product_id}>
						<img src={val.main_sku_pic} />
						<div className="product-right">
							<h3>{val.skuInfo.name}</h3>
							<p><i>￥</i>{ price }<s>{ market_price }</s></p>
							<img onClick={this.handleCart(val.id)} src="images/button_shopCart.png" alt=""/>
						</div>
					</Link>
					</a>
				)
		    })
		    this.setState({
	        	productlist: Lis
	  		})
	  		loading.hide()
		}.bind(this))
	}

	handleSaled(){
			let index = this.props.params.id.replace(":","")-1
			let urls=[
				'api/product/itemssearch?sort=selled&osVersion=4.2.2&location=116.251335,40.116407&udid=00000000-6b1d-fab9-910e-32e832f63b71&net=Wi-Fi&sheight=1280&zoneId=2&pageNum=1&timestamp=1491050322&v=2.2.0&category=%E9%A5%AE%E6%96%99%E5%86%B2%E8%B0%83&terminal=android&swidth=720&page=SearchResultActivity&token=777bfe8e3b9d037e1fe479e1dd693daa&device=H30-U10&needPagination=true&uuid=10889797&pageLimit=10&channel=taobao'
				,'api/product/itemssearch?sort=selled&osVersion=4.2.2&location=116.251353,40.116422&udid=00000000-6b1d-fab9-910e-32e832f63b71&net=Wi-Fi&sheight=1280&zoneId=2&pageNum=1&timestamp=1491044150&v=2.2.0&category=%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F&terminal=android&swidth=720&page=SearchResultActivity&token=777bfe8e3b9d037e1fe479e1dd693daa&device=H30-U10&needPagination=true&uuid=10889797&pageLimit=10&channel=taobao'
			]
		 	let url=urls[index]
		 	loading.show()
		    fetchData(url, function (res) {
			    let Lis = res.data.list.map(val=>{
			    	let price =val.skuInfo.price/100;
			    	let market_price=val.skuInfo.market_price/100;
			    	let id = val.id

			        return(
			        	<a >
						<Link to={"/details/"+val.skuInfo.skuId+"&&"+val.skuInfo.product_id}>
							<img src={val.main_sku_pic} />
							<div className="product-right">
								<h3>{val.skuInfo.name}</h3>
								<p><i>￥</i>{ price }<s>{ market_price }</s></p>
								<img onClick={this.handleCart(val.id)} src="images/button_shopCart.png" alt=""/>
							</div>
						</Link>
						</a>
					)
			    })
			    this.setState({
		        	productlist: Lis
		  		})
		  		loading.hide()
			}.bind(this))
	}

	handlePrc(){
		let index = this.props.params.id.replace(":","")-1
		let urls=[]
		if(this.state.flag){
			this.state.flag=0
			urls=[
				'api/product/itemssearch?sort=price&osVersion=4.2.2&location=116.251353,40.116422&udid=00000000-6b1d-fab9-910e-32e832f63b71&net=Wi-Fi&sheight=1280&zoneId=2&pageNum=1&timestamp=1491044216&v=2.2.0&category=%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F&terminal=android&swidth=720&page=SearchResultActivity&token=777bfe8e3b9d037e1fe479e1dd693daa&device=H30-U10&sortType=0&needPagination=true&uuid=10889797&pageLimit=10&channel=taobao'
				,'api/product/itemssearch?sort=price&osVersion=4.2.2&location=116.251335,40.116407&udid=00000000-6b1d-fab9-910e-32e832f63b71&net=Wi-Fi&sheight=1280&zoneId=2&pageNum=1&timestamp=1491050234&v=2.2.0&category=%E9%80%9F%E9%A3%9F%E8%B0%83%E5%91%B3&terminal=android&swidth=720&page=SearchResultActivity&token=777bfe8e3b9d037e1fe479e1dd693daa&device=H30-U10&sortType=0&needPagination=true&uuid=10889797&pageLimit=10&channel=taobao'
			]

		}else{
			this.state.flag=1
			urls=[
				'api/product/itemssearch?sort=price&osVersion=4.2.2&location=116.251353,40.116422&udid=00000000-6b1d-fab9-910e-32e832f63b71&net=Wi-Fi&sheight=1280&zoneId=2&pageNum=1&timestamp=1491044228&v=2.2.0&category=%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F&terminal=android&swidth=720&page=SearchResultActivity&token=777bfe8e3b9d037e1fe479e1dd693daa&device=H30-U10&sortType=1&needPagination=true&uuid=10889797&pageLimit=10&channel=taobao'
				,'api/product/itemssearch?sort=price&osVersion=4.2.2&location=116.251335,40.116407&udid=00000000-6b1d-fab9-910e-32e832f63b71&net=Wi-Fi&sheight=1280&zoneId=2&pageNum=1&timestamp=1491050238&v=2.2.0&category=%E9%80%9F%E9%A3%9F%E8%B0%83%E5%91%B3&terminal=android&swidth=720&page=SearchResultActivity&token=777bfe8e3b9d037e1fe479e1dd693daa&device=H30-U10&sortType=1&needPagination=true&uuid=10889797&pageLimit=10&channel=taobao'
			]
		}

	 	let url=urls[index]
	 	loading.show()
	    fetchData(url, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let price =val.skuInfo.price/100;
		    	let market_price=val.skuInfo.market_price/100;
		    	let id = val.id

		        return(
		        	<a >
					<Link to={"/details/"+val.skuInfo.skuId+"&&"+val.skuInfo.product_id}>
						<img src={val.main_sku_pic} />
						<div className="product-right">
							<h3>{val.skuInfo.name}</h3>
							<p><i>￥</i>{ price }<s>{ market_price }</s></p>
							<img onClick={this.handleCart(val.id)} src="images/button_shopCart.png" alt=""/>
						</div>
					</Link>
					</a>
				)
		    })
		    this.setState({
	        	productlist: Lis
	  		})
	  		loading.hide()
		}.bind(this))
	}

	handleCart(id){
		localStorage.setItem(id,"")
	}
	render(){
		return(
			<div className="m-list">
				<ul className="sort">
					<li onClick={this.handleDef.bind(this)}>综合排序</li>
					<li onClick={this.handleSaled.bind(this)}>销量</li>
					<li onClick={this.handlePrc.bind(this)}>价格</li>
				</ul>
				<Scroller>
					<div className="product">
						{this.state.productlist}
					</div>
				</Scroller>
			</div>
		)
	}

	componentWillMount(){
		
	}

	componentDidMount(){
		let index = this.props.params.id.replace(":","")-1
		let urls=[
			'/api/product/itemssearch?device=pc&uuid=10886908&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%3Fdevice%3Diphone%26channel%3Dh5%26swidth%3D375%26sheight%3D667%26zoneId%3D857%26v%3D2.1.3%26terminal%3Dwap%26page%3Dhttp%253A%252F%252Fm.haoshiqi.net%252F%26needPagination%3D1%26pageNum%3D8%26pageLimit%3D20%2527%23list%3Fcategoryname%3D%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F%26categoryid%3D1%26channel_id%3Dh5&username=156****0604&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490354050&user_id=10886908&inviteCode=A61EFCX0&userId=10886908&categoryId=1&category=%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F&needPagination=1&pageNum=1&pageLimit=20'
			,'api/product/itemssearch?device=iphone&uuid=10886908&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%3Fdevice%3Diphone%26channel%3Dh5%26swidth%3D375%26sheight%3D667%26zoneId%3D857%26v%3D2.1.3%26terminal%3Dwap%26page%3Dhttp%253A%252F%252Fm.haoshiqi.net%252F%26needPagination%3D1%26pageNum%3D8%26pageLimit%3D20%2527%23list%3Fcategoryname%3D%E9%A5%AE%E6%96%99%E5%86%B2%E8%B0%83%26categoryid%3D2%26channel_id%3Dh5&username=156****0604&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490354050&user_id=10886908&inviteCode=A61EFCX0&userId=10886908&categoryId=2&category=%E9%A5%AE%E6%96%99%E5%86%B2%E8%B0%83&needPagination=1&pageNum=1&pageLimit=20'
		]
	 	let url=urls[index]
	 	loading.show()
	    fetchData(url, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let price =val.skuInfo.price/100;
		    	let market_price=val.skuInfo.market_price/100;
		    	let id = val.id

		        return(
		        	<a >
					<Link to={"/details/"+val.skuInfo.skuId+"&&"+val.skuInfo.product_id}>
						<img src={val.main_sku_pic} />
						<div className="product-right">
							<h3>{val.skuInfo.name}</h3>
							<p><i>￥</i>{ price }<s>{ market_price }</s></p>
							<img onClick={this.handleCart(val.id)} src="images/button_shopCart.png" alt=""/>
						</div>
					</Link>
					</a>
				)
		    })
		    this.setState({
	        	productlist: Lis
	  		})
	  		loading.hide()
		}.bind(this))
	 	
	} 
}
export default List
