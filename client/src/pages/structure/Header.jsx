import { Link, useLocation } from "react-router-dom";
import { app_logo } from "../../assets";

import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const nav = [
  { name: "Home", path: "/", active: "true" },
  { name: "Login", path: "/login" },
  { name: "Web", path: "/web" },
];

const Header = () => {
  const history = useLocation();

  return (
    <header
      className={`w-full h-12 bg-primary flex items-center justify-between px-[10%] ${
        history.pathname == "/web" && "hidden"
      }`}
    >
      <div>
        <img src={app_logo} alt="Logo" className="w-10 h-10" />
      </div>
      <nav className="h-full flex justify-center">
        <ToggleButtonGroup
          value={history.pathname}
          exclusive
          aria-label="Platform"
          className="hover:bg-slate-400"
        >
          {nav.map((e, i) => {
            return (
              <ToggleButton
                key={i}
                value={e.path}
                color="white"
                sx={{ background: "white" }}
              >
                <Link to={e.path}>{e.name}</Link>
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </nav>
    </header>
  );
};

export default Header;
