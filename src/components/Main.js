
import React from 'react';
import HornedBeast from './HornedBeast';
import mydata from './data.json'


class Mains extends React.Component{
 render(){
     return(
         
         <div>
             
        {
          mydata.map((beast,index)=>{
            return (
            <HornedBeast
               key={index}
              title={beast.title} 
              image_url={beast.image_url}
              description={beast.description}
            />
          );
        })}

         </div>
     )
   };
    
     


}
export default Mains