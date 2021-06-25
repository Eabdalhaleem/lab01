import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

    // we use setState method responsible of change state
    clickNumber = () => {
        this.setState({
            votes: this.state.votes + 1
        })


    }

    showDetils = () => {
        this.props.handelOpen(true)
        //  console.log(this.props)      
    }

    render() {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <h3>{this.state.votes}</h3>
                    <Button variant="primary" onClick={this.clickNumber}>vote</Button>
                    <br /><br />
                    <Button variant="danger" onClick={this.showDetils}>view</Button>
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

