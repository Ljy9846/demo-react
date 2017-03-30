import React from "react"
import Carousel from '../../../component_dev/carousel/src/'
import fetchData from '../../util/util.fetch.js'
import Scroller from '../../../component_dev/scroller/src/'

class New extends React.Component{
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
	 //商品列表
	componentDidMount(){
	 	let url3='/api/product/topicskulist?device=pc&channel=h5&swidth=1440&sheight=900&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23topic_list%3Ftopic_code%3Djinrixinpin&topicCode=jinrixinpin&needPagination=1&pageNum=1&pageLimit=20'
	    fetchData(url3, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let price =val.price/100;
		    	let market_price=val.market_price/100;
		        return(
					<a>
						<img src={val.sku_pic} />
						<div className="product-right">
							<h3>{val.sku_name}</h3>
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
export default New
