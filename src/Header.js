import react, {Component} from "react";
import axios from "axios";
import "./form.css"
import Contentr from "./contents";


class Header extends Component{
  constructor(props){
    super(props)

    this.state={
      district: "Select District",
      vaccine:""
    }
  }
  handleDistrictChange=(event)=>{
    this.setState({
      district:event.target.value
    })

  }
  handleSubmit=(event)=>{

     var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
    axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="+this.state.district+"&date="+today).then(response =>{
      
      if(response.data.centers==""){
        this.setState({
          vaccine : null
        });
      }
      else{
      this.setState({
       vaccine: response.data.centers
      });
    }
    
      
    });

    event.preventDefault()

  }

  render(){
    return(
      <div classname="mainfile">
      <form onSubmit={this.handleSubmit}>
        <div class="container1">
          
          <label>District</label>
          <select class="select" value={this.state.district} onChange={this.handleDistrictChange}>
          <option value="000">select District</option>
          <option value="301">Alappuzha</option>
          <option value="307">Eranakulam</option>
          <option value="306">Idukki</option>
          <option value="297">Kannur</option>
          <option value="295">Kasargod</option>
          <option value="298">Kollam</option>
          <option value="304">Kottayam</option>
          <option value="305">Kozhikode</option>
          <option value="302">Malappuram</option>
          <option value="308">Palakkad</option>
          <option value="300">Pathanamthitta</option>
          <option value="296">Thiruvananthapuram</option>
          <option value="303">Thrissur</option>
          <option value="299">Wayanad</option>
          
          </select>
          <button class="button" type="submit">Check</button>
          
        </div>
        <h1> </h1>
        <div>
          <Contentr vaccine={this.state.vaccine}/>
        </div>
        
        
        
      </form>
      </div>
      
    )
  }
}
export default Header