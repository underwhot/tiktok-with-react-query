import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { formatCompactNum } from '../../utils/common';
import { Counts } from '../../types/FeedItem.type';

export const VideoDetails = ({
  play_count,
  digg_count,
  comment_count,
  share_count,
}: Counts) => {
  const details = [
    {
      icon: <PlayArrowIcon />,
      count: play_count,
    },
    {
      icon: <ChatBubbleIcon />,
      count: comment_count,
    },
    {
      icon: <FavoriteIcon />,
      count: digg_count,
    },
    {
      icon: <ShareIcon />,
      count: share_count,
    },
  ];
  return (
    <ul className="video-details">
      {details.map((detail, i) => (
        <li key={i} className="video-details__item">
          {detail.icon}
          <p>{formatCompactNum(detail.count)}</p>
        </li>
      ))}
    </ul>
  );
};
