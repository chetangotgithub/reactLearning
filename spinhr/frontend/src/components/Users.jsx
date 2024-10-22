import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";

const Users = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setusers(response.data);
      console.log(response.data);
    });
  }, []);

  const UsersList = ({ users }) => {
    return (
      <div>
        <ul>
          {users.map((user, index) => (
            <>
              <li key={user._id}>
                <h3>{`User ${index + 1}`}</h3>
                <Link to={`/users/${user._id}`}>{user.username}</Link>
              </li>
              <li>{user.email}</li>
            </>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <UsersList users={users} />
    </>
  );
};

export default Users;
