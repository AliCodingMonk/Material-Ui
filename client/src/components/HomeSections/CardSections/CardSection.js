import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Cards from "./Cards";

const CardSection = () => {
  return (
    <>
      <Stack
        spacing={4}
        sx={{ padding: "70px 20px 20px 20px", alignItems: "center" }}
        direction="row"
      >
        <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
          What's Your Interest?
        </Typography>

        <Button variant="outlined" color="error">
          Nuts
        </Button>
        <Button variant="outlined" color="error">
          Transport
        </Button>
        <Button variant="outlined" color="error">
          Finance
        </Button>
      </Stack>
      <Stack>
        <Cards />
      </Stack>
    </>
  );
};

export default CardSection;
