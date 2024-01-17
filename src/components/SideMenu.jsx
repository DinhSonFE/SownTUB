import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../assets/icons/menu.svg";
import Logo from "../assets/images/logo.png";
import { categories_1, categories_2, categories_3 } from "../utils/constants";
function SideMenu({ show, setShow }) {
  const location = useLocation().pathname.slice(1);
  const handleClickItem = (e) => {
    e.stopImmediatePropagation();
  };
  const handleShowMenu = () => {
    setShow(!show);
  };
  return (
    <div
      className={`hidden md:flex row-start-1 row-end-4 bg-side_menu_bg w-auto flex-col gap-6 transition-all text-white h-screen border-r border-white border-opacity-5 ${
        show ? "" : "w-[60px] transition-all"
      }`}
    >
      <div
        className={` px-4 flex  items-center justify-between ${
          show ? "flex-row h-[56px]" : "flex-col h-auto py-4 gap-4"
        }`}
      >
        <Link to="/">
          <img
            className={`object-cover ${show ? "h-[56px]" : "w-full"}`}
            src={Logo}
            alt=""
          />
        </Link>
        <button onClick={handleShowMenu}>
          <img src={MenuIcon} alt="" />
        </button>
      </div>

      <ul className="flex flex-col">
        {categories_1.map((item) => {
          const ICON = item.icon;
          return (
            <li
              onClick={(e) => handleClickItem(e, item.name)}
              className={`${
                show ? "px-5 " : "px-0 justify-center"
              } h-14 gap-x-5 flex items-center relative py-3 cursor-pointer before:absolute before:w-full before:h-[1px] before:bg-line_bg before:top-0 before:left-0 ${
                location === item.name.toLowerCase()
                  ? "after:w-full after:h-full after:bg-active_item after:absolute"
                  : ""
              }`}
              key={item.name}
            >
              {location === item.name.toLowerCase() ? (
                <div className="pointer-events-auto w-8 cursor-pointer h-8 flex items-center justify-center flex-shrink-0 bg-icon_bg rounded-full relative after:absolute after:w-[30px] after:h-[30px] after:bg-bgColor after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 group ">
                  <ICON></ICON>
                </div>
              ) : (
                <ICON></ICON>
              )}
              {show && (
                <span
                  className={`text-base ${
                    location === item.name.toLowerCase()
                      ? "text-white"
                      : "text-label_color_tertiary"
                  } pointer-events-none`}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
        <div className="w-full h-[1px] bg-line_bg"></div>
      </ul>
      <ul className="flex flex-col">
        <span className="h-[56px] flex items-center text-label_color_tertiary text-sm pl-4 font-semibold">
          {show && "MY CHANNEL"}
        </span>
        {categories_2.map((item) => {
          const ICON = item.icon;
          return (
            <li
              className={`${
                show ? "pl-5 " : "px-0 justify-center"
              } h-14 gap-x-5 flex items-center relative  py-3 cursor-pointer before:absolute before:w-full before:h-[1px] before:bg-line_bg before:top-0 before:left-0 ${
                location === item.name.toLowerCase()
                  ? "after:w-full after:h-full after:bg-active_item after:absolute"
                  : ""
              }`}
              key={item.name}
            >
              {location === item.name.toLowerCase() ? (
                <div className="pointer-events-auto w-8 cursor-pointer h-8 flex items-center justify-center flex-shrink-0 bg-icon_bg rounded-full relative after:absolute after:w-[30px] after:h-[30px] after:bg-bgColor after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 group ">
                  <ICON></ICON>
                </div>
              ) : (
                <ICON></ICON>
              )}
              {show && (
                <span
                  className={`text-base ${
                    location === item.name.toLowerCase()
                      ? "text-white"
                      : "text-label_color_tertiary"
                  } pointer-events-none`}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
        <div className="w-full h-[1px] bg-line_bg"></div>
      </ul>
      <ul className="flex flex-col">
        <span className="h-[56px] flex items-center text-label_color_tertiary text-sm pl-4 font-semibold">
          {show && "SUBSCRIPTIONS"}
        </span>
        {categories_3.map((item) => {
          return (
            <li
              className={`${
                show ? "pl-5 " : "px-0 justify-center"
              } h-14 gap-x-5 flex items-center relative py-3 cursor-pointer before:absolute before:w-full before:h-[1px] before:bg-line_bg before:top-0 before:left-0 ${
                location === item.name.toLowerCase()
                  ? "after:w-full after:h-full after:bg-active_item after:absolute"
                  : ""
              }`}
              key={item.name}
            >
              <img className="w-8 h-8 rounded-full" src={item.img} alt="" />
              {show && (
                <span
                  className={`text-base ${
                    location === item.name.toLowerCase()
                      ? "text-white"
                      : "text-label_color_tertiary"
                  } pointer-events-none`}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
        <div className="w-full h-[1px] bg-line_bg"></div>
      </ul>
    </div>
  );
}

export default SideMenu;
