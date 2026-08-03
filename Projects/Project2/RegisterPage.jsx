import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          background:linear-gradient(135deg,#4f46e5,#3b82f6);
        }

        .container{
          width:380px;
          background:#fff;
          margin:70px auto;
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
          font-size:15px;
          outline:none;
          transition:.3s;
        }

        input:focus{
          border-color:#2563eb;
          box-shadow:0 0 8px rgba(37,99,235,.3);
        }

        button{
          width:100%;
          padding:12px;
          margin-top:15px;
          border:none;
          border-radius:8px;
          background:#2563eb;
          color:white;
          font-size:16px;
          cursor:pointer;
          transition:.3s;
        }

        button:hover{
          background:#1d4ed8;
        }

        p{
          margin-top:20px;
          color:#555;
        }

        span{
          color:#2563eb;
          cursor:pointer;
          font-weight:bold;
        }

        span:hover{
          text-decoration:underline;
        }
      `}</style>

      <div className="container">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={()=>navigate("/loginpage")}>
          Sign Up
        </button>

        <p>
          Already have an account?{" "}
          <span onClick={()=>navigate("/loginpage")}>
            Login
          </span>
        </p>

      </div>
    </>
  );
}