import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../../components/Utils/Cards/Cards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loading from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import usePagination from "../../../functions/Pagination";
import { goToTop } from "../../../functions/functions";
import { useDispatch, useSelector } from "react-redux";
import { resetProducts, setProducts } from "../../../redux/slice/productsReducer";
import ProductsHeader from "../ProductsHeader/ProductsHeader";

interface IProps {
  url: string;
}

function Products(props: IProps) {
  document.title = "محصولات | پت شاپ فینیکس";
  const { url } = props;
  const { params } = useParams();
  const { products, filteredProducts, filteredNotFound, isFiltered, searchTerm, brandFilterValue, countryFilterValue, priceFilterValue } = useSelector((state: any) => state.products);
  const productsToShow = isFiltered ? filteredProducts : products;
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const PER_PAGE = 6;
  const count = Math.ceil(productsToShow.length / PER_PAGE);
  const _DATA = usePagination(productsToShow, PER_PAGE);
  const dispatch = useDispatch();
  const handleChange = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
    goToTop();
  };
  useEffect(() => {
    setLoading(true);
    dispatch(resetProducts());
    fetch(`${url}/${params}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products.length) {
          dispatch(setProducts(data.products));
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
  useEffect(
    () => {
      _DATA.reset();
      setPage(1);
    }, // eslint-disable-next-line
    [searchTerm, brandFilterValue, countryFilterValue, priceFilterValue]
  );

  if (loading) return <Loading />;
  if (notFound) return <NotFound />;
  return (
    <>
      <Box>
        <ProductsHeader />
        <Box sx={{ mb: "1rem", width: "100%", px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          {filteredNotFound ? (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
              <Typography dir="rtl" sx={{ fontSize: "1.5rem", color: "#D2302F", my: "3rem", backgroundColor: "#F9F927", p: "1.5rem", borderRadius: "10px" }} variant="h5">
                محصولی با این مشخصات یافت نشد
              </Typography>
            </Box>
          ) : (
            _DATA.currentData().map((product: { id: number; title: string; image: string; price: number; amount: number }) => {
              return <Cards amount={product.amount} id={product.id} key={product.id} title={product.title} image={product.image} price={product.price} />;
            })
          )}
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mb: "1rem" }}>
          {!filteredNotFound && (
            <Stack spacing={2}>
              <Pagination size="large" color="secondary" page={page} count={count} onChange={handleChange} />
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Products;
