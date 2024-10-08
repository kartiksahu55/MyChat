import { useEffect, useState, useContext } from "react";
import { WebContext } from "../../pages/WebWindow";
import { app_data } from "../../constant";
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
  const { webValue, setWebValue } = useContext(WebContext);

  const [view, setView] = useState();

  console.log("view:", view);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  useEffect(() => {
    view
      ? setWebValue({ ...webValue, nav: view })
      : setWebValue({ ...webValue, nav: app_data.appName });
  }, [view]);

  return (
    <div className="h-full w-[75px] bg-primary text-center py-outer flex flex-col justify-between px-2">
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
            <Avatar src=""/>
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </div>
  );
};

export default NavWindow;
