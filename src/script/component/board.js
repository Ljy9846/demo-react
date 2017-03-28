import React from "react"
import Carousel from '../../component_dev/carousel/src/'


class Board extends React.Component{
	constructor (props) {
	    super(props)
	    this.state = {
	      bannerlist: [<div/>],
	      homenav:[],
	      newlist:[],
	      productlist:[]
	    }
	}
	render(){
		return(
			<div className="m-board">
				<div className="swiper">
					<Carousel>
			            {this.state.bannerlist}
			        </Carousel>
				</div>
				<div className="homenav">
					<ul>
						{
							this.state.homenav.map(function(item){
								return(
									<li key={item.id}>
										<img src={item.icon}/>
										<p>{item.label}</p>
									</li>
								)
							})
						}
					</ul>
				</div>
				<div className="new">
					{
						this.state.newlist.map(function(ite){
							return(
								<a key={ite.id} href='{item.jump_url}'>
									<img src={ite.icon}/>
								</a>
							)
						})
					}
				
				</div>
				<div className="product">
					{
						this.state.productlist.map(function(it){
							return(
								<div key={it.id}>
									<img src={it.skuInfo.skuThumbnail} />
									<div className="product-right">
										<h3>{it.skuInfo.name}</h3>
										<span>it.</span>
									</div>
									
								</div>
							)
						})
					}
				
				</div>
				
			</div>
		)
	}
	componentDidMount() {
	    fetch('/api/list.php')
	    .then(response=>response.json())
	    .then(res=>{
	    	let list = res.data.bannerList.map(val=>{
				return(
					<li className="item"><img className="img" src={val.image} /></li>
				)
			})
	      	this.setState({
		        bannerlist:list,
		        homenav:res.data.subButtonList,
		        newlist:res.data.marketingActivities,
		        productlist:res.data.productList
	        })
	    })
  }
}
export default Board
