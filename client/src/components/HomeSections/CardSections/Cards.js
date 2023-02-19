import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
const StyledBox = styled(Box)(({ theme }) => ({
  color: "red",
  padding: "30px 60px 30px 60px",
  borderRadius: "15px",
  textAlign: "center",
  backgroundColor: "white",
  "& .MuiTypography-root": {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "black",
  },

  "&:hover .MuiTypography-root": {
    color: "white ",
  },
  "&:hover": {
    backgroundColor: "red",
    color: "white ",
  },
}));
const Cards = () => {
  return (
    <Stack direction={"row"} spacing={4} sx={{ marginTop: "20px" }}>
      <StyledBox sx={{ boxShadow: 5 }}>
        <PrecisionManufacturingOutlinedIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h5" component="div">
          Machinery
        </Typography>
      </StyledBox>
      <StyledBox sx={{ boxShadow: 5 }}>
        <LocalShippingOutlinedIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h5" component="div">
          Transport
        </Typography>
      </StyledBox>
      <StyledBox sx={{ boxShadow: 5 }}>
        <CopyrightIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h5" component="div">
          Legal
        </Typography>
      </StyledBox>
      <StyledBox sx={{ boxShadow: 5 }}>
        <MonetizationOnOutlinedIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h5" component="div">
          Finance
        </Typography>
      </StyledBox>
      <StyledBox sx={{ boxShadow: 5 }}>
        <WorkspacePremiumOutlinedIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h5" component="div">
          Certification
        </Typography>
      </StyledBox>
      <StyledBox sx={{ boxShadow: 5 }}>
        <FactoryOutlinedIcon sx={{ fontSize: "80px" }} />
        <Typography variant="h5" component="div">
          Warehouse
        </Typography>
      </StyledBox>
    </Stack>
  );
};

export default Cards;
