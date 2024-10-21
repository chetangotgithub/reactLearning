import React from "react";
import { useState } from "react";
import loginImage from "../assets/benjamin-chambon-vRu-Bs27E2M-unsplash.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Signup from "./signup";

const Login = () => {
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("credentials ", credentials);
    setcredentials({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100hw",
          height: "100vh",
        }}
      >
        <div>
          <img src={loginImage} alt="login" width={200} />
        </div>
        <div>
          <form onSubmit={handelSubmit}>
            <label htmlFor="username"> Username</label>
            <input
              value={credentials.username}
              name="username"
              onChange={() => {
                setcredentials({
                  ...credentials,
                  username: event.target.value,
                });
              }}
            />
            <label htmlFor="Password"> Password</label>
            <input
              value={credentials.password}
              type="password"
              name="Password"
              onChange={() => {
                setcredentials({
                  ...credentials,
                  password: event.target.value,
                });
              }}
            />
            <button>Submit</button>

            <div>
              <Link to="/signup">SignUp</Link>
            </div>

            <Routes>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
