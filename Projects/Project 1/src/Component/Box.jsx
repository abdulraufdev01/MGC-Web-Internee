import './Box.css'

export default function Box({p}) {

  
    function deletekro() {
        
    }



    return (
        <>
            <div className="box">
                {p}

                <button onClick={deletekro}>Delete</button>
            </div>
        </>
    )
}