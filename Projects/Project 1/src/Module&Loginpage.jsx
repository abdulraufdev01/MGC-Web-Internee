import { useState } from "react";

export default function App() {
  let [a, setA] = useState(10);
  let [perc, setPerc] = useState("");

  let age = 170;

  let [show, setShow] = useState(false);
  let [isLogin, setLogin] = useState(false);

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function checkLogin() {
    if (username === "rauf" && password === "123") {
      setLogin(true);
      setShow(false);
    } else {
      alert("Invalid Username or Password");
    }
  }

  function logout() {
    setLogin(false);
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <h1>Welcome to React</h1>

      <button onClick={() => setA(false)}>Register Now</button>

      {a == 10 && <h1>Ye chle ga condition pe</h1>}

      <input
        type="text"
        value={perc}
        onChange={(e) => setPerc(e.target.value)}
      />

      <p>Your percentage is : {perc}</p>

      {perc < 80 ? (
        <p style={{ color: "red" }}>
          You are not eligible for scholarship
        </p>
      ) : (
        <p>You are eligible</p>
      )}

      {age >= 18 ? (
        <p>You can drive</p>
      ) : (
        <p>You cannot drive</p>
      )}

      <button onClick={() => setShow(true)}>Login Now</button>

      {show && (
        <div
          style={{
            backgroundColor: "#00000054",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70vw",
              gap: "20px",
              backgroundColor: "black",
              padding: "30px",
              borderRadius: "32px",
              height: "60vh",
            }}
          >
            <button
              style={{ width: "30px", backgroundColor: "red" }}
              onClick={() => setShow(false)}
            >
              X
            </button>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={checkLogin}>Login</button>
          </div>
        </div>
      )}

      {isLogin && (
        <div
          id="HomePage"
          style={{
            position: "absolute",
            top: 0,
            backgroundColor: "beige",
            height: "100vh",
            width: "100%",
          }}
        >
          <h2>Welcome Sir to Home Page</h2>

          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />

          <button>hdg</button>
          <button>hdg</button>
          <button>hdg</button>
          <button>hdg</button>
          <button>hdg</button>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non,
            expedita officiis quis tenetur asperiores vero dolores dolorum
            quasi quas sit provident perspiciatis laborum! A neque et quam
            debitis harum.
          </p>

          <button onClick={logout}>Logout</button>
        </div>
      )}
    </>
  );
}