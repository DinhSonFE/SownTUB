import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import SearchBar from "./SearchBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const { searchTerm } = useParams();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <div
      className={`w-screen h-screen  grid grid-rows-layout-main-rows ${
        show
          ? "grid-cols-layout-main-cols"
          : "grid-cols-layout-main-cols-hide-menu"
      } bg-side_menu_bg`}
    >
      <SideMenu show={show} setShow={setShow} />
      <SearchBar></SearchBar>
      <div className="h-full w-full flex items-center">
        <h2 className="text-3xl px-8 text-label_color_tertiary">
          {searchTerm}
        </h2>
      </div>
      <Videos videos={videos} loading={loading} />
    </div>
  );
}

export default SearchFeed;
