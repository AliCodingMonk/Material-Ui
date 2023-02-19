import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ListingSection = () => {
  return (
    <Box sx={{ paddingTop: "100px" }}>
      <Typography variant="h4" sx={{ textAlign: "Center", fontWeight: "bold" }}>
        Latest Listings
      </Typography>
    </Box>
  );
};

export default ListingSection;
