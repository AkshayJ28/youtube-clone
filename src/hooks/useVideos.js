import { useState, useEffect } from 'react'
import GoogleApi from '../api/GoogleApi'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const responce = await GoogleApi.get('/search', {
            params: {
                q: term,
            },
        });
        setVideos(responce.data.items)
    };
    return [videos, search];
};

export default useVideos;