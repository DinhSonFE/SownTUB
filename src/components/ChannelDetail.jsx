import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import SementedControl from "./SementedControl";
import Videos from "./Videos";
import SideMenu from "./SideMenu";
import useFormatSub from "../hooks/useFormatSub";
import BellIcon from "../assets/icons/bell.svg";
function ChannelDetail() {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (channelId) {
      fetchFromAPI(`channels?part=snippet,statistics&id=${channelId}`).then(
        (data) => setChannel(data?.items[0])
      );
      fetchFromAPI(
        `search?channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
      ).then((data) => setVideos(data?.items));
      setLoading(false);
    }
  }, [channelId]);
  console.log(channel);
  return (
    <div
      className={`w-screen grid-cols-1 overflow-scroll h-screen grid grid-rows-layout-main-rows ${
        show
          ? "md:grid-cols-layout-main-cols"
          : "md:grid-cols-layout-main-cols-hide-menu"
      } bg-side_menu_bg`}
    >
      <SideMenu show={show} setShow={setShow} />
      <div className="fixed top-0 left-0 right-0 bg-black z-50">
        <SearchBar></SearchBar>
      </div>
      <div className="w-full  h-[160px] md:h-[300px] relative ">
        <img
          className="w-full h-full object-cover relative "
          src={channel?.brandingSettings?.image?.bannerExternalUrl}
          alt=""
        />
        <div className="absolute bottom-6 flex gap-4 left-6">
          <img
            className="w-[60px] h-[60px] rounded-full object-cover"
            src={channel?.snippet?.thumbnails?.high?.url}
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="text-white text-sm md:text-lg font-medium">
              {channel?.snippet?.localized?.title}
            </h2>
            <span className="text-label_color_tertiary text-xs md:text-sm">
              {channel?.snippet?.customUrl}
            </span>
            <span className="text-label_color_tertiary text-xs md:text-sm">
              {useFormatSub(channel?.statistics?.subscriberCount)} Subscriptions
            </span>
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
          <button className=" bottom-6 right-0 inline-flex gap-4 items-center px-2 md:px-4 md:py-2 py-1 bg-red transition ease-in-out delay-75 hover:bg-red-700 text-white text-xs md:text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
            <img className="w-4 h-4 md:w-6 md:h-6" src={BellIcon} alt="" />
            Subscriber
          </button>
        </div>
      </div>
      <div className="w-full h-full md:overflow-scroll ">
        <h4 className="text-label_color_tertiary text-base md:text-2xl font-bold p-6">
          Videos
        </h4>
        <Videos videos={videos} loading={loading} />
      </div>
    </div>
  );
}

export default ChannelDetail;
