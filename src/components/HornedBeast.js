import React, { Component } from 'react'

class HornedBeast extends Component {

    constructor (props){
        super(props);
        this.state={
            click:0
        }
    }

       // we use setState method responsible of change state
        clickNumber=()=>{
        this.setState({ 
            click:this.state.click+1
        })

        
    }
    render() {
        return (
            <div>
                <h3>{this.props.title} </h3>
   		        <img src={this.props.image_url} 
                      alt={this.props.description} onClick={this.clickNumber} style={width="500px" height="500px"}/>
   		       <p>{this.props.description} </p>
  		       <span>{this.state.click}</span>
                 <button onClick={this.clickNumber}>vote</button>
            </div>
        )
    }
}

export default HornedBeast

