import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomizedTables from "../../components/Utils/SingleProducts/CustomizedTables/CustomizedTables";
import SingleProductImage from "../../components/Utils/SingleProducts/SingleProductImage/SingleProductImage";
import SingleProductsDescription from "../../components/Utils/SingleProducts/SingleProductsDescription/SingleProductsDescription";
import SingleProductsDetails from "../../components/Utils/SingleProducts/SingleProductsDetails/SingleProductsDetails";
import { IProduct } from "../../Types/types";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
function SingleProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(true);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/api/products/single/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setProduct(data.product);
            setNotFound(false);
          }
        })
        .then(() => setLoading(false))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Loading />;
  if (notFound) return <NotFound />;
  return (
    <>
      <Box sx={{ width: "100%", mb: "1rem", display: "flex", flexDirection: "column", px: { xs: "0.5rem", md: "1rem", alignItems: "center", justifyContent: "center", gap: "0.5rem" } }}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row-reverse", alignItems: { xs: "center", md: "flex-start" }, justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap", borderBottom: "2px solid #ECEFF1", pb: "0.15rem" }}>
          <SingleProductImage image={product!.image} />
          <Box dir="rtl" sx={{ width: { xs: "90%", md: "48%" }, minHeight: "15.625rem", p: "1rem", display: "flex", justifyContent: "flex-start", alignItems: { xs: "center", md: "flex-start" }, flexDirection: "column", gap: "1rem" }}>
            <SingleProductsDetails title={product!.title} price={product!.price} balance={product!.quantity} fontSize="3rem" />
            <CustomizedTables weight={product!.weight} country={product!.country} brand={product!.brand} breed={product!.breed} />
          </Box>
        </Box>
        <SingleProductsDescription description={product!.description} />
      </Box>
    </>
  );
}

export default SingleProduct;
