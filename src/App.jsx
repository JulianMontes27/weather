import React, {useState} from 'react';
import axios from 'axios';
import { Footer } from './components/index';

const App = () => {
  const [data, setData]=useState([]);
  const [loc, setLoc]= useState('');

  const key= import.meta.env.VITE_API_KEY

  const url=`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${key}`;

  const handleLoc = (e) => {
    if (e.key === 'Enter'){

      axios.get(url).then(res=>{
        const firstData= res.data;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${firstData[0].lat}&lon=${firstData[0].lon}&units=metric&appid=b4015e6a425025c751c407cb041d5e7a`).then(newData=>{
          const locationData= newData.data;
          console.log(locationData)

          setData(locationData)
        })
      })
    }
  }
  
  return (
    <div id='app' className='w-full h-[100vh] relative bg-rgbaBG text-white'>
      <div className='flex flex-row justify-center items-center text-center p-[1rem] text-[1.2rem]'>
        <input className='placeholder-slate-300 py-[1.5rem] px-[.7rem] rounded-2xl bg-input border h-2 text-white' type="text" id="inp" onChange={event => setLoc(event.target.value)} onKeyDown={handleLoc} placeholder='Enter a location...'
         />
      </div>
      <div id='container' className='max-w-[700px] h-[700px] m-auto px-[1rem] py-[0rem] relative sm:top-[0] top-[0] flex flex-col justify-between'>
        <div id='top' className='w-full mx-[1rem] my-auto'>
          <div id='location' className=''>
            {
              data.sys ? <p>{data.name}, {data.sys.country}</p> : ''
            }
          </div>
          <div id='temp'>
            {
              data.main ? <h1>{`${Math.round(parseFloat(data.main.temp))}`} C°</h1> : ''
            }
          </div>
          <div id="descrip" className='relative right-[-90%]'>
            {
              data.weather ? <p>{`${data.weather[0].main}`}</p> : null
            }
          </div>
        </div>
        {
          data.name !== undefined ? 
          <div id='bottom' className='flex justify-evenly text-center w-full  p-[1rem] rounded-2xl bg-rgbaBG'>
          <div id="feels">
            {data.main ? <p className='font-bold'>{Math.round(parseFloat(data.main.feels_like))} C°</p> : null}
            <p className='font-light'>Feels like</p>
          </div>
          <div id="humidity">
            {data.main ? <p className='font-bold'>{data.main.humidity}%</p> : null}
            <p className='font-light'>Humidity</p>
          </div>
          <div id="wind">
            {data.wind ? <p className='font-bold'>{data.wind.speed} KPH</p> : null}
            <p className='font-light'>Wind Speed</p>
          </div>
        </div>
          : null
        }
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
