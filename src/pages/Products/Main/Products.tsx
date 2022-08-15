import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../../components/Utils/Cards/Cards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { IProduct } from "../../../Types/types";
import Loading from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import ProductsHeader from "../ProductsHeader/ProductsHeader";
import usePagination from "../../../functions/Pagination";
import { goToTop } from "../../../functions/functions";

interface IProps {
  url: string;
}

function Products(props: IProps) {
  document.title = "محصولات | پت شاپ فینیکس";
  const { url } = props;
  const { params } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const PER_PAGE = 6;
  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);
  console.log(_DATA);
  const handleChange = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
    goToTop();
  };
  useEffect(() => {
    setLoading(true);
    fetch(`${url}/${params}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products.length) {
          setProducts(data.products);
          _DATA.reset();
          setPage(1);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      })
      .then(() => setLoading(false))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [url, params]);

  if (loading) return <Loading />;
  if (notFound) return <NotFound />;
  return (
    <>
      <Box>
        <ProductsHeader />
        <Box sx={{ mb: "1rem", width: "100%", px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          {_DATA.currentData().map((product: { id: number; title: string; image: string; price: number }) => {
            return <Cards id={product.id} key={product.id} title={product.title} image={product.image} price={product.price} />;
          })}
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mb: "1rem" }}>
          <Stack spacing={2}>
            <Pagination size="large" color="secondary" page={page} count={count} onChange={handleChange} />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Products;
