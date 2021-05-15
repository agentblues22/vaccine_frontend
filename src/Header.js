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
    
    axios.get("https://vaccinefrontend.herokuapp.com/vaccine",{ params:{distr : this.state.district}}).then(response =>{
      
      this.setState({
       vaccine: response.data.availability
      });
      
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