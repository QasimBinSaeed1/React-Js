import { useState } from "react"


function App() {
  const [color,setColor] = useState("black")
  return (
     <div className=" w-full h-screen  duration-300 " style={{backgroundColor : color}}>
      <div className="bar fixed inset-x-0 bottom-7 flex flex-wrap justify-center items-center ">
        <div className="rounded-full bg-white p-2">
          <button onClick={()=>setColor("red")} className=" font-sans font-bold rounded-full bg-red px-4 py-2  m-2" style={{backgroundColor : "red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className="font-sans font-bold rounded-full bg-red px-4 py-2  m-2" style={{backgroundColor : "blue"}}>Blue</button>
          <button onClick={()=>setColor("yellow")} className="font-sans font-bold rounded-full bg-red px-4 py-2  m-2" style={{backgroundColor : "yellow"}}>Yellow</button>
          <button onClick={()=>setColor("orange")} className="font-sans font-bold rounded-full bg-red px-4 py-2  m-2" style={{backgroundColor : "orange"}}>Orange</button>
          <button onClick={()=>setColor("violet")} className="font-sans font-bold rounded-full bg-red px-4 py-2  m-2" style={{backgroundColor : "violet"}}>Violet</button>
          <button onClick={()=>setColor("indigo")} className="font-sans font-bold rounded-full bg-red px-4 py-2  m-2" style={{backgroundColor : "indigo"}}>Indigo</button>
        </div>
      </div>
      

     </div>
  )
}

export default App
