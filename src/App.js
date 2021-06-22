
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
  render(){
  
    return (
      // fragment we use it insted of other html tag <div>
      <>
       <Headers/>
       <Mains  data={data}/>
       <Footers/>
       <HornedBeast/>
       <SelectedBeast show={this.show}/>
      </>
    );
  }
 
}

export default App;
