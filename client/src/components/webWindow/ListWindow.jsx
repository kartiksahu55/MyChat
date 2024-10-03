import { Search, Menubar } from "../ui";

const ListWindow = () => {
  return (
    <div className="h-full w-main_section bg-secondary pt-outer">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[24px]">Chats</h2>
          <Menubar></Menubar>
        </div>
        <Search></Search>
      </div>
    </div>
  );
};

export default ListWindow;
