/* eslint-disable no-unused-vars */
import React from 'react';
import ReactSwipe from 'react-swipe';
import CustomForm from './CustomForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateIcon from '@material-ui/icons/Create';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import StarIcon from '@material-ui/icons/Star';

import Icon from './Icon';

const ICON_STYLE = {
	width: '33%',
	display: 'flex',
	justifyContent: 'center'
};

class Swiper extends React.Component {
	render() {
		let reactSwipeEl;
		return (
			<div>
				<ReactSwipe
					className="carousel"
					swipeOptions={{ continuous: false }}
					ref={el => (reactSwipeEl = el)}
				>
					<div>
						<CustomForm />
					</div>
					<div>
						PANE 2
					</div>
					<div>
						PANEL 3
					</div>
				</ReactSwipe>


				<AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, }} >
					<Toolbar style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
						<div onClick={() => reactSwipeEl.slide(0)} style={ICON_STYLE}>
							<Icon
								Icon={CreateIcon}
							/>
						</div>
						<div onClick={() => reactSwipeEl.slide(1)} style={ICON_STYLE}>
							<Icon
								Icon={FilterDramaIcon}
							/>
						</div>
						<div onClick={() => reactSwipeEl.slide(2)} style={ICON_STYLE}>
							<Icon
								Icon={StarIcon}
							/>
						</div>
					</Toolbar>
				</AppBar>



			</div>
		);
	}
}

export default Swiper;