import React from 'react'

import { browserHistory, Link } from 'react-router'

import fetchData from '../util/util.fetch'

class Kind extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: '',
      categoryList: ''
    }
  }
  render () {
    return (
      <div className='m-kind'>
        {/*<div><h4>{this.state.category[0]}<i className="yo-ico">&#xe60c;</i></h4><ul>{this.state.categoryList[0]}</ul></div>
                        <div><h4>{this.state.category[1]}<i className="yo-ico">&#xe60c;</i></h4><ul>{this.state.categoryList[1]}</ul></div>
                        <div><h4>{this.state.category[2]}<i className="yo-ico">&#xe60c;</i></h4><ul>{this.state.categoryList[2]}</ul></div>*/}
        {this.state.cat}
        <Link to='/search'>
        </Link>
      </div>
    )
  }
  componentDidMount () {
    let url1 = '/api/category/categorylist?device=pc&channel=h5&swidth=1280&sheight=800&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23category%3Fchannel_id%3Dh5'
    fetchData(url1, (res) => {
      // let lis1=res.data.list.map(val=>{
      //   return val.name
      // })
      // let lis2 = res.data.list.map(val=>{
      //     return val.subCategories.map(sol=>{
      //       return <li>{sol.name}</li>
      //     })
      // })
      let lis3 = res.data.list.map(val => {
        return (<div className='clearfix'>
                <Link to={ "/list/:"+ val.id }>
                  <h4>{val.name}<i className='yo-ico'></i></h4>
                </Link>
                  <ul>
                    {val.subCategories.map(sol => {
                       return (<li>
                                 {sol.name}
                               </li>)
                     })}
                  </ul>
                </div>)
      })

      // console.log(lis1,lis2,lis3)
      // console.log(lis3)
      this.setState({
        // category:lis1,
        // categoryList:lis2,
        cat: lis3
      })
    })
  }
}

export default Kind
