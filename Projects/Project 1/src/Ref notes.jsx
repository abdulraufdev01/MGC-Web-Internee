import { useRef } from "react"

export default function App() {
  
  let number1ref = useRef()
  let number2ref = useRef()
  let resultref = useRef()
  function resultshow() {
    // console.log(number1ref.current.value);
    let result = Number(number1ref.current.value) + Number(number2ref.current.value)
    resultref.current.innerText = result
    console.log(result);
    
  }
  
  return (
    <>
    
      <h1>Login Form</h1>
      <input ref={number1ref} type="number" />
      <input ref={number2ref} type="number" />
      <button onClick={resultshow}>Click kro</button>
      <div ref={resultref} id="result" style={{backgroundColor:"black", color:'white', height:'100px', width:'100px', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'20px'}}> 

      </div>
    
    </>
  )
}