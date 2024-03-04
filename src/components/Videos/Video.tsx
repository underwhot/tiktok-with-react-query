import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Spinner } from '../Spinner/Spinner';

export const Video = ({
  video_id,
  url = '',
  width = '100%',
  heigth = '360px',
}: {
  video_id: string;
  url: string;
  width?: string;
  heigth?: string;
}) => {
  // <HTMLDivElement | null>
  const ref = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState<Boolean | number>(false);
  const [isReady, setIsReady] = useState(false);

  const handleClick = () => {
    setIsPlaying((prev) => !prev);

    ref?.current?.parentElement?.classList.toggle('playing', !isPlaying);
  };

  const handleProgress = ({
    loaded,
    played,
  }: {
    loaded: number;
    played: number;
  }) => {
    if (!loaded) return;
    setProgress(played * 100);
  };

  return (
    <div className={`video-item ${isPlaying ? 'playing' : ''}`} ref={ref}>
      {!isReady && <Spinner />}
      <Link to={`/video/${video_id}`}>
        <ReactPlayer
          url={url}
          width={width}
          height={heigth}
          playing={isPlaying}
          loop={true}
          onProgress={handleProgress}
          onReady={() => setIsReady(true)}
        />
      </Link>
      <div className="video-icon-controls" onClick={handleClick}>
        {isPlaying ? <PauseIcon /> : <PlayCircleIcon />}
      </div>

      <div className="video-progress">
        <span style={{ width: `${progress}%` }}></span>
      </div>
    </div>
  );
};
