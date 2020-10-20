import React from 'react'

const videoDetails = ({ video }) => {
    if (!video) {
        return <div>Loading..</div>
    }

    // const videosSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    const videosSrc = 'https://www.youtube.com/embed/' + video.id.videoId

    return (
        <div>
            <div className='ui embed'>
                <iframe title='videoPlayer' src={videosSrc}></iframe>
            </div>
            <div className='ui segment' >
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    );
}

export default videoDetails
