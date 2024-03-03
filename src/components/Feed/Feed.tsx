import { useFeed } from '../../hooks/useFeed';
import { Spinner } from '../Spinner/Spinner';
import { VideoDetails } from '../Videos/VideoDetails';
import { VideoUser } from '../Videos/VideoUser';

import { MusicNote } from '@mui/icons-material';

export const Feed = () => {
  const { data: feed, isLoading } = useFeed();

  return (
    <div className="feed">
      <div className="container feed__container">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {feed.map(
              ({
                video_id,
                title,
                play,
                music_info: { title: songTitle },
                author,
                ...rest
              }) => {
                return (
                  <div className="video" key={video_id}>
                    <VideoUser {...author} />

                    <div className="video-wrapper">
                      <video src={play} loop autoPlay={false} muted></video>
                      <VideoDetails {...rest} />
                    </div>

                    <div className="video-music">
                      <span>Original: </span>
                      <MusicNote />
                      <p className="video-music__title">{songTitle}</p>
                    </div>

                    <div className="video-title">{title}</div>
                  </div>
                );
              }
            )}
          </>
        )}
      </div>
    </div>
  );
};
