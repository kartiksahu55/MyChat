import { NavWindow, ListWindow, DisplayWindow } from "../components/webWindow";

const WebWindow = () => {
  return (
    <div className="bg-secondary w-[100vw] h-[100vh] flex items-center justify-center ">
      <div className=" lg:w-[95vw] lg:h-[95vh] w-full h-full flex lg:rounded-xl overflow-hidden">
        <NavWindow></NavWindow>
        <ListWindow></ListWindow>
        <DisplayWindow></DisplayWindow>
      </div>
    </div>
  );
};

export default WebWindow;
