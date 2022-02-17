import React, { useContext,useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./Context";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Header = () => {
  const { openMenu, openLogin, clearLocalStorage } = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <ul className="header-nv-btns">
        <button className="header-nav-btn">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </button>
        <Button
          id="fade-button"
					className={({ isActive }) => (isActive ? "active-link" : "")}
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <NavLink
            to={"games"}
            className={({ isActive }) => (isActive ? "active-link" : "")}>
            Games
          </NavLink>
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>
					<NavLink
            to={"sprint"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
						Sprint
					</NavLink>
					</MenuItem>
          <MenuItem onClick={handleClose}>
					<NavLink
            to={"audioCall"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
						AudioCall
					</NavLink>
					</MenuItem>
        </Menu>
        <button className="header-nav-btn">
          <NavLink
            to={"about"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </button>
        <button className="header-nav-btn">
          <NavLink
            to={"schoolbook"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Schoolbook
          </NavLink>
        </button>
        <button className="header-nav-btn">
          <NavLink
            to={"statistics"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Statistics
          </NavLink>
        </button>
      </ul>
      <div className="login-menu-btns-container">
        <div className="out-btn">
          <button onClick={clearLocalStorage} className="out-btn">
            Log-out
          </button>
        </div>
        <div className="login-btn">
          <button onClick={openLogin} className="login-btn">
            Login
          </button>
        </div>
        <div className="menu-btn">
          <button onClick={openMenu} className="menu-btn">
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
