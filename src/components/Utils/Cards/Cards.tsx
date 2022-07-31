import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function Cards() {
  return (
    <Card sx={{ width: { lg: "30%", md: "27%", sm: "40%", xs: "80%" } }}>
      <CardActionArea>
        <CardMedia sx={{ objectFit: "contain", p: "0.5rem" }} component="img" height="200" image="https://eurovet.cdn.shoprenter.hu/custom/eurovet/image/cache/w2277h1500wt1/product/%C3%A1llateledel%20k%C3%A9pei/Royal/xydkeqcnmzk80dqsjeli.png?lastmod=1657093064.1490595398" alt="green iguana" />
        <CardContent>
          <Typography dir="rtl" gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography sx={{ fontSize: "0.875rem" }} dir="rtl" variant="body2" color="#000">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
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
