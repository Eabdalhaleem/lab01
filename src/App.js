
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Header';
import Mains from './components/Main';
import Footers from './components/Footer';
import HornedBeast from './components/HornedBeast';
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import './App.css';
import React from 'react';

// const data =require ('./components/data.json')
// console.log (data)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title:"title",
      description:"description",
      imgSrc:"image"
      
    }
  }

  handelOpen = (showFromBeast) => {
    this.setState({
      show: showFromBeast
    })
  }

  handleClose=()=>{
    this.setState({
      show:false
    })
  }

  handleData=(title,description,imgSrc)=>{
    this.setState({
      title:title,
      description:description,
      image:imgSrc


    })
  }

  render() {

    return (
      // fragment we use it insted of other html tag <div>
      <>
        <Headers />
        <Mains data={data} handelOpen={this.handelOpen}/>
        <Footers />
        <SelectedBeast display={this.state.show} handleClose={this.handleClose} handleData={this.handleData} title={this.state.title}description={this.state.description} imgSrc={this.state.imgSrc}  />
      </>
    );
  }

}

export default App;
