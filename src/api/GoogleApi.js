import axios from 'axios';

const KEY = 'AIzaSyCAr2FvZrUT1sdUKNTV1l-f6-QajmGlB7I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
