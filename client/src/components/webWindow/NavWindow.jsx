import { useState } from "react";

import {
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsIcon from "@mui/icons-material/Settings";

const NavWindow = () => {
  const [view, setView] = useState("chat");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <div className="h-full w-preferece bg-primary text-center py-outer flex flex-col justify-between px-2">
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <Tooltip title="Chats" placement="right" disableInteractive>
          <ToggleButton
            value="chats"
            aria-label="chats"
            color="white"
            size="large"
          >
            <ChatIcon color="white" />
          </ToggleButton>
        </Tooltip>

        <Tooltip title="Status" placement="right" disableInteractive>
          <ToggleButton
            value="status"
            aria-label="status"
            color="white"
            size="large"
          >
            <UpcomingIcon color="white" />
          </ToggleButton>
        </Tooltip>

        <Tooltip title="Communities" placement="right" disableInteractive>
          <ToggleButton
            value="communities"
            aria-label="communities"
            color="white"
            size="large"
          >
            <Diversity3Icon color="white" />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <Tooltip title="Setting" placement="right" disableInteractive>
          <ToggleButton
            value="setting"
            aria-label="setting"
            color="white"
            size="large"
          >
            <SettingsIcon color="white" />
          </ToggleButton>
        </Tooltip>

        <Tooltip title="Profile" placement="right" disableInteractive>
          <ToggleButton value="profile" aria-label="profile" color="white">
            <Avatar />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </div>
  );
};

export default NavWindow;
