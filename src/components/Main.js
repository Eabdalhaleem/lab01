/* eslint-disable no-undef */
import React from 'react';
import HornedBeast from './HornedBeast';

class Mains extends React.Component{
 render(){
     return(
         
         <div>
             
        {mydata.map((horndata) => {
          return (
            <HornedBeast
              title={horndata.title} 
              image_url={horndata.image_url}
              description={horndata.description}
            />
          );
        })}
         </div>
     )
   };
    
     


}
export default Mains