export default function Rauf2({product, Deletekro }) {


    return (

        <div className="box">
            <h1>Name:{product.name}</h1>
            <h1>price:{product.price}</h1>
            <h1> description:{product.description}</h1>

            <button onClick={Deletekro}>Delete</button>

        </div>
    )

}