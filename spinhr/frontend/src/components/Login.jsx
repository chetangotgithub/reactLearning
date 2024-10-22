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
  Navigate,
} from "react-router-dom";
import Signup from "./Signup";
import axios from "axios";

const Login = () => {
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });
  const [validUser, setvalidUser] = useState(null);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("credentials ", credentials);
    const response = await axios.post(
      "http://localhost:3000/login",
      credentials
    );
    console.log(response);
    if (response.data.status == "failure") {
      alert(response.data.message);
    } else {
      navigate("/users");
      setvalidUser(response.data.accessToken);

      setcredentials({
        username: "",
        password: "",
      });
    }
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
