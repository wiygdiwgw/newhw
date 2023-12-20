import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [id]);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <h3>{user.phone}</h3>
        </>
      ) : null}
    </div>
  );
};

export default UserDetails;
