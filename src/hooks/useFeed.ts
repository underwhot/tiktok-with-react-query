import { useQuery } from '@tanstack/react-query';

import { request } from '../utils/common';
import { REGION } from '../utils/constans';

export type Counts = {
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
};

export type Author = {
  unique_id: string;
  nickname: string;
  avatar: string;
};

type FeedItem = Counts & {
  video_id: string;
  title: string;
  play: string;
  music_info: {
    title: string;
  };
  author: Author;
};

const getFeed = async () => {
  const response = await request({
    path: `feed/list?region=${REGION}&count=20`,
  });

  return response;
};

export const useFeed = (): { data: FeedItem[]; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: getFeed,
  });

  return { data: data?.data || [], isLoading };
};
