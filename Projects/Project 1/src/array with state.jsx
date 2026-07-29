import { useState } from "react"
import Box from "./Component/Box"

export default function App() {
  let [Products, setProducts] = useState(['abc', 123, 'sad'])
  let [item, setItem] = useState()


  function Addkro() {
    setProducts(prev => [...prev, item])


  }

  function Deletekro() {


  }




  return (
    <>
      <h1>Welcome Back 😁</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        {/* 
      <Box p={Products[0]} />
      <Box p={Products[1]} />
      <Box p={Products[2]} /> */}

        {
          // Products.map((prod , index)=> <Box  key={index} p={prod}/> )
          Products.map((prod, index) =>
            <div className="box">
              {prod}

              <button onClick={()=> Deletekro(index)}>Delete</button>
            </div>)

        }

      </div>

      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <p>Value : {item}</p>
      <button onClick={Addkro}>Add</button>






    </>
  )
}