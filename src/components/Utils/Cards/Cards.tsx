import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../Style/global/style.css";
import { goToTop, separateNumber } from "../../../functions/functions";
import MyButton from "../Buttons/MyButton/MyButton";

interface Iprops {
  title: string;
  image: string;
  price: number;
  id: number;
}

export default function Cards(props: Iprops) {
  const { title, image, price, id } = props;

  return (
    <>
      <Card sx={{ width: { lg: "30%", md: "27%", sm: "40%", xs: "80%" } }}>
        <CardActionArea>
          <Link onClick={() => goToTop()} className="noDecoration" to={`/product/${id}`}>
            <CardMedia sx={{ objectFit: "contain", p: "0.5rem" }} component="img" height="200" image={image} alt={title} />
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#000" }} dir="rtl" gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Box sx={{ alignSelf: "flex-start", backgroundColor: "#D5C9E0", p: "0.5rem", borderRadius: "20px" }}>
                <Typography dir="rtl" sx={{ fontSize: "1rem", fontWeight: "bold" }} variant="body2" color="#000">
                  {separateNumber(price)} تومان
                </Typography>
              </Box>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions sx={{ px: "1rem", py: "0.5rem" }}>
          <Box>
            <MyButton text="افزودن" />
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
