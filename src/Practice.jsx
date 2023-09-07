import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Practice() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h3>User:{user.length}</h3>
      {user.map((friend) => (
      <Friend friend={friend}></Friend>
))}

    </div>
  );
}
