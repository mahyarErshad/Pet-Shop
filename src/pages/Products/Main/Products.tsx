import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../../components/Utils/Cards/Cards";
import PaginationComponent from "../../../components/Utils/PaginationComponent/PaginationComponent";
import Loading from "../../Loading/Loading";
import ProductsHeader from "../ProductsHeader/ProductsHeader";

function Products() {
  document.title = "محصولات | پت شاپ فینیکس";
  const { breed } = useParams<{ breed: string }>();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    if (breed)
      fetch("/api/products/" + breed)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          console.log(products);
          setLoading(false);
        });
    else
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          console.log(products);
          setLoading(false);
        });
  }, [breed]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Box>
          <ProductsHeader />
          <Box sx={{ mb: "1rem", width: "100%", px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>{products && products.map((product: any) => <Cards key={product.id} title={product.title} image={product.image} price={product.price} />)}</Box>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mb: "1rem" }}>
            <PaginationComponent page={10} />
          </Box>
        </Box>
      </>
    );
  }
}

export default Products;
