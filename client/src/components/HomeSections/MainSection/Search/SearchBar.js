import styled from "@emotion/styled";
import { Button, Divider, InputBase, Typography } from "@mui/material";
import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Stack from "@mui/material/Stack";
import SelectLocation from "../Search/SelectLocation";
import SelectCategory from "../Search/SelectCategory";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "20px",
    width: "100%",
    boxShadow: 3,
  },
}));

const StyledButton2 = styled(Button)(({ theme }) => ({
  color: "white",
  borderRadius: "100px",
  border: "1px solid #FC4C4E",
  padding: "0px 30px 0px 30px",
  fontWeight: "bold",
  backgroundColor: "#FC4C4E",
  width: "200px",
  height: "-webkit-fill-available",
  "&:hover": {
    background: "#D80000",
  },
}));

const SearchBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        width: "90%",
        justifyContent: "space-between",
        height: "60px",
        display: "flex",
        borderRadius: "100px",
        alignItems: "flex-start",
        marginTop: "40px",
        boxShadow: 12,
        backgroundColor: "white",
      }}
    >
      <Typography flexGrow={"1"}>
        <StyledInputBase
          placeholder="What Are You Looking for"
          inputProps={{ "aria-label": "search" }}
        />
      </Typography>
      <Divider orientation="vertical" variant="middle" flexItem />
      {/* Select Location  */}
      <SelectLocation />
      {/* Select Category */}
      <SelectCategory />
      {/* Search Button */}
      <StyledButton2
        endIcon={<SearchSharpIcon sx={{ fontSize: "30px" }} />}
        variant="contained"
      >
        Search
      </StyledButton2>
    </Stack>
  );
};

export default SearchBar;
