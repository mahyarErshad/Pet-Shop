import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface IProps {
  page: number;
}

export default function Pagination(props: IProps) {
  return (
    <>
      <Stack spacing={2}>
        <Pagination size="large" count={10} color="secondary" />
      </Stack>
    </>
  );
}
