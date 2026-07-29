import Card from "./Components/Card"
import './style.css'

function App() {

  let price1 = 3000
let price2 =4000
let price3 =9000



  return (
    <div id="card-container">
      
      <Card title="Car" price={price1} />
      <Card title="Bike" price={price2} />
      <Card title="200" price={price3} />


    </div>
  )
}
export default App