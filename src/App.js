
import './App.css';
import { useEffect, useState } from 'react'
import {HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import FavoritesPage from './component/FavoritesPage';
import Menu from './component/Menu';

function App() {
  const [cityKey,setCityKey] = useState('215854')
  const [defaultCity,setDefaultCity] = useState([])
  const [fiveDaysWeather,setFiveDaysWeather] = useState([])
  const [favorites,setFavorites]=useState([])
  const [flag, setFlag] = useState(false)


  const apiKey = 'cqLsG9uzRds9yfP5fY7fG3nEhbZfrxkt'


  // פונקציה מקבלת את המספר של העיר ומפתח של האפפ ומחזירה את המזג אוויר
  useEffect(() => {
    try{ // בודק אם יש שגיאה בלי להקריס את כל הפעולה
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        setDefaultCity(data) // מעדכן את המערך של השם של העיר
      })
      .catch((err) => {
        if (err) throw err
      })
    }catch(err){ // בודק שגיאה ומדפיס אותה 
      console.log(err);
    }

  }, [flag])



//  פונקציה מקבלת את המספר של העיר ומפתח של האפפ ומחזירה את המזג אוויר ל5 ימים
 useEffect(() => {
  try{ // בודק אם יש שגיאה בלי להקריס את כל הפעולה
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setFiveDaysWeather(data) // מעדכן את המערך של השם של ה5 ימים
      })
      .catch((err) => {
        if (err) throw err
      })
    }catch(err){ // בודק שגיאה ומדפיס אותה 
      console.log(err);
    }

  }, [flag])


// פונקציה מוסיפה את העיר למועדפים ואותו כפתור בודק אם העיר קיימת אז מוחק אותה 
  const addtoFavorites = (name) => {
  let result = favorites.find((val) => (val.name == name))
    if (result == undefined) {
    setFavorites([...favorites, {defaultCity, name }]) // מעדכן את המערך ומכניס אליו את העיר עם השם שהתקבל כפרמטר בפונקציה
    }else {
  let filterFiv = favorites.filter((val) => (val.name != name))
    setFavorites(filterFiv)
    }

  }

  

  
  
    

  return (
    <div className="App">
    <HashRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<HomePage addtoFavorites={addtoFavorites} fiveDaysWeather={fiveDaysWeather} setCityKey={setCityKey} flag={flag} setFlag={setFlag} defaultCity={defaultCity}/>} />
          <Route path='/favorites' element={<FavoritesPage favorites={favorites}/>} />
        </Routes>
    </HashRouter>

    </div>
  );
}

export default App;
