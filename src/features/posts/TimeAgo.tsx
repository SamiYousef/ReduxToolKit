import { parseISO, formatDistanceToNow } from "date-fns";

interface ITimeAgo {
  timeStamp: string;
}

const TimeAgo: React.FC<ITimeAgo> = ({ timeStamp }) => {
  const date = parseISO(timeStamp);
  const timeAgo = `${formatDistanceToNow(date)} Ago`;
  return (
    <span title="hello">
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
