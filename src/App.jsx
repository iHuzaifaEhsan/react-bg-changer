import React, { useState } from 'react'
import ColorBar from './Components/ColorBar'

const App = () => {

  const [defaultColor, setdefaultColor] = useState("black")

  const colorfunc = (color) => {
    if (color == "red") {
      setdefaultColor("red-600");
    } else if (color == "green") {
      setdefaultColor("green-600");
    } else if (color == "blue") {
      setdefaultColor("blue-600");
    } else if (color == "olive") {
      setdefaultColor("[#808000]");
    } else if (color == "gray") {
      setdefaultColor("gray-600");
    } else if (color == "yellow") {
      setdefaultColor("yellow-600");
    } else if (color == "pink") {
      setdefaultColor("pink-600");
    } else if (color == "purple") {
      setdefaultColor("purple-600");
    } else if (color == "lavender") {
      setdefaultColor("[#e636fa]");
    } else if (color == "white") {
      setdefaultColor("white");
    } else if (color == "black") {
      setdefaultColor("black");
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <ColorBar defaultColor={defaultColor} setColor={colorfunc} />
      </div>
    </>
  )
}

export default App