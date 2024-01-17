import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import SementedControl from "./SementedControl";
import SideMenu from "./SideMenu";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [selectedCategory]);

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
      <SementedControl
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Videos videos={videos} loading={loading} />
    </div>
  );
}

export default Feed;
