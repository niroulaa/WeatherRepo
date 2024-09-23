import React from 'react'
import sunny from  './clear (sunny).png'
import clouds from './CLOUDS.png'
import rain from './RAIN.png'
import wind from './wind.png'

const Sidebody = () => {
  return (
    <div className='weather-icon h-[90vh] w-[30vw] bg-slate-200 flex flex-col gap-0  '>
      <div className='weather-icon-div  h-[60vh]  flex    bg-gradient-to-r from-slate-300 to-slate-500 ' >
        <img src={rain} alt='rain' className=' h-[40vh] m-auto scale-125' />
      </div>

      <div className='cloudyorrainy  h-[30vh] w-[30vw]  '>

        <div className='h-[30vh] w-[30vw] bg-gradient-to-r from-cyan-500 to-blue-500 mt-[0vh] flex   items-center justify-center '> 
          <strong className='text-3xl  text-white'>It's Rainy  in Kathmandu</strong>
        </div>


      </div>
    </div>
  ) 
}

export default Sidebody
