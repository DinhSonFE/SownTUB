
function IconCustom({ icon }) {
  return (
    <div className="w-8 cursor-pointer h-8 flex items-center justify-center flex-shrink-0 bg-icon_bg rounded-full relative after:absolute after:w-[30px] after:h-[30px] after:bg-bgColor after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 group">
      <img src={icon} alt="" className="z-50 group-hover:fill-white group-hover:group-hover:stroke-white" />
    </div>
  )
}

export default IconCustom