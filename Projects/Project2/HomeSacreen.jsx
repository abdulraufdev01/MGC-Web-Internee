import { useNavigate } from "react-router-dom";

export default function HomeSacreen() {

    const navigate = useNavigate();

    return (
        <>
            <style>{`

                *{
                    margin:0;
                    padding:0;
                    box-sizing:border-box;
                    font-family:Arial, sans-serif;
                }

                body{
                    background:linear-gradient(135deg,#16a34a,#22c55e);
                }


                .home-container{

                    width:450px;
                    background:white;
                    margin:120px auto;
                    padding:40px;
                    text-align:center;
                    border-radius:15px;
                    box-shadow:0 10px 25px rgba(0,0,0,.2);

                }


                h1{

                    color:#16a34a;
                    margin-bottom:20px;
                    font-size:32px;

                }


                p{

                    color:#555;
                    margin-bottom:25px;
                    font-size:18px;

                }


                button{

                    padding:12px 30px;
                    background:#16a34a;
                    color:white;
                    border:none;
                    border-radius:8px;
                    cursor:pointer;
                    font-size:16px;
                    transition:.3s;

                }


                button:hover{

                    background:#15803d;
                    transform:translateY(-3px);

                }


            `}</style>



            <div className="home-container">

                <h1>
                    🎉 Task Completed
                </h1>


                <p>
                    Welcome! Your login was successful.
                </p>


                <button onClick={()=>navigate("/")}>
                    Logout
                </button>


            </div>

        </>
    )
}