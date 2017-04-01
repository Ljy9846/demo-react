import React from "react"
import Confirm from '../../component_dev/confirm/src'


class Cart extends React.Component {
	constructor (props) {
	    super(props);
	    this.minus = this.minus.bind(this);
	    this.plus = this.plus.bind(this);
	    this.state = {
	      shopping:[],
	      flag:true,
	      number:1,
	      name:"",
	      price:"",
	      priceNum:"",
	      market_price:"",
	      imgSrc:""
	    }
	}

	minus(){
		if(this.state.number>1){
			this.setState({
				number:this.state.number-1,
				priceNum:(this.state.price*(this.state.number-1)).toFixed(2)
			})
		}
	}
	plus(){
		this.setState({
			number:this.state.number+1,
			priceNum:(this.state.price*(this.state.number+1)).toFixed(2)
		})
	}

	del(){
		var goodUser = JSON.parse(localStorage.getItem("user")).id;
		Confirm({
		    content:'您确定要删除吗？',
		    title:'提示',
		    btnText:['确定','关闭']
		}).then(
			res=>{
		    	if(`${res}` == "true"){
		    		localStorage.removeItem(goodUser),
		    		location.reload(true)
		    	}
		    }
		);
	}

	componentWillMount() {
		var data = localStorage.getItem("user");
		if(!data){
			window.location.href="/#/my/loginup"
		}
		
		if(!data != true){
			var flags = JSON.parse(localStorage.getItem("user")).id;
			var id = localStorage[flags]; 
			if(id == undefined){
				this.setState({
					flag:false
				})
			}else{
				this.setState({
					flag:true
				})
			}
		}
		
	}


	render() {
	    return (
		    <div className="m-cart">
		        <div className={this.state.flag == false?'shopping-cart-none':'display'}>
			        <img src="./images/bg-cart-none.png"/>
			        <p>购物车没有商品噢～</p>
		        </div>
		        
		        <div className={this.state.flag == true?'shopping-cart-shop':'display'}>
		        	<div className="shop-continer">
			        	<dl>
					        <dt className="item">
						        <div className="yo-checked yo-checked-c">
							        <input type="radio" name="project4" value="on"/>
							        <span className="type"></span>
					        	</div>
					        	<span className="itemname">商店名称<i>></i></span>
					        	<p className="del" onClick={this.del}>删除</p>
					        </dt>
					        <dd className="item">
								<div className="yo-checked yo-checked-c">
							        <input type="radio" name="project4" value="on"/>
							        <span className="type"></span>
					        	</div>
					        	<div className="right">
					        		<p className="der">
					        			<img src={this.state.imgSrc}/>
					        			<b>{this.state.name}</b>
					        		</p>
					        		<p>
					        			<i>￥<span>{this.state.price}</span></i>
					        			<span className="s">{this.state.market_price}</span>
					        			<div className="yo-number">
						        			<span className="minus" onClick={this.minus}>-</span>
						        			<input type="text" className="input" value={this.state.number} disabled=""/>
						        			<span className="plus" onClick={this.plus}>+</span>
					        			</div>
					        		</p>
					        		<p className="shopping-surplus">
			            				仅剩974件
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
								<i>￥<span>{this.state.priceNum}</span></i>
			        		</p>
			        		<p>不包含运费</p>
			        	</div>
			        	<p className="pay">去结算({this.state.number})</p>
			        </div>
		        </div>
		    </div>
	    )
	}
	componentDidMount() {
		var data1 = localStorage.getItem("user");
		if(!data1 != true){
			var goodUser = JSON.parse(localStorage.getItem("user")).id;
			var flag = goodUser;
			if(localStorage[flag]){
				var goods = JSON.parse(localStorage.getItem(goodUser));
				this.setState({
					name:goods.name,
			      	price:goods.price,
			      	priceNum:goods.price,
			      	market_price:goods.market_price,
			      	imgSrc:goods.imgSrc
				})
			}
		}
	}
}

export default Cart