import { welcome_monkey } from "../../assets";
import { ChatScreen } from "../webScreen";

const WelcomeScreen = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* <div className="w-[50%] lg:w-[30%] ">
        <img src={welcome_monkey} alt="Welcome Monkey" />
      </div> */}
      <ChatScreen></ChatScreen>
    </div>
  );
};

export default WelcomeScreen;
