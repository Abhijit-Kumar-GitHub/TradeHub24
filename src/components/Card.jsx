import React from 'react'
import CustomButton from './CustomButton'

const Card = ({tradeId, tradeHeading, tradeImage, tradeDescription}) => {
  return( 
    <>
       
        <div class="p-8 max-w-lg border bg-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#" style={{marginLeft : "5vh"}} >
    <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border" />
    <div class="mt-8 flex flex-col justify-center items-center text-center">
        <h4 class="font-bold text-xl">{tradeHeading}</h4>
        <p class="mt-2 text-gray-600">{tradeDescription}</p>
        <div class="w-fit" style={{marginBottom : "4vh"}}>
            <CustomButton buttonName={tradeHeading}/>
        </div>
    </div>
</div>
        
    </>
  )
}

export default Card
