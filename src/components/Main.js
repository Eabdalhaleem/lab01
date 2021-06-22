
import React from 'react';
import HornedBeast from './HornedBeast';




class Mains extends React.Component{
 render(){
     return(
         
         <div>
             
        {
          this.props.data.map((beast,index)=>{
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