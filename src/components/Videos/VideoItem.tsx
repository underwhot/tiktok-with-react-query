import { Video } from './Video';
import { VideoUser } from './VideoUser';
import { FeedItem } from '../../types/FeedItem.type';

function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.substring(0, maxLength) + '...';
  }
}

export const VideoItem = ({ video_id, author, title, play }: FeedItem) => {
  return (
    <div className="video">
      <VideoUser {...author} />
      <Video url={play} video_id={video_id} />
      <div className="video-title">{truncateString(title, 100)}</div>
    </div>
  );
};
