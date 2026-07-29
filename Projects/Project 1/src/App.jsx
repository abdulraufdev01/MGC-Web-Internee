import { useState } from "react"

export default function App() {
  let inputstyle = { textAlign:'center', width:'50%', padding:'5px', borderRadius:'12px', border:'none', borderBottom:'1px solid', outline:'none', margin:'0px auto'}

 
  let [login, setLogin] = useState(true)
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [name, setName] = useState('')
  let [age, setage] = useState('')
  let [names, setNames] = useState([
    {
      name: "Amjid",
      age: 21
    },
    {
      name: "Ali Raza",
      age: 34

    }
  ])

  function checkLogin() {
    if (username === "rauf" && password === "3536") {
      setLogin(false);
    } else {
      alert("Ghalat Password Dobara Try karain");
    }
  }

  function Addkro() {

    let a = {
      name: name,
      age: age
    }
    setNames(prev => [...prev, a])
    setName('')
    console.log(a)
  }
  function deleteKro(index) {

    let newArray = names.filter((item, i) => i !== index)

    setNames(newArray)

  }



return (
  <>
    {login && <div style={{ backgroundColor: "darkblue", height: '100vh', width: '100vw', display: "flex", justifyContent: 'center', alignItems: 'center',  position:"absolute"}}>
      <div style={{ backgroundColor: "beige", display: "flex", flexDirection: "column", gap: "10px", textAlign: "center", paddingTop:'120px', width: '500px', height:'500px' }}>
        <input type="text" style={inputstyle}    placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" style={inputstyle} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={checkLogin} style={{backgroundColor:'green',  width:'50px', textAlign:'center', margin:'0px auto' }}>Login</button>
      </div>
    </div>}


    <div  style= {{ background: "linear-gradient(135deg,#4facfe,#00f2fe)", height: "100vh", width: "100vw",    display: "flex", flexDirection: "column",  alignItems: "center",  padding: "20px", boxSizing: "border-box", }}>
      <h1  style={{color: "white", marginBottom: "20px",fontSize: "35px", }}>Home Page</h1>
      <input type="text" placeholder="Add Name" value={name} onChange={(e) => setName(e.target.value)}  style={{ width: "50%", height:'40px', marginBottom: "20px", textAlign:'center',borderRadius: "5px",border: "1px solid gray",  }} />
      <input type="text" placeholder="Add age" value={age} onChange={(e) => setage(e.target.value)}  style={{width: "50%", height:'auto',padding: "10px",  marginBottom: "10px",textAlign:'center',  borderRadius: "5px", border: "1px solid gray",  }} />
      <button onClick={Addkro}    style={{  width: "50%",padding: "10px",backgroundColor: "green" ,color: "white",border: "none", borderRadius: "5px",cursor: "pointer", }}>Add</button>

      {/* {names.map((a, index) => <div key={index}>
        <p>name:{a.name}</p>
        <p>Age:{a.age}</p>
      </div>)
      } */}

      {names.map((a, index) => (
        <div key={index} style={{ borderBottom: "1px solid black", paddingBottom: "5px", marginBottom: "5px" }}>
          <p>name:{a.name}</p>
          <p>Age:{a.age}</p>
          <button onClick={() => deleteKro(index)}   style={{ backgroundColor: "red",color: "white", border: "none", padding: "8px 15px",  cursor: "pointer", borderRadius: "5px",
        }} >Delete</button>
        </div>
      ))}

    </div>

  </>
)
}
