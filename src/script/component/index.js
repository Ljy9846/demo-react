import React from 'react'
import fetchData from '../util/util.fetch.js'
import { Link, browserHistory } from 'react-router'

import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Switch from '../../component_dev/switch/src/index'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state={
    	city:'北京市'
    }
    
  }

  render () {
    return (
      <div className='m-index'>
        <header>
          <div className='yo-header'>
            <div className='regret' onClick={this.back}>
              {this.props.value == 'boardValue' ? ([<img src='http://img1.haoshiqi.net/assets/hsqimg/logo2.png' />]) : this.props.value}
            </div>
            <div className="centerheader">
              {this.props.up}
              {this.props.one == 'input' ? (<Link to='/search'>
                                            <input type='text' className='boardinput' placeholder='搜索您想要的商品' />
                                            </Link>) : this.props.one}
              {this.props.two == 'input' ? (<Link to='/search'>
                                            <input type='text' className='kindinput' placeholder='搜索您想要的商品' />
                                            </Link>) : this.props.two}
              {this.props.three == 'input' ? (<Link to='/search'>
                                              <input type='text' className='searchinput' placeholder='搜索您想要的商品' />
                                              </Link>) : this.props.three}
            </div>
            <div className='affirm'>
              {this.props.right == 'place' ? ([<Link to='/city'>{this.state.city}
                                               </Link>]) : ''}
              {this.props.search == '搜索' ? ([<Link to=''>
                                             <span>搜索</span>
                                             </Link>]) : ''}
              {this.props.cart == '编辑' ? (<div>
                                            bianji
                                          </div>) : ''}
              {this.props.loginup == '注册' ? ([<Link to='/my/loginin'> 注册
                                              </Link>]) : ''}
              {this.props.loginin == '登录' ? ([<Link to='/my/loginup'> 登录
                                              </Link>]) : ''}
            </div>
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
        <footer>
          <ul>
            <li className='active'>
              <Link to='/board' activeClassName='active'>
              <i className='yo-ico'></i>
              <b>首页</b>
              </Link>
            </li>
            <li>
              <Link to='/kind' activeClassName='active'>
              <i className='yo-ico'></i>
              <b>分类</b>
              </Link>
            </li>
            <li>
              <Link to='/cart' activeClassName='active'>
              <i className='yo-ico'></i>
              <b>购物车</b>
              </Link>
            </li>
            <li>
              <Link to='/my' activeClassName='active'>
              <i className='yo-ico'></i>
              <b>我的</b>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    )
  }

  back () {
    browserHistory.goBack()
  }

  componentDidMount () {
    let type = this.props.routes[1].type
    let num = this.props.params.id;
    
    let url4='/api/nation/provincelist?device=pc&channel=h5&swidth=1440&sheight=900&zoneId=625&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23city%3Fchannel_id%3Dh5'
	    fetchData(url4, function (res) {
			    let Lis = res.data.list.map(val=>{
				  	let id=val.id;
				    if(id==num){
				    	return val.province;
				    	
				    }
				  })
		    	this.setState({
	        		city:Lis
	  			})
			    
			}.bind(this))
	 	
    this.props.onChange({
      type: type
    })
  }
  componentDidUpdate () {
    let type = this.props.routes[1].type
    this.props.onChange({
      type: type
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
