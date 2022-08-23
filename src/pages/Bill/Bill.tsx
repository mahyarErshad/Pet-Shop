import { Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BillItems from "../../components/Utils/BillItems/BillItems";
import { persian } from "../../functions/functions";

function Bill() {
  const theme = useTheme();
  const { id } = useParams();
  const { history } = useSelector((state: any) => state.cart);
  const [notFound, setNotFound] = useState<boolean>(true);
  const cartHistory = history.find((product: any) => product.cartID.toString() === id);
  console.log(cartHistory);
  useEffect(() => {
    if (cartHistory) {
      setNotFound(false);
    } else {
      setNotFound(true);
    }
    // eslint-disable-next-line
  }, [id]);
  if (notFound) {
    return <div>notFound</div>;
  } else {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", my: "1rem" }}>
          <Box>
            <Typography dir="rtl" variant="h5" sx={{ my: "1rem", textAlign: "center", fontWeight: "normal", fontSize: "1.5rem", color: theme.palette.secondary.main }}>{`سفارش شماره: ${persian(id!)}`}</Typography>
          </Box>
          {cartHistory.items.map((item: any) => {
            return <BillItems id={item.id} key={item.id} image={item.image} title={item.title} price={item.price} amount={item.amount} />;
          })}
        </Box>
      </>
    );
  }
}

export default Bill;
