import axios from 'axios';

const KEY = 'AIzaSyCB-d_cPkfm-Hk9kMvLnSX_gomWNszTA1o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
