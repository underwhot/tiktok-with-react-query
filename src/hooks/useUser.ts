import { useQuery } from '@tanstack/react-query';

import { request } from '../utils/common';

const getUser = async (id: string) => {
  const response = await request({
    path: `user/info?unique_id=${id}`,
  });

  return response;
};

export const useUser = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  });

  return {
    isLoading,
    code: data?.code,
    error: data?.msg,
    data: data?.data || [],
  };
};
