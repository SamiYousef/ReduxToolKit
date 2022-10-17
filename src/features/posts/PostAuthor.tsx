import { useSelector } from "react-redux";
import { selectAllUers, IUser } from "../users/usersSlice";

interface IPostAuthor {
  userId: string;
}

const PostAuthor: React.FC<IPostAuthor> = ({ userId }) => {
  const users: IUser[] = useSelector(selectAllUers);

  const author = users.find((user) => user.id === userId);

  return <span>By {author ? author.name : "unknown author"}</span>;
};

export default PostAuthor;
