import React, { useState, useEffect } from 'react';
// import SearchBar from './searchBar'
import SearchBarHooks from './searchBar_hooks';
import VideoList from './videolist';
import VideoDetails from './videoDetails'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('Trending');
    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    };

    return (
        <div className="ui container">
            <SearchBarHooks onFormSubmit={search} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
