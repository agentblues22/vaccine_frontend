import React from "react";
import "./form.css"

class Contentr extends React.Component{
   
   
  
    render(){

      

      if(this.props.vaccine==null){

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
             <table>
               <tr>
               <td>center address:</td><td>{" "} {rawdata.address}</td>
               </tr>
               <tr>
               <td>pincode:</td><td>{" "} {rawdata.pincode}</td>
               </tr>
               <tr>
               <td>time:</td><td>from:{rawdata.from}{" "} to:{rawdata.to}</td>
               </tr>
               <tr>
               <td>fee type:</td><td>{" "}{rawdata.fee_type}</td>
               </tr>
               <tr>
                 <td>vaccine type:</td><td>{" "}{rawdata.sessions[0].vaccine}</td>
               </tr>
               <h2 class="h2">available capacity: {rawdata.sessions[0].available_capacity}</h2>
             </table>
             </div>
           
           )
     
      )
      } 
    }
}
  
  export default Contentr