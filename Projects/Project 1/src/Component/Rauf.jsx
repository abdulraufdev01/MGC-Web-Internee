export default function Rauf({ user, fun }) {

    return (
        <div >

            <div style={{ backgroundColor: 'red' }}>

                <h1>name:{user.name}</h1>
                <h1>age:{user.age}</h1>
                <h1>designation:{user.designation}</h1>
                <button onClick={fun}>Delete</button>
            </div>

        </div>


    )

}