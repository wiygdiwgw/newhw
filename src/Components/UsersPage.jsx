import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios.get(API).then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Users Page</h1>
      {users.map((elem) => (
        <Link to={`/users/${elem.id}`} key={elem.id}>
          <li>{elem.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
