import { useContext } from "react";

import { WebContext } from "../../pages/WebWindow";
import { Search, Menubar } from "../ui";
import { app_data } from "../../constant";
import {
  ChatMenu,
  CommunitiesMenu,
  SettingMenu,
  StatusMenu,
  ProfileMenu,
} from "../webMenu";

const MenuWindow = () => {
  const { webValue, setWebValue } = useContext(WebContext);

  const nav = webValue.nav;

  console.log(webValue);
  console.log(nav);

  const formatHeading = nav[0].toUpperCase() + nav.split("").slice(1).join("");

  return (
    <div className="h-full w-full md:w-[40%] lg:w-[30%] bg-secondary pt-outer border-y-2 border-primary">
      <div className="px-4 ">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[22px]">{formatHeading}</h2>
          <Menubar></Menubar>
        </div>
        <Search></Search>
      </div>

      <div className="h-[82%]">
        {nav == "chats" ? (
          <ChatMenu />
        ) : nav == "status" ? (
          <StatusMenu />
        ) : nav == "communities" ? (
          <CommunitiesMenu />
        ) : nav == "setting" ? (
          <SettingMenu />
        ) : nav == "profile" ? (
          <ProfileMenu />
        ) : (
          <>Welcome</>
        )}
      </div>
    </div>
  );
};

export default MenuWindow;
