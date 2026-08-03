import { Link, useNavigate } from "react-router-dom"



 
function HomePage() {
    let chacha = useNavigate()

    function GoToAbout() {
        chacha('/aboutpage')
    }


  return (
    <div>
        <h1>Welcome to Home Screen</h1>
        <button >    
            <Link to='/aboutpage'> About Page  </Link>            
        </button>

        <button onClick={GoToAbout} > Click to go</button>
        
    </div>
  )
}

export default HomePage
