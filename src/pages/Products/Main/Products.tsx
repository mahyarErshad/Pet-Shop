import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../../components/Utils/Cards/Cards";
import PaginationComponent from "../../../components/Utils/PaginationComponent/PaginationComponent";
import { IProduct } from "../../../Types/types";
import Loading from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import ProductsHeader from "../ProductsHeader/ProductsHeader";

function Products() {
  document.title = "محصولات | پت شاپ فینیکس";
  const { breed } = useParams<string>();
  const { category } = useParams<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (breed) {
      setLoading(true);
      fetch(`/api/products/${breed}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.products.length) {
            setProducts(data.products);
            setNotFound(false);
          }
        })
        .then(() => setLoading(false))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
    if (category) {
      setLoading(true);
      fetch(`/api/products/${category}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.products.length) {
            setProducts(data.products);
            setNotFound(false);
          }
        })
        .then(() => setLoading(false))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
    // eslint-disable-next-line
  }, [breed, category]);

  if (loading) return <Loading />;
  if (notFound) return <NotFound />;
  return (
    <>
      <Box>
        <ProductsHeader />
        <Box sx={{ mb: "1rem", width: "100%", px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>{products && products.map((product: any) => <Cards id={product.id} key={product.id} title={product.title} image={product.image} price={product.price} />)}</Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mb: "1rem" }}>
          <PaginationComponent page={10} />
        </Box>
      </Box>
    </>
  );
}

export default Products;
