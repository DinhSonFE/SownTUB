import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useNavigate, useParams } from "react-router-dom";
import BellIcon from "../assets/icons/bell.svg";
import DislikeIcon from "../assets/icons/dislike.svg";
import LikeIcon from "../assets/icons/like.svg";
import Logo from "../assets/images/logo.png";
import SementedControl from "../components/SementedControl";
import useCacutimer from "../hooks/useCacutimer";
import useFormatDate from "../hooks/useFormatDate";
import useFormatNumber from "../hooks/useFormatNumber";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Comment from "./Comment";
import SearchBar from "./SearchBar";
function VideoDetail() {
  const [video, setVideo] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [listVideo, setListVideo] = useState(null);
  const [checkClick, setCheckClick] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(video);
  const element = useRef(null);
  const handleClickShowMore = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    if (id) {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
        setVideo(data?.items[0])
      );
      fetchFromAPI(
        `search?relatedToVideoId=${id}&part=id,snippet&type=video&maxResults=100`
      ).then((data) => setListVideo(data.items));
    }
  }, [id]);

  useEffect(() => {
    if (showMore) {
      element.current.style.height = "auto";
      element.current.style.overflow = "auto";
    } else if (video?.snippet?.localized?.description?.length < 300) {
      element.current.style.height = "fit-content";
      element.current.style.overflow = "hidden";
    } else {
      element.current.style.height = "200px";
      element.current.style.overflow = "hidden";
    }
  }, [showMore, video?.snippet?.localized?.description?.length]);

  useEffect(() => {
    if (checkClick) {
      console.log("run");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setCheckClick(false);
    }
  }, [checkClick]);
  const handleClickVideo = (id) => {
    navigate(`/video/${id}`);
    setCheckClick(true);
  };

  const handleClickShowChannel = (channelId) => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <div className="w-screen h-screen bg-side_menu_bg overflow-scroll ">
      <div className="fixed top-0 left-0 right-0 z-50 bg-side_menu_bg flex justify-between items-center pl-6">
        <div className="cursor-pointer">
          <Link to="/home" className="w-[10%] ">
            <img src={Logo} className="w-12 " alt="" />
          </Link>
        </div>

        <div className="w-[90%]">
          <SearchBar />
        </div>
      </div>
      <div className=" pl-6 flex mt-[56px] ">
        <div className="w-[80%] ">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player "
            controls
          />
          <div className="py-2 px-4 flex flex-col gap-4 bg-side_menu_bg">
            {/* Title */}
            <h3 className="text-white font-semibold text-xl">
              {video?.snippet?.localized?.title}
            </h3>
            {/* ----- */}
            <div className="flex justify-between ">
              {/* Channel */}
              <div className="flex gap-4">
                <div
                  className="flex gap-2 cursor-pointer"
                  onClick={() => {
                    handleClickShowChannel(video?.snippet?.channelId);
                  }}
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://plus.unsplash.com/premium_photo-1704497002984-c7d360f86cc0?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-base text-label_color_tertiary">
                      {video?.snippet?.channelTitle}
                    </span>
                    <span className="text-xs text-label_color_tertiary">
                      2,12 N người đăng ký
                    </span>
                  </div>
                </div>
                <button className="bg-bgColor hover:bg-gradient-to-r hover:from-[#C427FB] hover:to-[#22D7FF] border border-purple border-opacity-80 hover:border-none text-label_color_tertiary hover:text-white font-bold text-xs h-[32px] px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  Subscribe
                </button>
              </div>

              {/* Like DisLike Share */}
              <div className="flex rounded-full border border-purple border-opacity-70 px-4 py-2">
                <div className="flex items-center px-5 border-r border-purple  cursor-pointer gap-4">
                  <img src={LikeIcon} alt="" />
                  <span className="text-label_color_tertiary">
                    {video?.statistics?.likeCount}
                  </span>
                </div>
                <div className="flex items-center px-5  cursor-pointer gap-4">
                  <img src={DislikeIcon} alt="" />
                  <span className="text-label_color_tertiary"></span>
                </div>
                <div className="flex items-center px-5 border-l border-purple cursor-pointer gap-4">
                  <img src={BellIcon} alt="" />
                  <span className="text-label_color_tertiary">Share</span>
                </div>
              </div>
            </div>
            {/* ------ */}
            <div
              className="flex flex-col gap-4 relative transition-all bg-purple bg-opacity-10 p-6 rounded-lg"
              ref={element}
            >
              <div className="flex items-center gap-4">
                <span className="text-label_color_tertiary text-xs">
                  {video?.statistics?.viewCount &&
                    useFormatNumber(video?.statistics?.viewCount)}{" "}
                  lượt xem
                </span>
                <span className="text-label_color_tertiary text-xs">
                  {video?.snippet?.publishedAt &&
                    useFormatDate(video.snippet.publishedAt)}
                </span>
              </div>
              <p className="text-label_color_tertiary text-xs whitespace-pre-line">
                {video?.snippet?.localized?.description}
              </p>
              {video?.snippet?.localized?.description?.length > 200 && (
                <button
                  onClick={handleClickShowMore}
                  className={`${
                    showMore ? "static" : "absolute"
                  } bottom-0 left-0 right-0 bg-black text-label_color_tertiary text-sm py-2 hover:bg-opacity-80 hover:text-white`}
                >
                  {showMore ? "Hide More" : "Show More"}
                </button>
              )}
            </div>
          </div>
          <div className="mt-10">
            <Comment id={id} />
          </div>
        </div>
        {/* ------ */}
        <div className="w-[20%]">
          <SementedControl />
          <ul className="pl-4 pt-2 flex flex-col gap-6">
            {listVideo?.map((item) => (
              <li
                onClick={() => handleClickVideo(item?.id?.videoId)}
                key={item?.id?.videoId}
                className="rounded-tl-lg rounded-bl-lg hover:scale-105 transition-all hover:shadow-md hover:shadow-[#8015a7] h-[100px] flex  items-center gap-2  bg-video_card_bg_1 cursor-pointer relative"
              >
                <div className="flex h-full flex-shrink-0 ">
                  <img
                    className="w-[120px] h-full rounded-tl-lg rounded-bl-lg object-cover"
                    src={item?.snippet?.thumbnails?.high?.url}
                    alt=""
                  />
                </div>
                <div className="flex flex-col  after:w-full after:h-[1px] after:absolute after:bg-line_bg after:top-0 after:left-0">
                  <h5 className="text-label_color_secondary text-sm truncate">
                    {item?.snippet?.title}
                  </h5>
                  <span className="text-label_color_tertiary text-xs">
                    {item?.snippet?.channelTitle}
                  </span>
                  <span className="text-label_color_tertiary text-xs">
                    {useCacutimer(item?.snippet?.publishedAt)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
