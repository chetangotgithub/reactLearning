import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setuser] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:3000/users/${id}`).then((response) => {
      setuser(response.data);
      console.log(response.data);
    });
  }, []);

  if (!user) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      Username : {user.username} <br /> Email : {user.email}
    </div>
  );
};

export default User;
