import VideoCard from "./VideoCard";
import VideoLoader from "./VideoLoader";
import { v4 as uuidv4 } from "uuid";

function Videos({ videos, loading, setLoading }) {
  if (loading || !videos || !Array.isArray(videos) || videos.length === 0) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-4 gap-y-10 p-10">
        {Array.from({ length: 20 }, (_, index) => index + 1).map((video) => (
          <VideoLoader key={uuidv4()} />
        ))}
      </div>
    );
  }
  return (
    <div className=" grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-10 p-4 md:p-10 h-full overflow-scroll ">
      {videos?.map((video) => (
        <VideoCard key={uuidv4()} data={video} />
      ))}
    </div>
  );
}

export default Videos;
