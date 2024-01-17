import useCacutimer from "../hooks/useCacutimer";
import LikeIcon from "../assets/icons/like.svg";
function CommentCard({ data }) {
  return (
    <li className="flex gap-4">
      <div className="flex flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt=""
        />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="text-sm text-label_color_tertiary">
            {data?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </h4>
          <span className="text-xs text-label_color_quaternary">
            {useCacutimer(data?.snippet?.topLevelComment?.snippet?.updatedAt)}
          </span>
        </div>
        <span className="text-sm text-label_color_tertiary whitespace-pre-line">
          {data?.snippet?.topLevelComment?.snippet?.textOriginal}
        </span>
        <div className="flex gap-4 mt-2 items-center">
          <img src={LikeIcon} alt="" className="w-4 h-4" />
          <span className="text-xs text-label_color_tertiary">
            {data?.snippet?.topLevelComment?.snippet?.likeCount !== 0 &&
              data?.snippet?.topLevelComment?.snippet?.likeCount}
          </span>
        </div>
      </div>
    </li>
  );
}

export default CommentCard;
