import { AppBar, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "black",
  borderRadius: "25px",
  border: "1px solid black",
  fontWeight: "bold",
  padding: "0px 30px 0px 30px",
  height: "35px",
  "&:hover": {
    background: "#F2F2F2",
  },
}));

const StyledButton2 = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  border: "1px solid #be0000",
  padding: "0px 30px 0px 30px",
  fontWeight: "bold",
  height: "35px",
  "&:hover": {
    background: "#D80000",
  },
}));

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <Box flexGrow={"1"}>
            <img
              src="https://i.imgur.com/YoH9qaX.png"
              alt="logo"
              width={"200px"}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MenuItem>
              <Typography variant="h6">Pricing</Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="h6">Resources</Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="h6">News</Typography>
            </MenuItem>

            <StyledButton variant="text" sx={{ ml: 2 }}>
              Login
            </StyledButton>

            <StyledButton2 variant="contained" sx={{ ml: 2 }}>
              Signup
            </StyledButton2>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
