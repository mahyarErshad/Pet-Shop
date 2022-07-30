import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Iprops {
  categories: any[];
  value?: string;
  label: string;
}

export default function SelectVariants(props: Iprops) {
  const [state, setState] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  const label = props.label;
  const categories = props.categories;
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel dir="rtl" sx={{ fontSize: "0.875rem", fontWeight: "normal" }} color="secondary" id="demo-simple-select-standard-label">
          {label}
        </InputLabel>
        <Select dir="rtl" sx={{ fontSize: "0.875rem", fontWeight: "normal" }} autoWidth labelId="demo-simple-select-standard-label" id={label} value={state} onChange={handleChange} label={label}>
          <MenuItem dir="rtl" sx={{ fontSize: "0.75rem" }} value="">
            <em>انتخاب کنید</em>
          </MenuItem>
          {categories.map((category: any, index: number) => {
            return (
              <MenuItem sx={{ fontSize: "0.75rem" }} dir="rtl" key={index} value={index}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
