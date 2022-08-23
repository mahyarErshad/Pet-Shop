import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Bill() {
  const { id } = useParams();
  const { history } = useSelector((state: any) => state.cart);
  useEffect(() => {
    console.log(history);
    const cartHistory = history.filter((product: any) => product.cartID.toString() === id);
    console.log(cartHistory);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div>
      <div>hi</div>
    </div>
  );
}

export default Bill;
