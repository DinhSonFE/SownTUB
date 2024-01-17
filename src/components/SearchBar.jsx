import SearchIcon from "../assets/icons/search.svg";
import IconCustom from "./IconCustom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BellIcon from "../assets/icons/bell.svg";
import CamcorderIcon from "../assets/icons/camcorder.svg";

function SearchBar() {
  const [inputValue, setinputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };
  useEffect(() => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  }, [navigate, searchTerm]);
  return (
    <div className="flex items-center justify-between p-2 md:px-6 py-2">
      <form
        action="submit"
        onSubmit={onHandleSubmit}
        className="w-[200px] md:w-[442px] h-10 pl-4 pr-1 py-1p flex justify-between items-center gap-2 bg-search_bg rounded-[40px] border border-white border-opacity-10"
      >
        <input
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder="Search here ..."
          type="text"
          className="w-full outline-none bg-transparent text-white text-sm placeholder:italic placeholder:text-label_color_tertiary placeholder:text-xs "
        />
        <button type="submit">
          <IconCustom icon={SearchIcon}></IconCustom>
        </button>
      </form>
      <div className="flex items-center gap-4">
        <img src={CamcorderIcon} alt="camcorder icon" />
        <img src={BellIcon} alt="bell icon" />
        <img
          className="w-8 h-8 rounded-full border-2 border-purple"
          src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/418505167_1578499636234637_440797441916032932_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEZwQt0PrXEaEjeT4xrCoV6shq4pwutFxSyGrinC60XFCsp07oWuqNqrpsl_ieGnVddqvCN4lJF2vOhgqFIaQyW&_nc_ohc=QNG8ClQwbS8AX9vgiiG&_nc_ht=scontent-hkg1-2.xx&oh=00_AfAKdrqbdCtcGVf_eY8HCqDrYxYs55lRyUSc6ha4oIkQ2Q&oe=65AAE936"
          alt=""
        />
      </div>
    </div>
  );
}

export default SearchBar;
