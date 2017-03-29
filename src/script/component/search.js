import React from "react"

import fetchData from '../util/util.fetch'

class Search extends React.Component {
  constructor(props){
      super(props)
    }
  render() {
    return (
      <div className="m-cart">
        <header></header>
        <content>
          <div>
            <h4>热门搜索</h4>
            {this.state}
          </div>
          <div>
            <h4>最近搜索过</h4>
          </div>
        </content>
      </div>
    )
  }
  componentDidMount(){
    let url1='/api/common/hotsearchsug?device=pc&channel=h5&swidth=1280&sheight=800&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23search%3Fchannel_id%3Dh5'
    fetchData(url1,res=>{
      let lis1=res.data.list.map(val=>{
        return (
          <div>
            
          </div>
        )
      })
    })
  }

}

export default Search