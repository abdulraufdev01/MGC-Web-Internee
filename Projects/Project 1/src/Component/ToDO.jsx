export default function ToDo({item ,Dhundo}) {

    return (
        <>
            <div style={{ backgroundColor: "lightblue", width: '250px', height: '250px' }} >


                <h1>Title:{item.Title}</h1>
                <h1>Description:{item.Description}</h1>
                
            </div>
        </>


    )

}