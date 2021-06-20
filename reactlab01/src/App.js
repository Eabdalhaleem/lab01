import Headers from './components/Header';
import Mains from './components/Main';
import Footers from './components/Footer';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
    let imageList=[{

      "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      "title": "UniWhal",
      "description": "A unicorn and a narwhal nuzzling their horns",
      "keyword": "narwhal",
      "horns": 1
    },
  
    {
      "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
      "title": "Rhino Family",
      "description": "Mother (or father) rhino with two babies",
      "keyword": "rhino",
      "horns": 2
    },
    
    {
      "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      "title": "Unicorn Head",
      "description": "Someone wearing a creepy unicorn head mask",
      "keyword": "unicorn", 
      "horns": 1
  }]

  
    return (
      <div className="App">
       <Headers/>
       <Mains image_url={imageList[0].image_url} title={imageList[0].title} description={imageList[0].description} keyword={imageList[0].keyword} horns={imageList[0].horns}/>
       <Mains image_url={imageList[1].image_url} title={imageList[1].title} description={imageList[1].description} keyword={imageList[1].keyword} horns={imageList[1].horns}/>
       <Mains image_url={imageList[2].image_url} title={imageList[2].title} description={imageList[2].description} keyword={imageList[2].keyword} horns={imageList[2].horns}/>
       <Footers/>
      </div>
    );
  }
 
}

export default App;
