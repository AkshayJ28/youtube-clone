import React from 'react';
import SearchBar from './searchBar';
import GoogleApi from '../api/GoogleApi';
import VideoList from './videolist';
import VideoDetails from './videoDetails'

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('valorant')
    }

    onTermSubmit = async (term) => {
        const responce = await GoogleApi.get('/search', {
            params: {
                q: term,
            },
        });
        this.setState({
            videos: responce.data.items,
            selectedVideo: responce.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
