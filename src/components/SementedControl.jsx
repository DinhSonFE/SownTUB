import { useRef, useState } from "react";
import { categories } from "../utils/constants";
import ActiveItem from "../assets/icons/activeItem.svg";
import { useNavigate } from "react-router-dom";

function SementedControl({ selectedCategory, setSelectedCategory, show }) {
  const elementActive = useRef(null);
  const handleClickItem = (e) => {
    setSelectedCategory(e.currentTarget.getAttribute("data-value"));
  };
  return (
    <ul className="flex items-center gap-2 md:gap-6 overflow-x-scroll p-2 md:px-10 py-4 bg-bg_semented">
      {categories.map((item) => (
        <li
          onClick={handleClickItem}
          data-value={item.name}
          key={item.name}
          ref={item.name === selectedCategory ? elementActive : null}
          className={`${
            item.name === selectedCategory
              ? "text-white text-sm md:text-base opacity-80"
              : "text-label_color_tertiary text-xs md:text-sm bg-opacity-20"
          } cursor-pointer text-center relative transition-all bg-purple px-6 py-1 rounded-xl `}
        >
          {item.name}
          <div className="w-[200px] h-[50px] absolute z-50 -bottom-full pointer-events-none left-1/2 -translate-x-1/2">
            <img
              src={ActiveItem}
              alt=""
              className={`w-full h-full ${
                item.name === selectedCategory ? "opacity-100" : "opacity-0"
              } transition-all`}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SementedControl;
