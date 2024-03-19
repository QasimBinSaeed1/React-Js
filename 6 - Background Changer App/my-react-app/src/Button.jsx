import React from 'react'

function colourNameToHex(colourName) {
  const colours = {
    "red": "#ff0000",
    "orange": "#ffa500",
    "yellow": "#ffff00",
    "green": "#008000",
    "blue": "#0000ff",
    "indigo": "#4b0082",
    "violet": "#ee82ee"
  };
  

  return colours[colourName.toLowerCase()] || "bg-gray-500";
}


function Button({name}) {
  const bgColor = colourNameToHex(name)
  return (
    <button className={` font-serif- text-sm font-bold p-2 w-[100px] rounded-xl text-white bg-[${bgColor}]`}>{name}</button>
  )
}

export default Button