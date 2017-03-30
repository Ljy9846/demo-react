import React from "react"



class Cart extends React.Component {
	constructor (props) {
	    super(props);
	    this.minus = this.minus.bind(this);
	    this.plus = this.plus.bind(this);
	    this.state = {
	      shopping:[],
	      number:1
	    }
	}

	minus(){
		if(this.state.number>1){
			this.setState({
				number:this.state.number-1
			})
		}
	}
	plus(){
		this.setState({
			number:this.state.number+1
		})
	}

	render() {
	    return (
		    <div className="m-cart">
		        {/*<div className="shopping-cart-none">
			        <img src="./images/bg-cart-none.png"/>
			        <p>购物车没有商品噢～</p>
		        </div>*/}
		        
		        <div className="shopping-cart-shop">
		        	<div className="shop-continer">
			        	<dl>
					        <dt className="item">
						        <div className="yo-checked yo-checked-c">
							        <input type="radio" name="project4" value="on"/>
							        <span className="type"></span>
					        	</div>
					        	<span className="itemname">商店名称<i>></i></span>
					        </dt>
					        <dd className="item">
								<div className="yo-checked yo-checked-c">
							        <input type="radio" name="project4" value="on"/>
							        <span className="type"></span>
					        	</div>
					        	<div className="right">
					        		<p className="der">
					        			<img src=""/>
					        			<b>【6罐*210g】包邮 爱斯曼酸奶黄桃罐头</b>
					        		</p>
					        		<p>
					        			<i>￥<span>32.90</span></i>
					        			<span className="s">40.00</span>
					        			<div className="yo-number">
						        			<span className="minus" onClick={this.minus}>-</span>
						        			<input type="text" className="input" value={this.state.number} disabled=""/>
						        			<span className="plus" onClick={this.plus}>+</span>
					        			</div>
					        		</p>
					        		<p className="shopping-surplus">
			            				仅剩1320件
					        		</p>
					        	</div>

					        </dd>
				        </dl>
		        	</div>
			        <div className="shopping-pay-content">
						<div className="yo-checked yo-checked-c">
					        <span className="type"></span>
					        <p>全选</p>
			        	</div>
			        	<div className="sum">
			        		<p>
								<span>合计：</span>
								<i>￥<span>109.70</span></i>
			        		</p>
			        		<p>不包含运费</p>
			        	</div>
			        	<p className="pay">去结算(3)</p>
			        </div>
		        </div>
		    </div>
	    )
	}
	componentDidMount() {

	}
}

export default Cart