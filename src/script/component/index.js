import React from 'react'

import { Link, browserHistory } from 'react-router'

import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Switch from '../../component_dev/switch/src/index'
import Board from '../../../../../../../workspace/goodsnack/demo-react/src/script/component/board';

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.setLocal = this.setLocal.bind(this)
    this.back = this.back.bind(this)
  }
  setLocal () {
    if (this.refs.searchItem.value != '') {
      // console.log('this', this.refs.searchItem.value)
      const item = this.refs.searchItem.value
      const list1 = {'value': item}
      const list2 = {'search_history': [list1]}
      const list3 = JSON.stringify(list2)
      // console.log(list3)
      if (!window.localStorage.getItem('searchHistory')) {
        window.localStorage.setItem('searchHistory', list3)
      // console.log('first')
      }else {
        var list4 = window.localStorage.getItem('searchHistory')
        // console.log('1', list4)
        list4 = JSON.parse(list4)
        // console.log('2', list4)
        list4.search_history.push(list1)
        // console.log(list4)
        list4 = JSON.stringify(list4)
        window.localStorage.setItem('searchHistory', list4)
      }
    // console.log(window.localStorage.getItem('searchHistory'))
    }else {
      // 弹出模态框“关键字不能为空”
      alert('bunengweikong')
    }
  }

  render () {
    return (
      <div className='m-index'>
        <header>
          <div className='yo-header'>
            <div className='regret'>
              {this.props.value == 'boardValue' ? ([<img src='http://img1.haoshiqi.net/assets/hsqimg/logo2.png' />]) : <div onClick={this.back}>{this.props.value}</div>}
              {this.props.goback=="返回"?[<Link to="/my">返回</Link>]:""}
            </div>
            <div className='centerheader'>
              {this.props.up}
              {this.props.one == 'input' ? (<Link to='/search'>
                                            <input type='text' className='boardinput' placeholder='搜索您想要找的商品' />
                                            </Link>) : this.props.one}
              {this.props.two == 'input' ? (<Link to='/search'>
                                            <input type='text' className='kindinput' placeholder='搜索您想要找的商品' />
                                            </Link>) : this.props.two}
              {this.props.three == 'input' ? (<Link to=''>
                                              <input
                                                type='text'
                                                className='searchinput'
                                                ref='searchItem'
                                                placeholder='搜索您想要找的商品' />
                                              </Link>) : this.props.three}
            </div>
            {this.props.right == 'place' ? ([<Link to='' className='affirm'> 上海丷
                                             </Link>]) : ''}
            {this.props.search == '搜索' ? ([<Link to='' className='affirm'>
                                           <span onClick={this.setLocal}>搜索</span>
                                           </Link>]) : ''}
            {this.props.cart == '编辑' ? (<span className='affirm'>bianji</span>) : ''}
            {this.props.loginup == '注册' ? ([<Link to='/my/loginin' className='affirm'> 注册
                                            </Link>]) : ''}
            {this.props.loginin == '登录' ? ([<Link to='/my/loginup' className='affirm'> 登录
                                            </Link>]) : ''}
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
        {this.props.footer == 'none' ? '' : ([
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
         ])}
      </div>
    )
  }

  back (event) {
    browserHistory.goBack()
  }
  componentDidMount () {
    let type = this.props.routes[1].type
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
