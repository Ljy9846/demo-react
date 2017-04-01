import React from "react"
import { Link } from 'react-router'
import Carousel from '../../component_dev/carousel/src/'
import fetchData from '../util/util.fetch.js'
import Scroller from '../../component_dev/scroller/src/'
import List from '../../component_dev/list/src/'
class Board extends React.Component{
	constructor (props) {
	    super(props);
	   this.top = this.top.bind(this);
	}
	
	top(){
		this.refs.bo.scrollTop = 0
	}
	
	render(){
		return(
			<div className="m-board" ref="bodyBox">
			  <div className="hang">
					<Scroller scrollX={true} scrollY={false}>
						<Link to="/board/home/2" activeClassName="active">
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
				</div>
            	<div className="bo" ref="bo">
					{this.props.children}
					<div onClick={this.top}>
						<img src="./images/btn_top.png" className="go"/>
					</div>
				</div>
			</div>
		)
	}
	
}
export default Board
