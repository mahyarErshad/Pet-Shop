import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { separateNumber } from "../../../../functions/functions";

interface props {
  weight: number;
  country: string;
  breed: string;
  brand: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props: props) {
  const { weight, country, breed, brand } = props;
  const persianWeight = `${separateNumber(weight)} گرم`;
  function createData(title: string, answer: string) {
    return { title, answer };
  }

  const rows = [createData("وزن", persianWeight), createData("کشور سازنده", country), createData("گونه", breed), createData("برند", brand)];
  return (
    <TableContainer sx={{ width: "20rem", mt: "2rem" }} component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align="right" component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.answer}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
