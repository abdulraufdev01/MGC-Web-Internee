import { useState } from "react";

function App() {
  let greeting = "hellow"

  let [gretter, setter] = useState('ahgsdjhasgdsagd')

  function abc() {
    setter('gadhasfdgfasdgf')
  }

  greeting = 'Hey '

  let [c, setc] = useState(200)


  console.log(c)




  return (
    <>

      <h1 >{greeting}</h1>
      <p onClick={abc}>{gretter}</p>
      <input type="text" placeholder="enter your marks" value={gretter} onChange={(e) => setter(e.target.value)} />
      <p></p>
      <p>{c}</p>

    </>
  )
}


export default App