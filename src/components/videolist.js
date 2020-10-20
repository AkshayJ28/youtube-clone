import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const rederedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return <div className="ui relaxed divided list">{rederedList}</div>;
};

export default VideoList;
