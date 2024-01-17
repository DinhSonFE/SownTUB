import useCacutimer from "../hooks/useCacutimer";
import { useNavigate } from "react-router-dom";

function VideoCard({ data, channelInfo }) {
  const navigate = useNavigate();

  const onHandleClickItem = () => {
    navigate(`/video/${data?.id?.videoId}`);
  };

  return (
    <div
      onClick={onHandleClickItem}
      className=" rounded-2xl hover:scale-105 transition-all hover:shadow-md hover:shadow-[#8015a7] cursor-pointer"
    >
      <div className="w-full h-[160px] md:h-[209px] rounded-tr-2xl rounded-tl-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={data?.snippet?.thumbnails?.high?.url}
          alt=""
        />
      </div>
      <div className="px-4 py-6 flex gap-4 bg-video_card_bg">
        <div className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <h3 className="text-white text-sm md:text-base font-semibold">
            {data?.snippet?.title}
          </h3>
          <span className="text-label_color_tertiary text-xs md:text-sm font-semibold">
            {data.snippet.channelTitle}
          </span>
          <span className="text-label_color_tertiary text-[10px] md:text-xs font-normal">
            {useCacutimer(data?.snippet?.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
