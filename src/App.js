/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Components/Header';
import Swiper from './Components/Swiper';

const HEADER_STYLE = {
};

const BODY_STYLE = {
	margin:'10px',
};


class App extends React.Component {


	render() {
		return (
			<div> 
				<div id='Header' style = {HEADER_STYLE}> 
					<Header/>
				</div>
				<div id='Body' style = {BODY_STYLE}>
					<Swiper/>
				</div>
			</div>			
		);
	}
}

export default App;
