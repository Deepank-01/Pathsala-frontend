import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const DynamicCode = ({content,direction}) => {
  return (
   <>
        <div className={`md:w-[20%] md:h-[20%] ${direction==true?("md: bg-[#1FA2FF]  md:right-56"):("md: bg-yellow-600  md:left-44")} md:z-1 md:blur-[90px] md:rounded-[100%]  md:absolute   `}></div>
    <div className=' relative  flex flex-row  h-fit  w-[250px] md:w-[500px]  md:mr-9 sm:mx-auto md:backdrop-blur-sm md: bg-black/10 p-6 '>
   
    
    <div className=' flex flex-col  w-[10%] text-richblack-400 font-inter font-bold  text-[14px]  '>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            
        </div>
        <div className='flex flex-col gap-2 font-bold font-mono text-yellow-200  pr-2  text-[14px] w-[90%] '>
        <TypeAnimation
           sequence={[content, 2000, ""]} 
           repeat={Infinity}
            cursor={true}
              
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
        />
        </div>
    </div>
    </>
  )
}

export default DynamicCode