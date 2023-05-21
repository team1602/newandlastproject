import React,{useState} from 'react'
import cloudy from './cloudy.png'

export default function Default(props) {

     const [day,setDay]=useState(['sun','mon','tue','Wed','Thu'])

  return (
    <div>
    <div id='mainDiv'>
        <div id='defaultDiv'>
        <h3>{props.cityName}</h3>
        <h5>{props.val.Temperature.Metric.Value}{props.val.Temperature.Metric.Unit}</h5>
        <h5>{props.val.WeatherText}</h5>
        <img src={cloudy}  />
        </div>
    </div>
    

    <div id='fDDiv'>
      {props.fiveDaysWeather.DailyForecasts.map((val,index)=>{
        return <div id='fDaysDiv'>
         <h3>{day[index]}</h3>
        <h5>{val.Temperature.Maximum.Value}{val.Temperature.Maximum.Unit}</h5>
        <img src={cloudy}  />
        </div>
      })}
     
    </div>   
        
    </div>
  )
}
