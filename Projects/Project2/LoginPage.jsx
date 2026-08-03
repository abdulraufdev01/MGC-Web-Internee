import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginPage() {

  let [name, setename] = useState('')
  let [password, setPass] = useState('')

  const navigate = useNavigate();


  function checkLogin() {

    if(name==="Rauf" && password==="3536" ){
      navigate("/homesacreen");
    }
    else{
      alert("Please try again")
    }

  }


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
        background:linear-gradient(135deg,#2563eb,#4f46e5);
      }


      .login-container{

        width:380px;
        background:white;
        margin:100px auto;
        padding:35px;
        border-radius:15px;
        text-align:center;
        box-shadow:0 10px 25px rgba(0,0,0,.2);

      }


      h1{
        color:#2563eb;
        margin-bottom:25px;
      }


      input{

        width:100%;
        padding:12px;
        margin:12px 0;
        border:1px solid #ccc;
        border-radius:8px;
        outline:none;
        font-size:15px;

      }


      input:focus{

        border-color:#2563eb;
        box-shadow:0 0 8px rgba(37,99,235,.3);

      }


      button{

        width:100%;
        padding:12px;
        margin-top:15px;
        background:#2563eb;
        color:white;
        border:none;
        border-radius:8px;
        cursor:pointer;
        font-size:16px;
        transition:.3s;

      }


      button:hover{

        background:#1d4ed8;
        transform:translateY(-2px);

      }


      .text{

        margin-top:20px;
        color:#555;

      }


      .text span{

        color:#2563eb;
        font-weight:bold;
        cursor:pointer;

      }


    `}</style>



    <div className="login-container">


      <h1>Login Page</h1>


      <input 
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange={(e)=> setname(e.target.value)}
      />


      <input 
      type="password"
      placeholder="Enter Password"
      value={password}
      onChange={(e)=> setPass(e.target.value)}
      />


      <button onClick={checkLogin}>
        Login
      </button>


      <div className="text">
        Don't have account? 
        <span onClick={()=>navigate("/registerpage")}>
          Register
        </span>
      </div>


    </div>


    </>
  )
}

export default LoginPage