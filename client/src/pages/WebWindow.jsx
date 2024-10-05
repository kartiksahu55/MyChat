import { useState, createContext } from "react";
import { NavWindow, MenuWindow, ScreenWindow } from "../components/webWindow";
import { app_data, usersData } from "../constant";

export const WebContext = createContext();

const WebWindow = () => {
  const [webValue, setWebValue] = useState({ nav: app_data.appName });
  const [users, setUsers] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState();

  return (
    <WebContext.Provider
      value={{
        webValue,
        setWebValue,
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
      }}
    >
      <div className="bg-secondary w-[100vw] h-[100vh] flex items-center justify-center ">
        <div className=" lg:w-[95vw] lg:h-[95vh] w-full h-full flex lg:rounded-xl overflow-hidden">
          <NavWindow></NavWindow>
          <MenuWindow></MenuWindow>
          <ScreenWindow></ScreenWindow>
        </div>
      </div>
    </WebContext.Provider>
  );
};

export default WebWindow;
