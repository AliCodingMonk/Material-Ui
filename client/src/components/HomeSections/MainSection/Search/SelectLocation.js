import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";

const StyledSelectButton = styled(Button)(({ theme }) => ({
  color: "#808080",
  padding: "0px 30px 0px 30px",
  textTransform: "none",
  backgroundColor: "white",
  fontFamily: "Poppins",
  fontSize: "15px",
  justifyContent: "space-between",
  width: "35%",
  height: "-webkit-fill-available",
  "&:hover": {
    background: "white",
  },
  "&:active": {
    background: "white",
  },
}));

const SelectLocation = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(String(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <>
      <StyledSelectButton onClick={handleClickOpen}>
        <Typography sx={{ alignItems: "center" }}>
          <SearchSharpIcon sx={{ margin: "0px 12px -5px 12px" }} />
          Select Location
        </Typography>

        <KeyboardArrowDownIcon />
      </StyledSelectButton>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select Location Below</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex" }}>
            <FormControl sx={{ m: 1, minWidth: 420 }}>
              <InputLabel>Location</InputLabel>
              <Select
                value={location}
                onChange={handleChange}
                input={<OutlinedInput label="Location" />}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Pakistan</MenuItem>
                <MenuItem value={20}>India</MenuItem>
                <MenuItem value={30}>USA</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      <Divider orientation="vertical" variant="middle" flexItem />
    </>
  );
};

export default SelectLocation;
