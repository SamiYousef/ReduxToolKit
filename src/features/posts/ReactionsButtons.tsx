import { useDispatch } from "react-redux";
import { IPost, ReactionType, updateReaction } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️"
};

interface IReactionsButtons {
  post: IPost;
}

const ReactionsButtons: React.FC<IReactionsButtons> = ({ post }) => {
  const dispatch = useDispatch();

  const onClickEmoji = (reaction: ReactionType) =>
    dispatch(updateReaction({ reaction, postId: post.id }));

  const reactionButtons = Object.entries(reactionEmoji).map(([key, val]) => {
    return (
      <button
        key={key}
        type="button"
        className="reactionButton"
        onClick={() => onClickEmoji(key as ReactionType)}
      >
        {val} {post.reactions[key as ReactionType]} &nbsp;
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionsButtons;
