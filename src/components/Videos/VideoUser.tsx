import { Link } from 'react-router-dom';
import { Author } from '../../types/FeedItem.type';

export const VideoUser = ({ unique_id, nickname, avatar }: Author) => {
  return (
    <Link to={`/user/${unique_id}`} className="video-author">
      <div
        className="video-author__image"
        style={{ backgroundImage: `url('${avatar}')` }}
      ></div>
      <div className="video-author__info">
        <p>{nickname}</p>
        <span>{unique_id}</span>
      </div>
    </Link>
  );
};
