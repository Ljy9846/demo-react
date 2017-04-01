import React from 'react'
import { browserHistory, Link } from 'react-router'
import fetchData from '../util/util.fetch'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div className='m-search'>
        <div>
          <h4>热门搜索</h4>
          {this.state.item}
        </div>
        <div>
          <h4>最近搜索过</h4>
        </div>
      </div>
    )
  }

  componentDidMount () {
    let url1 = '/api/common/hotsearchsug?device=pc&channel=h5&swidth=1280&sheight=800&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23search%3Fchannel_id%3Dh5'
    fetchData(url1, (res) => {
      let lis1 = res.data.list.map(val => {
        return (
          <li>
            <span>{val.value}</span>
          </li>
        )
      })
      this.setState({
        item: <ul>{lis1}</ul>
      })
    })
    // localStorage.setItem(this.state.item)

    console.log(localStorage.setItem("abc","bcd"))
  }
}

export default Search
