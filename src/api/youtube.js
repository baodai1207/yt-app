import axios from 'axios';

const KEY = 'AIzaSyC5q8gFp4lgSMI-PyNHiUTh5wakPaYw0JI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
