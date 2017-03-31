import React from "react"
import Carousel from '../../../component_dev/carousel/src/'
import fetchData from '../../util/util.fetch.js'
import Scroller from '../../../component_dev/scroller/src/'
import { Link } from 'react-router'
class Pork extends React.Component{
	constructor (props) {
	    super(props);
	    this.state = {
	      productlist:[]//产品
	    }
	    
	    
	}
	render(){
		return(
			<div className="prolist">
				{this.state.productlist}
			</div>
		)
	}
	componentDidMount(){
	 	let url3='/api/product/recommendproducts?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F&needPagination=1&pageNum=6&pageLimit=20'
	    fetchData(url3, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let price =val.skuInfo.price/100;
		    	let market_price=val.skuInfo.market_price/100;
		    	let skuId = val.skuInfo.skuId;
		    	let product_id = val.skuInfo.product_id;
		        return(
		        	<Link to={"/details/"+skuId+"&&"+product_id}>
						<div>
							<img src={val.skuInfo.skuThumbnail} />
							<div className="product-right">
								<h3>{val.skuInfo.name}</h3>
								<p><i>￥</i>{ price }<s>{ market_price }</s></p>
							
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
export default Pork
