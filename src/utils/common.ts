type Request = {
  path: string;
  method?: string;
};

export const request = async ({ path = '', method = 'GET' }: Request) => {
  const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;
  const options = {
    method: method,
    headers: {
      'X-RapidAPI-Key': '80a5e00f01msh603efa34262bcabp1ca552jsne3613c8bef5e',
      'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'  
    },
  };

  // if (body) options.body = body;

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const formatCompactNum = (num: number) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
  });

  return formatter.format(num);
};
