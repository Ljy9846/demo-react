import React from "react"
import Carousel from '../../../component_dev/carousel/src/'
import fetchData from '../../util/util.fetch.js'
import Scroller from '../../../component_dev/scroller/src/'
import { Link } from 'react-router'
class Brand extends React.Component{
	constructor (props) {
	    super(props);
	    this.state = {
	      productlist:[]//产品
	    }
	}
	render(){
		return(
			<div className="brand">{this.state.productlist}</div>
		)
	}
	componentDidMount(){
	 	let url3='/api/product/topicskulist?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23zt_template%3Ftopic_code%3D3d71b508679f283edca6186aaa1fd9c4&topicCode=3d71b508679f283edca6186aaa1fd9c4&needPagination=1&pageNum=1&pageLimit=20'
	    fetchData(url3, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let price =val.price/100;
		    	let market_price=val.market_price/100;
		    	let skuId = val.sku_id;
		        return(
		        	<Link to={"/details/"+skuId}>
						<div>
							<img src={val.sku_pic} />
						
						<h3>{val.sku_name}</h3>
							<p><i>￥</i>{ price }<s>{ market_price }</s></p>
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
export default Brand
