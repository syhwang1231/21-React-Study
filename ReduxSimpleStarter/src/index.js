import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCO5FpDRgUwn6zIFkRKt00M0BooArtz6mI';

// Create a new component.
// This component should produce some HTML
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}

// 함수는 실제 DOM에 렌더링되는 컴포넌트의 인스턴스들을 만든다.

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));