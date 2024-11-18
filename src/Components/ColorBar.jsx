import React from 'react'

const ColorBar = ({defaultColor, setColor}) => {
  return (
    <>
      <div className= {`bg-${defaultColor} h-screen flex items-end justify-center`}>
        <div className='bg-zinc-300 p-8 gap-3 h-[55px] flex justify-around items-center rounded-[100px] mb-10'>
          <span className='bg-red-600 rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("red")}}>Red</span>
          <span className='bg-green-600 rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("green")}}>Green</span>
          <span className='bg-blue-600 rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("blue")}}>Blue</span>
          <span className='bg-[#808000] rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("olive")}}>Olive</span>
          <span className='bg-gray-600 rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("gray")}}>Gray</span>
          <span className='bg-yellow-600 rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("yellow")}}>Yellow</span>
          <span className='bg-pink-600 rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("pink")}}>Pink</span>
          <span className='bg-purple-600 rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("purple")}}>Purple</span>
          <span className='bg-[#e636fa] rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("lavender")}}>Lavender</span>
          <span className='bg-white rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-black' onClick={() => {setColor("white")}}>White</span>
          <span className='bg-black rounded-full px-3 py-1 cursor-pointer flex justify-center items-center text-white' onClick={() => {setColor("black")}}>Black</span>
        </div>
      </div>
    </>
  )
}

export default ColorBar