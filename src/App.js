import Headers from './components/Header';
import Mains from './components/Main';
import Footers from './components/Footer';
import HornedBeast from './components/HornedBeast';

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
       <Mains />
       <Footers/>
       <HornedBeast/>
       
      </>
    );
  }
 
}

export default App;
