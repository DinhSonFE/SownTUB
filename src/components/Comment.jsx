import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Comment({ id }) {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    if (id) {
      fetchFromAPI(
        `commentThreads?part=snippet&videoId=${id}&maxResults=100`
      ).then((data) => setComments(data?.items));
    }
  }, [id]);

  return (
    <div className="p-2 md:p-6 flex flex-col gap-6 bg-purple bg-opacity-5 rounded-lg">
      <h3 className="text-base md:text-xl text-label_color_tertiary">
        {comments?.length} bình luận
      </h3>
      <ul className="flex flex-col gap-10 h-[200px] md:h-auto overflow-scroll md:overflow-auto bg-side_menu_bg p-2 md:p-6 rounded-lg">
        {comments?.map((item) => (
          <CommentCard key={item?.id} data={item} />
        ))}
      </ul>
    </div>
  );
}

export default Comment;
