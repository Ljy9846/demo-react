import React from 'react'

import { Link } from 'react-router'



class Index extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="m-index">
        <header>
          <div className="yo-header">
            <input type="search" placeholder="搜索您想要找的商品" />
            <span className="regret">好食期</span>
            <span className="affirm">地点∨</span>
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
        <footer>
          <ul>
            <li className="active">
              <Link to="/board" activeClassName="active">
                <i className="yo-ico">&#xe64b;</i>
                <b>首页</b>
              </Link>
            </li>
            <li>
              <Link to="/kind" activeClassName="active">
                <i className="yo-ico">&#xe600;</i>
                <b>分类</b>
              </Link>
            </li>
            <li>
              <Link to="/cart" activeClassName="active">
                <i className="yo-ico">&#xe6ff;</i>
                <b>购物车</b>
              </Link>
            </li>
            <li>
              <Link to="/my" activeClassName="active">
                <i className="yo-ico">&#xe611;</i>
                <b>我的</b>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    )
  }

  componentDidMount() {

  }
}

export default Index
