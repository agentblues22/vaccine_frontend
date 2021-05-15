import React from "react";
import "./form.css"

class Contentr extends React.Component{
   
   
  
    render(){

      

      if(this.props.vaccine==""){

        return(
          <div class="container1">No Centers Available</div>
        )
      }
      else{

       var k= Array.from(this.props.vaccine)

    
      return(
       
           k.map((rawdata,i)=>
          
             <div class="container1">
             <h1>{rawdata.name}</h1>
             <ul>
               <li>center adress:{" "} {rawdata.address}</li>
               <li>pincode:{" "} {rawdata.pincode}</li>
               <li>from:{rawdata.from}{" "} to:{rawdata.to}</li>
               <li>fee type:{" "}{rawdata.fee_type}</li>
               <h2>available capacity: {rawdata.sessions[0].available_capacity}</h2>
             </ul>
             </div>
           
           )
     
      )
      } 
    }
}
  
  export default Contentr