import React, { Component } from 'react'

class HornedBeast extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title} </h3>
   		        <img src={this.props.image_url} alt='' onClick={this.change}/>
   		       <p>{this.props.description} </p>
  		       
            </div>
        )
    }
}

export default HornedBeast

