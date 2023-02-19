import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Listings from "./Listings";

const ListingSection = () => {
  return (
    <Box sx={{ padding: "220px 80px 0px 80px" }}>
      <Typography variant="h4" sx={{ textAlign: "Center", fontWeight: "bold" }}>
        Latest Listings
      </Typography>
      <Listings />
    </Box>
  );
};

export default ListingSection;
