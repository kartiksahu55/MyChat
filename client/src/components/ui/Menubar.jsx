import { IconButton, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#202C33",
    color: "#fefefe",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadious: "1px",
  },
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Menubar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={anchorEl ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl)}
        onClick={handleClick}
        color="white"
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>Profile</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>My account</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <Link to="/login">Log Out</Link>
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};

export default Menubar;
