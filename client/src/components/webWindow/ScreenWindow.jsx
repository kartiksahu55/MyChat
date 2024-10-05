import { useEffect, useContext } from "react";

import { WebContext } from "../../pages/WebWindow";
import { ChatScreen, StatusScreen, WelcomeScreen } from "../webScreen";

const ScreenWindow = () => {
  const { webValue } = useContext(WebContext);
  const nav = webValue.nav;

  return (
    <div className="h-full w-0 md:w-[65%] lg:[75%] bg-secondary border-2 border-primary rounded-r-xl">
      {nav == "chats" ? (
        <ChatScreen />
      ) : nav == "status" ? (
        <StatusScreen />
      ) : (
        <WelcomeScreen />
      )}
    </div>
  );
};

export default ScreenWindow;
