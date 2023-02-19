import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function RecipeReviewCard() {
  return (
    <Box sx={{ display: "flex", paddingTop: "50px" }} gap={4}>
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          component="img"
          height="194"
          image="https://i.imgur.com/rsjb5hh.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            fontFamily={"Poppins"}
            fontWeight={"bold"}
          >
            Argicultural Tractor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>

          <Typography mt={"12px"}>
            <LocationOnOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            The Square Plaza, NJ USA.
          </Typography>
          <Typography mt={"12px"}>
            <LocalPhoneOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            012548963
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="add to favorites" color="primary">
            <FavoriteIcon color="primary" />
          </IconButton>
          <IconButton aria-label="share" color="primary">
            <Button>
              <LocalPhoneOutlinedIcon sx={{ marginRight: "10px " }} /> Send
              Inquiry
            </Button>
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          component="img"
          height="194"
          image="https://i.imgur.com/FYehgLc.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            fontFamily={"Poppins"}
            fontWeight={"bold"}
          >
            Argicultural Tractor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>

          <Typography mt={"12px"}>
            <LocationOnOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            The Square Plaza, NJ USA.
          </Typography>
          <Typography mt={"12px"}>
            <LocalPhoneOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            012548963
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="add to favorites" color="primary">
            <FavoriteIcon color="primary" />
          </IconButton>
          <IconButton aria-label="share" color="primary">
            <Button>
              <LocalPhoneOutlinedIcon sx={{ marginRight: "10px " }} /> Send
              Inquiry
            </Button>
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          component="img"
          height="194"
          image="https://i.imgur.com/yPI9mzk.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            fontFamily={"Poppins"}
            fontWeight={"bold"}
          >
            Argicultural Tractor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>

          <Typography mt={"12px"}>
            <LocationOnOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            The Square Plaza, NJ USA.
          </Typography>
          <Typography mt={"12px"}>
            <LocalPhoneOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            012548963
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="add to favorites" color="primary">
            <FavoriteIcon color="primary" />
          </IconButton>
          <IconButton aria-label="share" color="primary">
            <Button>
              <LocalPhoneOutlinedIcon sx={{ marginRight: "10px " }} /> Send
              Inquiry
            </Button>
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          component="img"
          height="194"
          image="https://i.imgur.com/bgx7GvJ.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            fontFamily={"Poppins"}
            fontWeight={"bold"}
          >
            Argicultural Tractor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>

          <Typography mt={"12px"}>
            <LocationOnOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            The Square Plaza, NJ USA.
          </Typography>
          <Typography mt={"12px"}>
            <LocalPhoneOutlinedIcon
              color="primary"
              sx={{ margin: "10px 15px -5px 0px" }}
            />
            012548963
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="add to favorites" color="primary">
            <FavoriteIcon color="primary" />
          </IconButton>
          <IconButton aria-label="share" color="primary">
            <Button>
              <LocalPhoneOutlinedIcon sx={{ marginRight: "10px " }} /> Send
              Inquiry
            </Button>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
