import React from "react"
import Carousel from '../../component_dev/carousel/src/'


class Board extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      swiperList: [<div/>]
    }
  }
	render() {
		return (
			<div className="m-board">
				<div className="swiper">
					<Carousel autoplay={true}>
            {this.state.swiperList}
          </Carousel>
        </div>
        <ul>
          <li>
            <img src="./images/nav4.png" />
            <p></p>
          </li>
          <li>
            <img />
            <p></p>
          </li>
          <li>
            <img />
            <p></p>
          </li>
          <li>
            <img />
            <p></p>
          </li>
          <li>
            <img />
            <p></p>
          </li>
        </ul>
			</div>
		)
	}

	componentDidMount() {
    let url = '/api/v2/movie/in_theaters?count=3'
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
        let Lis = res.subjects.map(val=>{
          return (<li className="item"><img className="img" src={val.images.large} /></li>)
        })
        this.setState({
          swiperList: Lis
        })
      })
  }
}

export default Board
