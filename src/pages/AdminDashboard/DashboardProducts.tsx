import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { goToTop, separateNumber } from "../../functions/functions";
import usePagination from "../../functions/Pagination";

function DashboardProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const PER_PAGE = 6;
  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);
  useEffect(() => {
    fetch("/api/products/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        _DATA.reset();
        setPage(1);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);
  const handleChange = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
    goToTop();
  };
  const [sort, setSort] = useState<string>("old");
  console.log(sort);

  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="sortSelect">دسته بندی</InputLabel>
        <Select labelId="sortSelect" id="demo-simple-select" value={sort} label="دسته بندی" onChange={handleSort}>
          <MenuItem value={"new"}>جدیدترین</MenuItem>
          <MenuItem value={"old"}>قدیمی ترین</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", height: "85vh" }}>
        {products.length &&
          _DATA.currentData().map((product: any) => {
            return (
              <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" }, display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", borderRadius: "16px", border: "1px solid #ECEFF1", p: "0.5rem", alignSelf: "center" }}>
                <Box sx={{ width: { xs: "50%", sm: "40%", md: "50%" }, display: "flex", flexDirection: "row-reverse", gap: "0.2rem", justifyContent: "flex-start", alignItems: "center" }}>
                  <Box component="img" src={product.image} alt="تصویر محصول" sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
                  <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", color: "#000", fontWeight: "normal", textOverflow: "ellipsis", overflow: "hidden" }}>
                    {product.title}
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "40%", sm: "45%", md: "40%" }, display: "flex", flexDirection: { xs: "column-reverse", sm: "row-reverse" }, gap: "1rem", justifyContent: { xs: "center", sm: "flex-start" }, alignItems: "center" }}>
                  <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", width: "45%" }}>
                    {separateNumber(product.price)} تومان
                  </Typography>
                  <Typography dir="rtl" variant="h5" sx={{ fontSize: "1rem", fontWeight: "normal", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", width: "45%" }}>
                    {separateNumber(product.balance)} عدد
                  </Typography>
                </Box>
              </Box>
            );
          })}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mb: "1rem" }}>
          <Stack spacing={2}>
            <Pagination size="large" color="secondary" page={page} count={count} onChange={handleChange} />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default DashboardProducts;
