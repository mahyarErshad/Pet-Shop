import React, { useEffect, useState } from "react";

function DashboardUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>hi</div>
    </div>
  );
}

export default DashboardUsers;
