import React,{useState} from 'react'
import Default from './Default';





export default function HomePage(props) {

  const [inptDetail,setinptDetail]=useState('') // הוק של אינפוט חיפוש עיר 
  const [cityName,setCityName]=useState('Tel aviv')




const apiKey = 'cqLsG9uzRds9yfP5fY7fG3nEhbZfrxkt'


// פונקציה שבודקת אם הערך של האינפוט הוא אותיות באנגלית 
const searchInpt =()=>{
//לולאה שעוברת על הערך של האינפוט 
   for (let i = 0; i < inptDetail.length; i++) {
   if (inptDetail.charAt(i) < 'A' || inptDetail.charAt(i) > 'Z' 
   && inptDetail.charAt(i) < 'a' || inptDetail.charAt(i) > 'z') {
   return false 
   }
 
// פונקציה שמכניסה את העיר לפי האינפוט ומציגה את המזג אוויר

    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${inptDetail}`)
    .then(res => res.json())
    .then((data) => {
        data.forEach((val) => {
        props.setCityKey(val.Key)
        })
        setCityName(inptDetail)
        props.setFlag(!props.flag)
    })
return true   
}
}











 
  


  return (
    <div>
      <br/>
      <br/>
      <label>Write a city name to get the weather</label><br/>

      <input type='text' onChange={(e)=>{setinptDetail(e.target.value)}}></input>


      <button onClick={searchInpt}>show weather</button><br/><br/>
      <button onClick={()=>{props.addtoFavorites(inptDetail)}}>Add to favoriets</button> 

    

      <div id='defaultD'>
      {props.defaultCity.map((val)=>{
        return <Default fiveDaysWeather={props.fiveDaysWeather} cityName={cityName} val={val}/>
      })}
      </div>

      
      
    
    </div>
  )
}
