import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
import compass from './images/icon-compass.png';
import degree from './images/icon-umberella.png';
import wind from './images/icon-wind.png';
import loc from './images/./icon-marker.png';
import prep from './images/perp.svg';
import temp from './images/temp.svg';
import drop from './images/drop.png';
import guage from './images/gauge.png';
import cond from './images/cond.svg';
import icon5 from './images/icon-5.svg';





 class App extends Component {
	  
	constructor(){
		super();

	this.state ={
		
		 input : '',
		 str:'',
		 url:'', 
		 showing:false,
		 kmp:'kmp',
		 per:'%'
			
		};
	}
 

	 getData = e =>{
		 this.setState({input:e.target.value});
	 }

	   searchLoc = () => {
		  this.showing=true;
		  if(this.state.updateData==='' || this.state.input===''){
			  alert("Enter valid Location");
		  }
		  else{
		  let  api=`https://api.weatherapi.com/v1/current.json?key=%20999e947a061d42b9b28183001211406&q=`
		  this.str=this.state.input;
		  this.url=api+this.str
		  this.updateData();
		} 
	   }
	 
       updateData = () =>{
    
		fetch(this.url)
		.then(response=>{
		return response.json();
		
	 
			
			
		})
		.then(response=>{
			this.setState({data:response})
			this.setState({
				city:response.location.name,country:response.location.country,
				ctemp:response.current.temp_c,date:response.location.localtime,
				windspeed:response.current.wind_kph,feelike:response.current.feelslike_c,
				condition:response.current.condition.text,humidity:response.current.humidity,
				precipitation:response.current.precip_mm,presure:response.current.pressure_mb,
				degree:response.current.wind_degree,compass:response.current.wind_dir
				

			})

		});
		

		}

	  
	
	







 render() {

  return (
  <>
  
  <div className="site-content">
			<div className="site-header">
				<div className="container">

        
			<div className="hero" data-bg-image="images/banner.png">
				<div className="container">
          <div className="find-location">
						<input type="search" onChange={this.getData} value={this.state.input}  placeholder="Search your location..." required/>
						<button type="submit" onClick={this.searchLoc} >search</button>
            </div>
				</div>
			</div>
  
      <div className="forecast-table"  style={{display:this.showing?"inline":"none"}}>
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day">TODAY</div>
								<div className="date">{this.state.date}</div>
								
							</div> 
							<div className="forecast-content">
							 <span><img src={loc} alt=""/></span>
								<div  className="location">{this.state.city} </div>
								<div className="location">{this.state.country}</div>
								
								<div className="locationdate">{this.state.condition} <span><img src={cond} alt="" width="30"/></span></div>
								<div className="degree">
								<span><img src={temp} alt=""  width="58"/></span>
									<div className="num">{this.state.ctemp}<sup>o</sup>C</div>
										
								</div>
								
								<span><img src={degree} alt=""/>{this.state.degree}%</span>
								<span><img src={wind} alt=""/>{this.state.windspeed}{this.state.kmp}</span>
								<span><img src={compass} alt=""/>{this.state.compass}</span>
							
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">FEELS LIKE</div>
							</div> 
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={icon5} alt="" width="48"/>
								</div>
								<div className="degree">{this.state.feelike}<sup>o</sup>C</div>
								
							</div>
						</div>
						
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">HUMIDITY</div>
							</div> 
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={drop} alt="" width="48"/>
								</div>
								<div className="degree">{this.state.humidity}<sup>o</sup>C</div>
								
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">PRECIPATION</div>
							</div>
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={prep} alt="" width="48"/>
								</div>
								<div className="degree">{this.state.precipitation}mm</div>
								
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">PRESURE</div>
							</div> 
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={guage} alt="" width="48"/>
								</div>
								<div className="degree">{this.state.presure}mb</div>
								
							</div>
						</div>
						
					</div>
				</div>
			</div>
		
        </div>
      </div>
  </div>
  
    

</>
  )};
 }


export default App;
