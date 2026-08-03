import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {

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
          background:linear-gradient(135deg,#4f46e5,#3b82f6);
        }

        .container{
          width:400px;
          background:white;
          margin:100px auto;
          padding:40px;
          border-radius:15px;
          text-align:center;
          box-shadow:0 10px 25px rgba(0,0,0,0.2);
        }

        h1{
          color:#2563eb;
          margin-bottom:15px;
        }

        p{
          color:#555;
          margin-bottom:30px;
          line-height:1.6;
        }

        .btns{
          display:flex;
          justify-content:center;
          gap:15px;
        }

        button{
          padding:12px 25px;
          border:none;
          border-radius:8px;
          background:#2563eb;
          color:white;
          font-size:16px;
          cursor:pointer;
          transition:0.3s;
        }

        button:hover{
          background:#1d4ed8;
          transform:translateY(-3px);
        }

        a{
          color:white;
          text-decoration:none;
        }
      `}</style>

      <div className="container">

        <h1>Welcome to RiterX 🚀</h1>

        <p>
          Welcome to RiterX! Create your account and start your journey with our
          simple and secure application.
        </p>

        <div className="btns">

          <button>
            <Link to="/registerpage">Register</Link>
          </button>

          <button onClick={() => navigate("/registerpage")}>
            Get Started
          </button>

        </div>

      </div>
    </>
  );
}