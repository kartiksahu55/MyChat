import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full">
      <form
        action=""
        className={`bg-primary rounded-lg h-9 flex items-center px-2 mt-4 ${
          focused && "border border-tertiary"
        }`}
      >
        <SearchIcon color={`${focused && "tertiary"}`} />
        <input
          type="search"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full h-full pl-2 bg-transparent outline-none text-slate-300"
        />
      </form>
    </div>
  );
};

export default Searchbar;
