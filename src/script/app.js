require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Index from './component/index'
import Board from './component/board'
import Kind from './component/kind'
import Cart from './component/cart'
import Search from './component/search'
import { My, LoginUp, LoginIn } from './component/my'

// board中 二级路由
import Home from './component/Board/home'
import Group from './component/Board/group'
import New from './component/Board/new'
import Cake from './component/Board/cake'
import Candy from './component/Board/candy'
import Snack from './component/Board/snack'
import Pork from './component/Board/pork'
import Drink from './component/Board/drink'
import Milk from './component/Board/milk'
import Fast from './component/Board/fast'
import Brand from './component/Board/brand'
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Index}>
        <IndexRedirect to='/board' component={Board}></IndexRedirect>
        <Route path='board' type='board' component={Board}>
          <IndexRedirect to='/board/home' component={Home}></IndexRedirect>
          <Route path='home' component={Home}></Route>
          <Route path='group' component={Group}></Route>
          <Route path='new' component={New}></Route>
          <Route path='cake' component={Cake}></Route>
          <Route path='snack' component={Snack}></Route>
          <Route path='candy' component={Candy}></Route>
          <Route path='pork' component={Pork}></Route>
          <Route path='drink' component={Drink}></Route>
          <Route path='milk' component={Milk}></Route>
          <Route path='fast' component={Fast}></Route>
          <Route path='brand' component={Brand}></Route>
        </Route>
        <Route path='kind' type='kind' component={Kind}></Route>
        <Route path='cart' type='cart' component={Cart}></Route>
        <Route path='my' type='my' component={My}></Route>
        <Route path='search' type='search' component={Search}></Route>
        <Router path='my/loginup' type='loginup' component={LoginUp} />
        <Router path='my/loginin' type='loginin' component={LoginIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
