import React from "react"

import { browserHistory,Link } from 'react-router'

import fetchData from '../util/util.fetch'

class Kind1 extends React.Component {
  constructor(props){
    super(props)
    this.state={
      category:"",
      categoryList:""
    }
  }
  render() {
    return (
      <div className="m-kind">
        {/*<div><h4>{this.state.category[0]}<i className="yo-ico">&#xe60c;</i></h4><ul>{this.state.categoryList[0]}</ul></div>
        <div><h4>{this.state.category[1]}<i className="yo-ico">&#xe60c;</i></h4><ul>{this.state.categoryList[1]}</ul></div>
        <div><h4>{this.state.category[2]}<i className="yo-ico">&#xe60c;</i></h4><ul>{this.state.categoryList[2]}</ul></div>*/}

        {this.state.cat}


         <Link to="/search"><input type="text"/></Link>
      </div>
    )
  } 
  componentDidMount(){
    let url1='/api/kind.php'
    fetchData(url1,(res)=>{
      // let lis1=res.data.list.map(val=>{
      //   return val.name
      // })
      // let lis2 = res.data.list.map(val=>{
      //     return val.subCategories.map(sol=>{
      //       return <li>{sol.name}</li>
      //     })
      // })
      let lis3=res.data.list.map(val=>{
        return (<div><h4>{val.name}<i className="yo-ico">&#xe60c;</i></h4><ul>{val.subCategories.map(sol=>{
          return (<li>{sol.name}</li>)
        })}</ul></div>)
      })

      // console.log(lis1,lis2,lis3)
      // console.log(lis3)
      this.setState({
        // category:lis1,
        // categoryList:lis2,
        cat:lis3
      })


    })
  }
}

export default Kind1