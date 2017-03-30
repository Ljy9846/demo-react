require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRedirect, IndexRoute, hashHistory} from 'react-router'


import Index from './component/index'
import Board from './component/board'
import Kind from './component/kind'
import Cart from './component/cart'
<<<<<<< HEAD
import My from './component/my'
import Search from './component/search'
=======
import { My, LoginUp, LoginIn } from './component/my'
>>>>>>> origin/zzb

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Index}>
  		<IndexRedirect to='/board' component={Board}></IndexRedirect>
  		<Route path="board" component={Board}></Route>
  		<Route path="kind" component={Kind}></Route>
  		<Route path="cart" component={Cart}></Route>
  		<Route path="my" component={My}></Route>
      <Router path="my/loginup" component={LoginUp}/>
      <Router path="my/loginin" component={LoginIn}/>
  	</Route>
	<Route path="search" component={Search}></Route>
  </Router>,
  document.getElementById('root')
)

