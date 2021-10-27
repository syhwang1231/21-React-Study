import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCO5FpDRgUwn6zIFkRKt00M0BooArtz6mI';


// Create a new component.
// This component should produce some HTML
class App extends Component {
	constructor(props){
		super(props);
		
		this.state = { 
			videos: [],
			selectedVideo: null
		};
		
		this.videoSearch('surfboards');
	}
	
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({videos: videos}); 와 동일.
			// key, value의 이름이 같을 때만 사용.
		});
	}
	
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
			
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
					videos={this.state.videos} />
			</div>
		);
	}
}

// 함수는 실제 DOM에 렌더링되는 컴포넌트의 인스턴스들을 만든다.

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));