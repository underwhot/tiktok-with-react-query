import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { Fragment, useEffect } from 'react';
import { Alert } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { VideoItem } from '../Videos/VideoItem';
import { Spinner } from '../Spinner/Spinner';
import { FeedItem } from '../../types/FeedItem.type';

export const SearchFeed = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data, hasNextPage, isFetching, setParams, fetchNextPage } =
    useSearch();

  useEffect(() => {
    if (!query) return;

    setParams((params) => ({ ...params, keywords: query }));
  }, [query]);

  return (
    <div className="container search-feed__container">
      {data.map(({ data: { videos } }, idx) => {
        return !videos.length ? (
          <div className="error-message" key={idx}>
            <Alert severity="error">Nothing for {query}</Alert>
          </div>
        ) : (
          <Fragment key={idx}>
            <InfiniteScroll
              dataLength={videos.length}
              scrollThreshold={'600px'}
              hasMore={hasNextPage}
              next={fetchNextPage}
              loader={undefined}
            >
              {videos.map((video: FeedItem) => (
                <VideoItem key={video.video_id} {...video} />
              ))}
            </InfiniteScroll>
          </Fragment>
        );
      })}

      {isFetching && <Spinner />}
    </div>
  );
};
