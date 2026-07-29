import { useState } from "react"

export default function Login() {
let [login , setlogin]=useState(false)
let [username , setusername]=useState('')
let [password ,setpassword]=useState('')
let [name,setname]=useState('')

  function checkLogin() {
    if (username === "rauf" && password === "123") {
      setLogin(true);
    } else {
      alert("galat Password Dobara Try kran");
    }
  }
function Addkro() {
    setname(name => [...name, name])
}

    return(
     <>  
      <div style={{ backgroundColor:"beige" , display:"flex", textAlign:"center", height:'150px' ,width:'140px'}}>
<input type="text" placeholder="username" name="" value={username} onChange={(e)=>setusername(e.target.value)}/>
<input type="password" placeholder="password" name="" value={password} onChange={(e)=>setpassword(e.target.value)}/>
<button onClick={checkLogin}>Login</button>
</div>


{login && ( 
<div style={{backgroundColor:"orange", height:'160px', width:'160px'}}>
<h1 > Home Page</h1> 
<input type="text" placeholder="Add Name" name="" value={name} onChange={(e)=>setname(e.target.value)}/>
<button onClick={Addkro}>Add</button>
</div>

)}




</>


    )
    
}