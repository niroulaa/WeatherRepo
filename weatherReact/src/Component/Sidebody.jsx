import React, { useContext } from 'react'
import sunny from  './clear (sunny).png'
import clouds from './CLOUDS.png'
import rain from './RAIN.png'
import wind from './wind.png'
// import ss from "./ss.png
import { cityNameContext } from './Navbar'
import { weatherContext } from './Maincontent'


const Sidebody = () => {
  const {cityName, searchClicked, cityChanged,enterTrigger}= useContext(cityNameContext);
  const weatherState= useContext(weatherContext)

  return (
    <div className='weather-icon h-[90vh] w-[30vw] bg-slate-200 flex flex-col gap-0  '>
      <div className='weather-icon-div  h-[60vh]  flex    bg-gradient-to-r from-slate-300 to-slate-500 ' >
        {weatherState===null?(
         <h1 className='m-auto text-[3vh] font-bold'>WEATHER CONDITION WILL APPEAR HERE</h1>)
       : (<img src={ (weatherState==='Clear')?sunny:(weatherState==='Clouds')?clouds:(weatherState==='Rain')?rain:"" } alt='weather' className=' h-[40vh] m-auto scale-125' />)}
      </div>

      <div className='cloudyorrainy  h-[30vh] w-[30vw] '>

        <div className='h-[30vh] w-[30vw] bg-gradient-to-r from-cyan-500 to-blue-500 mt-[0vh] flex   items-center justify-center '> 
          <strong className={`text-3xl  text-white ${enterTrigger==0?'hidden':'block'}`}>It's  {weatherState=='Clouds'?'cloudy':weatherState=='Rain'?'rainy':weatherState=='Clear'?'sunny':``}  in {cityName}</strong>
          <strong className={`text-3xl  text-white ${enterTrigger!=0?'hidden':'block'}`}>Hey ! which place?</strong>

        </div>


      </div>
    </div>
  ) 
}

export default Sidebody
