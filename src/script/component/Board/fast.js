import React from "react"
import Carousel from '../../../component_dev/carousel/src/'
import fetchData from '../../util/util.fetch.js'
import Scroller from '../../../component_dev/scroller/src/'

class Fast extends React.Component{
	constructor (props) {
	    super(props);
	    this.state = {
	      productlist:[]//产品
	    }
	    
	    
	}
	render(){
		return(
			<div className="product">
				{this.state.productlist}
			</div>
		)
	}
	componentDidMount(){
	 	let url3='/api/product/recommendproducts?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F&needPagination=1&pageNum=9&pageLimit=20'
	    fetchData(url3, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let price =val.skuInfo.price/100;
		    	let market_price=val.skuInfo.market_price/100;
		        return(
					<a>
						<img src={val.skuInfo.skuThumbnail} />
						<div className="product-right">
							<h3>{val.skuInfo.name}</h3>
							<p><i>￥</i>{ price }<s>{ market_price }</s></p>
						
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
export default Fast
