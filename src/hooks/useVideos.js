import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideo = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    // const { data = {} } = response;
    // const { results = [] } = data;
    // console.log(results[2]);

    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideo;
