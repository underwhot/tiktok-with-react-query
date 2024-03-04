import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { request } from '../utils/common';
import { REGION } from '../utils/constans';

export type Params = {
  keywords: string;
  cursor?: number;
};

const getSearchByKeyword = async ({ keywords, cursor }: Params) => {
  const response = await request({
    path: `feed/search?keywords=${keywords}&count=10&cursor=${cursor}&region=${REGION}`,
  });

  return response;
};
//========================================================================================================================================================

export const useSearch = () => {
  const [params, setParams] = useState({
    keywords: '',
    cursor: 0,
  });

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['searchFeed', params.keywords],
    queryFn: ({ pageParam = params }) => getSearchByKeyword(pageParam),
    getNextPageParam: ({ data }) => {
      return data?.hasMore ? { ...params, cursor: data?.cursor } : undefined;
    },
    enabled: !!params.keywords,
    initialPageParam: params,
  });

  return {
    setParams,
    isFetching,
    hasNextPage,
    fetchNextPage,
    data: data?.pages || [],
  };
};
