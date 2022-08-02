import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import InDeButton from "../Buttons/InDeButton/InDeButton";
import { Link } from "react-router-dom";

interface Iprops {
  title: string;
  image: string;
  price: string;
}

export default function Cards(props: Iprops) {
  const title = props.title;
  const image = props.image;
  const price = props.price;

  return (
    <>
      <Card sx={{ width: { lg: "30%", md: "27%", sm: "40%", xs: "80%" } }}>
        <Link to="/id">
          <CardActionArea>
            <CardMedia sx={{ objectFit: "contain", p: "0.5rem" }} component="img" height="200" image={image} alt={title} />
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }} dir="rtl" gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Box sx={{ alignSelf: "flex-start", backgroundColor: "#D5C9E0", p: "0.5rem", borderRadius: "20px" }}>
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold", direction: "rtl" }} variant="body2" color="#000">
                  {`${price} تومان`}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ px: "1rem", py: "0.5rem" }}>
            <InDeButton />
          </CardActions>
        </Link>
      </Card>
    </>
  );
}
