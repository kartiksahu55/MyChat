import { Avatar } from "@mui/material";
import { heading3 } from "../../style";
import { WebContext } from "../../pages/WebWindow";
import { useContext, useRef } from "react";
import { SelfMessage, ReceivedMessage } from "../ui/message";

const ChatScreen = () => {
  const { selectedUser } = useContext(WebContext);

  const inputRef = useRef(true);

  const arr = [
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
    { type: "self", message: "Hi my name is Kartik1" },
    { type: "received", message: "whats up!" },
  ];

  return (
    <main className="w-full h-full relative">
      {/* chat heading */}
      <div className="min-h-[60px] w-full  flex items-center bg-primary px-3">
        <div className=" w-full flex items-center gap-3">
          <Avatar src={selectedUser?.avatar} />
          <h3 className={heading3}>{selectedUser?.name}</h3>
        </div>
      </div>

      <div className="h-[calc(100%-120px)] w-full flex flex-col justify-end gap-2">
        <ul className="overflow-y-auto scroll-smooth px-8">
          {arr.map((e, i) => {
            return (
              <li
                key={i}
                className={`${
                  e.type == "self" ? "text-end" : "text-start"
                } h-10 py-6`}
              >
                {e.type == "self" && (
                  <SelfMessage chat_msg={e.message}></SelfMessage>
                )}
                {e.type == "received" && (
                  <ReceivedMessage chat_msg={e.message}></ReceivedMessage>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* chat input */}
      <div className="h-[60px] w-full flex items-center justify-center bg-primary px-3 absolute bottom-0 left-0 ">
        <form
          action=""
          className="h-[75%] w-[80%] bg-slate-600 rounded-lg flex items-center px-8"
        >
          <input
            type="text"
            name=""
            id=""
            ref={inputRef}
            autoFocus={false}
            placeholder="Type a message"
            className="h-full w-[80%] bg-transparent text-[18px] outline-none"
          />
        </form>
      </div>
    </main>
  );
};

export default ChatScreen;
