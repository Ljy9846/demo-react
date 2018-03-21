import React from "react"
import Carousel from '../../component_dev/carousel/src/'
import fetchData from '../util/util.fetch.js'
import Scroller from '../../component_dev/scroller/src/'
import { Link } from 'react-router'
class City extends React.Component{
	constructor (props) {
	    super(props);
	    this.state = {
	      citylist:[]//产品  
	    }  
	} 
	render(){
		return(
			<div className="citylist">
				<h2>城市选择</h2>
				<ul>
					<li className='li'>获取定位</li>
					<Link to='/board/home/2'><li>点击获取</li></Link>
					<li className='li'>省份列表</li>
					{this.state.citylist}
				</ul>
			</div>
		)
	}
	componentDidMount(){
	 	let url4='/api/nation/provincelist?device=pc&channel=h5&swidth=1440&sheight=900&zoneId=625&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23city%3Fchannel_id%3Dh5'
	    fetchData(url4, function (res) {
		    let Lis = res.data.list.map(val=>{
		    	let id=val.id;
		        return(
		        	<Link to={"/board/home/"+id}>
		        		<li>{val.province}</li>
		        	</Link>
				)
		    })
		    this.setState({
	        	citylist: Lis
	  		})
		}.bind(this))
	 	
	} 
}
export default City
