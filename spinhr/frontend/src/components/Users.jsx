import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((response) => {
      setusers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      {users.map((user, index) => {
        return (
          <div>
            <h1>{`User ${index + 1}`}</h1>
            <li>{user.username}</li>
            <li>{user.password}</li>
            <li>{user.email}</li>
          </div>
        );
      })}
    </>
  );
};

export default Users;
