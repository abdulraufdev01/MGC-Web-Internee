import { useState } from "react"
import Rauf from "./Component/Rauf"

export default function App() {


  let [User, Usereset] = useState(
    [
      {
        name: "Ali",
        age: 34,
        designation: "it"
      },
      {
        name: "Shahzad",
        age: 33,
        designation: "Stock"
      },
      {
        name: "Khizar",
        age: 19,
        designation: "dev"
      },
      {
        name: "Hassan",
        age: 31,
        designation: "Stock"
      },
      {
        name: "Hasan",
        age: 37,
        designation: "Manager"
      }
    ]
  )





  function Alert(index) {
    let i = index
    console.log(i)

    let newAray = User.filter((item, index) => !(index == i))
    console.log(newAray);
    Usereset(newAray)




  }




  let name = "Rauf"

  // ArrayName.map(   (item , index)=> values/component/element     )

  let userslist = User.map((item, index) => <Rauf key={index} user={item} fun={()=>Alert(index)} />)


  return (
    <>
      <button onClick={Alert}>CLick me</button>

      {userslist}

    </>



  )

}