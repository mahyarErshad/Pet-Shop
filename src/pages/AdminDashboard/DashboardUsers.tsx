import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

function DashboardUsers() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/users/all")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {users.length &&
          users.map((user: any) => {
            return (
              <Box key={user.email} sx={{ px: "0.5rem", border: "solid 1px #000", height: "3rem", borderRadius: "8px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row-reverse", gap: "3rem" }}>
                <Typography>{user.email}</Typography>
                <Typography>{user.password}</Typography>
              </Box>
            );
          })}
      </Box>
    </>
  );
}

export default DashboardUsers;
