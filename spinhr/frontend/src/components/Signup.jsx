import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userDetail, setuserDetails] = useState({
    username: "",
    password: "",
    retype: "",
    email: "",
  });

  const navtigate = useNavigate();
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (userDetail.password !== userDetail.retype) {
      alert("Pasword does not match");
      return;
    }

    await axios
      .post("http://localhost:3000/", {
        username: userDetail.username,
        password: userDetail.password,
        email: userDetail.email,
      })
      .then((res) => {
        console.log(res);
        alert(`Successfully added User ${userDetail.username}`);
        navtigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(`Error ocurred ${error.message}`);
      });

    setuserDetails({ username: "", password: "", retype: "", email: "" });
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          value={userDetail.username}
          onChange={() =>
            setuserDetails({
              ...userDetail,
              username: event.target.value,
            })
          }
        />
        <br />
        <label htmlFor="password">password : </label>
        <input
          type="password"
          name="password"
          value={userDetail.password}
          onChange={() =>
            setuserDetails({
              ...userDetail,
              password: event.target.value,
            })
          }
        />
        <br />
        <label htmlFor="retype"> Retype Passowrd : </label>
        <input
          type="password"
          name="retype"
          value={userDetail.retype}
          onChange={() =>
            setuserDetails({
              ...userDetail,
              retype: event.target.value,
            })
          }
        />
        <br />
        <label htmlFor="email">Email Id : </label>
        <input
          type="text"
          name="email"
          value={userDetail.email}
          onChange={() =>
            setuserDetails({
              ...userDetail,
              email: event.target.value,
            })
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
