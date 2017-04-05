import React from 'react'
import { browserHistory, Link } from 'react-router'
import fetchData from '../util/util.fetch'
import Confirm from '../../component_dev/confirm/src'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.clean = this.clean.bind(this)
    this.state = {
      history: ''
    }
  }
// http://m.api.haoshiqi.net/product/itemssearch?device=pc&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23list%3Fsearchtag%3Dabc%26backLevel%3D-2%26channel_id%3Dh5&searchTag=abc&q=abc&needPagination=1&pageNum=1&pageLimit=20
// var url1 ='http://m.api.haoshiqi.net/product/itemssearch?device=pc&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23list%3Fsearchtag%3Dabb%26backLevel%3D-2%26channel_id%3Dh5&searchTag='+{}+'&q='+{}+'&needPagination=1&pageNum=1&pageLimit=20'
// http://m.api.haoshiqi.net/product/itemssearch?device=pc&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23list%3Fsearchtag%3Dbcd%26backLevel%3D-2%26channel_id%3Dh5&searchTag=bcd&q=bcd&needPagination=1&pageNum=1&pageLimit=20
  clean () {
    Confirm({
		    content:'确定清空搜索历史吗？',
		    title:'提醒',
		    btnText:['确定','取消']
		}).then(
			res=>{
		    	if(`${res}` == "true"){
            window.localStorage.removeItem('searchHistory')
            console.log('clear is ok')
            this.setState({
              history:[
                <li className="normal">暂无搜索历史</li>
                  ]
            })
		    	}
		    }
		)

  }

  componentWillMount () {

    // console.log("bbbbbbbbbbb",this.state.history)
    if (window.localStorage.getItem('searchHistory')) {

      const list = JSON.parse(window.localStorage.getItem('searchHistory'))
      console.log("list",list)
      const list1 = list.search_history.map(val=>{
        return (
          <li className="history"><i className='yo-ico'>&#xe69f;</i>{val.value}</li>
        )
      })
      this.setState({
        history:[list1,,<li onClick={this.clean} className="normal">清除历史</li>]
      })
    }else{
      this.setState({
        history:[
          <li className="normal">暂无搜索历史</li>
            ]
      })
    }
  }
  render () {
    // console.log('history', this.state.history)
    return (
      <div className='m-search'>
        <div>
          <h4>热门搜索</h4>
          {this.state.item}
        </div>
        <div>
          <h4>最近搜过</h4>
          <ul>
            {this.state.history}
          </ul>
        </div>
      </div>
    )
  }

  componentDidMount () {
    let url1 = '/api/common/hotsearchsug?device=pc&channel=h5&swidth=1280&sheight=800&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23search%3Fchannel_id%3Dh5'
    fetchData(url1, (res) => {
      let lis1 = res.data.list.map(val => {
        return (
          <li className="kind">
            <span>{val.value}</span>
            <i className='yo-ico'>&#xe6b1;</i>
          </li>
        )
      })
      this.setState({
        item: <ul>
                {lis1}
              </ul>
      })
    })
  }
}

export default Search
