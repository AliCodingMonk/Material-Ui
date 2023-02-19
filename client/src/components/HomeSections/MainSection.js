import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import back from "../../pictures/back.png";
import CardSection from "./CardSections/CardSection";
import SearchBar from "./Search/SearchBar";

const MainSection = () => {
  return (
    <Box
      class="back"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        height: "90vh",
        padding: "0px 70px 0px 70px",
      }}
    >
      {/* Main Slider */}

      <Box>
        <Typography
          variant="h3"
          component={"h1"}
          sx={{ fontWeight: "600", fontFamily: "Poppins", paddingTop: "100px" }}
        >
          Uniting the industry of nuts,
          <br /> seeds, and dried fruit
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "30px", fontSize: "30px" }}>
          Discover & Connect With Potential buyers Around The World
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box>
        <SearchBar />
      </Box>

      {/* Interest Section */}
      <CardSection />
    </Box>
  );
};

export default MainSection;
