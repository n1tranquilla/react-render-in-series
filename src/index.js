import "babel-core/register"
import 'babel-polyfill'

import React from 'react'
import PropTypes from 'prop-types'

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class RenderInSeries extends React.Component {

  constructor(props){
    super(props)

    this.state={
      index:0
    }
  }

  async componentDidMount(){
    const { timeline } = this.props
  
    for (let i=0; i<timeline.length; i++){
      await timeout(timeline[i])
      this.setState({index: this.state.index+1})
    }
  }

  render(){
    const { index } = this.state

    if(!this.props.children[index]) return null

    return this.props.children[index]
  }
} 

RenderInSeries.propTypes={
  children: PropTypes.array.isRequired,
  timeline: PropTypes.array.isRequired,
}

RenderInSeries.defaultProps={
  children:[],
  timeline:[]
}

export default RenderInSeries
