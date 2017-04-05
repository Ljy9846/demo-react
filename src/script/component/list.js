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
	      productlist:[]//产品
	    }
	   
	}
	
	handleCart(id){
		localStorage.setItem(id,"")
	}

	render(){
		return(
			<div className="m-list">
				<Scroller>
					<div className="product">
						<ul className="sort">
							<li>综合排序</li>
							<li>销量</li>
							<li>筛选</li>
						</ul>
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
