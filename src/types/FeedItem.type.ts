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

export type FeedItem = Counts & {
  video_id: string;
  title: string;
  play: string;
  music_info: {
    title: string;
  };
  author: Author;
};