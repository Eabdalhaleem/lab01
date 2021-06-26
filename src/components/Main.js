
import React from 'react';
import HornedBeast from './HornedBeast';
import { Form } from 'react-bootstrap';

class Mains extends React.Component {
  constructor() {
    super()
    this.state = {
      horns: "all"

    }
  }
  handelHorne = (event) => {
    this.setState({
      horns: event.target.value
    })


  }

  render() {

    return (


      <div>
       { console.log (this.state.horns)}
        
        <Form onChange={this.handelHorne}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select Hornes</Form.Label>
            <Form.Control as="select" custom>
              <option defaultChecked>all</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
        </Form>
        {
          
          this.props.data.map((beast, index) => 
            
             this.state.horns === "all" ?
             
                <HornedBeast
                  key={index}
                  title={beast.title}
                  image_url={beast.image_url}
                  description={beast.description}
                  handelOpen={this.props.handelOpen}
                  handleData={this.props.handleData}
                />
              :this.state.horns == beast.horns?
              <HornedBeast
              key={index}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              handelOpen={this.props.handelOpen}
              handleData={this.props.handleData}
            />:null
            
          






        

          )}

      </div>
    )
  };




}
export default Mains