import './Covid19.css'

import React,{Component} from 'react';

import  {BsSearch} from 'react-icons/bs';
import Selection from './selection'
import axios from 'axios'

class Covid19 extends Component {
  state={
    text:"",time:new Date(),data:null,country:null
  }
    changehandel(event){
      const name=event.target.value
      this.setState({...this.state.Age,text:name})
    }
  sumbit=()=>{this.setState({...this.state,country:this.state.text.toLowerCase()})}
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.sumbit()
    }}
    selecthandel=(e)=>{this.setState({...this.state, text:e.target.value}) 
    
  }
  componentDidMount(){
  axios.get('https://api.covid19api.com/summary').then(result=>{
    console.log(result.data)
this.setState({data:result.data})
})}
  render() {
    var data=[]
    if(this.state.data)
    {
    this.state.data.Countries.forEach(element => {
      if(element.Country.toLowerCase()===this.state.country)
      {
        console.log(element)
        data[0]="Country: "+element.Country
        data[1]="New Confirmed: "+element.NewConfirmed
        data[2]="Total Confirmed: "+element.TotalConfirmed
        data[3]="New Deaths: "+element.NewDeaths
        data[4]="Total Deaths: "+element.TotalDeaths
        data[5]="New Recovered: "+element.NewRecovered
        data[6]="Total Recovered: "+element.TotalRecovered
      }
      
    });}
    const displaydata=(array)=>{return(<div className="displayeddata"><ul><li>{array[0]}</li>
    <li>{array[1]}</li>
    <li>{array[2]}</li>
    <li>{array[3]}</li>
    <li>{array[4]}</li>
    <li>{array[5]}</li>
    <li>{array[6]}</li></ul>
    
    </div>)}
    return (
      <div className="Covid19">
      <h1>Search for the country</h1>
      <Selection onChange={this.selecthandel}/>
      <div className="searchcontainer">
        <input type="text" onChange={this.changehandel.bind(this)} className="input" onKeyDown={this._handleKeyDown} value={this.state.text}/>
        {this.state.text? <BsSearch className="search"  onClick={ this.sumbit} />: <BsSearch className="search searchnone"  />}
        </div>
        {data[0]?displaydata(data):this.state.country?<div className="Error">Please Enter a valid Country</div>:null}
      </div>
    );
  }
}
export default Covid19;
