require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRedirect, IndexRoute, hashHistory} from 'react-router'


import Index from './component/index'
import Board from './component/board'
import Kind from './component/kind'
import Cart from './component/cart'
import My from './component/my'
import Search from './component/search'

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Index}>
  		<IndexRedirect to='/board' component={Board}></IndexRedirect>
  		<Route path="board" component={Board}></Route>
  		<Route path="kind" component={Kind}></Route>
  		<Route path="cart" component={Cart}></Route>
  		<Route path="my" component={My}></Route>
  	</Route>
	<Route path="search" component={Search}></Route>
  </Router>,
  document.getElementById('root')
)

