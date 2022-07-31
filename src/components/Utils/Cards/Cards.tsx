import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

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
    <Card sx={{ width: { lg: "30%", md: "27%", sm: "40%", xs: "80%" } }}>
      <CardActionArea>
        <CardMedia sx={{ objectFit: "contain", p: "0.5rem" }} component="img" height="200" image={image} alt={title} />
        <CardContent>
          <Typography dir="rtl" gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: "0.875rem" }} dir="ltr" variant="body2" color="#000">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup disableElevation variant="contained" color="secondary">
          <Button>+</Button>
          <Box sx={{ width: "2.5612rem", height: "2.2813rem", backgroundColor: "#ECEFF1", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #000" }}>
            <Typography variant="h5" color="#000">
              ۰
            </Typography>
          </Box>
          <Button>-</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
