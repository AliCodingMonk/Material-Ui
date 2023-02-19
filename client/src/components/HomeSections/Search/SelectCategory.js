import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";

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
  width: "25%",
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
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(String(event.target.value) || "");
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
          <CategoryIcon sx={{ margin: "0px 12px -5px 12px" }} />
          Select Category
        </Typography>

        <KeyboardArrowDownIcon />
      </StyledSelectButton>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select Category Below</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex" }}>
            <FormControl sx={{ m: 1, minWidth: 420 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={handleChange}
                input={<OutlinedInput label="Category" />}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Nuts</MenuItem>
                <MenuItem value={20}>Grapes</MenuItem>
                <MenuItem value={30}>Walnut</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SelectLocation;
