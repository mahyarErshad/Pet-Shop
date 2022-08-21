import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../../../redux/slice/productsReducer";

interface Iprops {
  categories: any[];
  value?: string;
  label: string;
}

export default function SelectVariants(props: Iprops) {
  const [state, setState] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  const { label, categories } = props;
  const { products } = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let tempProducts = [...products];
    if (state) {
      if (label === "برند") {
        tempProducts = tempProducts.filter((product: any) => product.brand === state);
      } else if (label === "قیمت") {
        tempProducts = tempProducts.filter((product: any) => product.price === state);
      } else if (label === "کشور سازنده") {
        tempProducts = tempProducts.filter((product: any) => product.country === state);
      }
    } else {
      tempProducts = [...products];
    }
    console.log(tempProducts);
    // eslint-disable-next-line
  }, [state]);
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: { sm: 120, xs: 105 } }}>
        <InputLabel dir="rtl" sx={{ fontSize: "0.875rem", fontWeight: "normal" }} color="secondary" id="demo-simple-select-standard-label">
          {label}
        </InputLabel>
        <Select dir="rtl" sx={{ fontSize: "0.875rem", fontWeight: "normal" }} autoWidth labelId="demo-simple-select-standard-label" id={label} value={state} onChange={handleChange} label={label}>
          <MenuItem dir="rtl" sx={{ fontSize: "0.75rem" }} value="">
            <em>انتخاب کنید</em>
          </MenuItem>
          {categories.map((category: any, index: number) => {
            return (
              <MenuItem sx={{ fontSize: "0.75rem" }} dir="rtl" key={index} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
