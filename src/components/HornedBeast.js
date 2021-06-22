import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: 0
        }
    }

    // we use setState method responsible of change state
    clickNumber = () => {
        this.setState({
            click: this.state.click + 1
        })


    }

    showClick = () => {
        this.setState({
            show:this.state.show
        })
    }
    render() {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <Button variant="primary">{this.showClick}</Button>
                </Card.Body>
            </Card>

            // <div>
            //     <h3>{this.props.title} </h3>
            //     <img src={this.props.image_url}
            //         alt={this.props.description} onClick={this.clickNumber} style={{ width: "400px", height: "400px" }} />
            //     <p>{this.props.description} </p>
            //     <span>{this.state.click}</span>
            //     <button onClick={this.clickNumber}>vote</button>
            //     <button onClick={this.showClick}>show</button>
            // </div>
        )
    }
}

export default HornedBeast

