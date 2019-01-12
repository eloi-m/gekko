/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Components/Header';
import Swiper from './Components/Swiper';

const HEADER_STYLE = {
};

const BODY_STYLE = {
	padding: '10px',
	backgroundColor: '#10171e'
};

class App extends React.Component {


	render() {
		return (
			<div>
				<div id='Header' style={HEADER_STYLE}>
					<Header />
				</div>
				<div id='Body' style={BODY_STYLE}>
					<Swiper />
				</div>
			</div>
		);
	}
}

export default App;
