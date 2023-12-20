import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  let data = localStorage.getItem(`user-${id}`);

  if (!data) {
    data = "{}";
  }

  const user = JSON.parse(data);

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetails;
