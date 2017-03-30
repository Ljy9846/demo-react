import React from "react"
import { Link } from 'react-router'
import Carousel from '../../component_dev/carousel/src/'
import fetchData from '../util/util.fetch.js'
import Scroller from '../../component_dev/scroller/src/'
class Board extends React.Component{
	constructor (props) {
	    super(props);
	   
	}
	render(){
		return(
			<div className="m-board" ref="bodyBox">
				<Scroller scrollX={true} scrollY={false}>
					<Link to="/board/home" activeClassName="active">
						首页
					</Link>
					<Link to="/board/group" activeClassName="active">
						团购
					</Link>
					<Link to="/board/new" activeClassName="active">
						今日新品
					</Link>
					<Link to="/board/cake" activeClassName="active">
						饼干糕点
					</Link>
					<Link to="/board/snack" activeClassName="active">
						休闲零食
					</Link>
					<Link to="/board/candy" activeClassName="active">
						糖果巧克力
					</Link>
					<Link to="/board/pork" activeClassName="active">
						肉脯干卤味
					</Link>
					<Link to="/board/drink" activeClassName="active">
						饮料冲调
					</Link>
					<Link to="/board/milk" activeClassName="active">
						含乳饮品
					</Link>
					<Link to="/board/fast" activeClassName="active">
						罐头素食
					</Link>
					<Link to="/board/brand" activeClassName="active">
						品牌特卖
					</Link>
				</Scroller>
				<div>
					{this.props.children}
				</div>
				
			</div>
		)
	}
	
}
export default Board
