import React from 'react'
import cloudy from './cloudy.png'

export default function FavoritesPage(props) {
  return (
<div>
<div id='mainDiv'>
{props.favorites.map((val)=>{
  return <div id='defaultDiv'><h5>{val.name}</h5>
  {val.defaultCity.map((val)=>{
    return <div>
    <h5>{val.Temperature.Metric.Value}{val.Temperature.Metric.Unit}</h5>
    <h5>{val.WeatherText}</h5>
    <img src={cloudy}  />
    </div>
  })}
  </div>
})}
</div>

</div>
  )
}
