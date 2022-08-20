import { Box, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../../components/Utils/Cards/Cards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loading from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import usePagination from "../../../functions/Pagination";
import { goToTop } from "../../../functions/functions";
import ProductsSelect from "../../../components/Utils/SelectButton/ProductsSelect/ProductsSelect";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/slice/productsReducer";

interface IProps {
  url: string;
}

function Products(props: IProps) {
  document.title = "محصولات | پت شاپ فینیکس";
  const { url } = props;
  const { params } = useParams();
  const { products } = useSelector((state: any) => state.products);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const PER_PAGE = 6;
  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);
  const dispatch = useDispatch();
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

  if (loading) return <Loading />;
  if (notFound) return <NotFound />;
  return (
    <>
      <Box>
        {/* operation section */}
        <Box sx={{ px: "1rem", mt: "1rem", mb: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center", gap: { lg: "13rem", md: "5rem", sm: "1rem", xs: "0.5rem" }, flexWrap: "wrap", flexDirection: { xs: "column-reverse", md: "row" } }}>
          <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
            <ProductsSelect label="برند" categories={["رویال کنین", "جوسرا", "رفلکس"]} />
            <ProductsSelect label="قیمت" categories={["کمترین", "بیشترین"]} />
            <ProductsSelect label="کشور سازنده" categories={["آلمان", "فرانسه", "ترکیه", "ایران"]} />
          </Box>
          <Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}>
            <Box component="form">
              <Input dir="rtl" color="secondary" sx={{ width: "14.4025rem" }} placeholder="جستجو کنید" />
            </Box>
          </Box>
        </Box>
        {/* cards */}
        <Box sx={{ mb: "1rem", width: "100%", px: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          {_DATA.currentData().map((product: { id: number; title: string; image: string; price: number; amount: number }) => {
            return <Cards amount={product.amount} id={product.id} key={product.id} title={product.title} image={product.image} price={product.price} />;
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
