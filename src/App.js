/* eslint-disable no-unused-vars */
import React from 'react';

import CustomForm from './Components/CustomForm';
import Header from './Components/Header';
import ReactSwipe from 'react-swipe';

const HEADER_STYLE = {
};

const BODY_STYLE = {
	margin:'10px',
};


class App extends React.Component {


	render() {
		let reactSwipeEl;
		return (
			<div> 
				<div id='Header' style = {HEADER_STYLE}> 
					<Header/>
				</div>
				<div id='Body' style = {BODY_STYLE}>
					<div>
						<ReactSwipe
							className="carousel"
							swipeOptions={{ continuous: false }}
							ref={el => (reactSwipeEl = el)}
						>
							<div>
								<CustomForm/>
							</div>
							<div>
								PANE 2
							</div>
						</ReactSwipe>
						<button onClick={() => reactSwipeEl.next()}>Next</button>
						<button onClick={() => reactSwipeEl.prev()}>Previous</button>
					</div>
				</div>
			</div>			
		);
	}
}

export default App;
