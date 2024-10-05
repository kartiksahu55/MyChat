import { useContext, useState } from "react";
// import { usersData } from "../../constant";
import { WebContext } from "../../pages/WebWindow";
import { Avatar } from "@mui/material";

const ChatMenu = () => {
  const { users, selectedUser, setSelectedUser } = useContext(WebContext);

  let handleSelectUser = (i) => {
    setSelectedUser(i);
  };

  return (
    <ul className="mt-4 h-full overflow-y-scroll">
      {users.map((user) => {
        return (
          <li
            key={user.id}
            className={`w-full h-16 flex justify-between items-center gap-3 px-4 hover:bg-slate-600 cursor-pointer ${
              selectedUser == user && "bg-slate-600"
            }`}
            onClick={() => handleSelectUser(user)}
          >
            {/* avatar image */}
            <Avatar></Avatar>

            {/* name and last chat container */}
            <div className="w-[90%] h-full flex items-center justify-between gap-2 flex-grow border-t-[1px] border-slate-600 ">
              <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                <h4>{user.name}</h4>
                <p className="text-slate-400 text-[16px]">Last chat message</p>
              </div>

              {/* last chat date and notification */}
              <div className="h-full flex justify-center items-end flex-col py-2 text-[14px]">
                <span className="text-slate-200 w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  10:00 AM
                </span>
                <span className="bg-tertiary w-5 h-5 rounded-full text-center text-secondary font-medium">
                  5
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ChatMenu;
