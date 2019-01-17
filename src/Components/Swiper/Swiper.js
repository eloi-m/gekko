/* eslint-disable no-unused-vars */
import React from 'react';
import ReactSwipe from 'react-swipe';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateIcon from '@material-ui/icons/Create';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import StarIcon from '@material-ui/icons/Star';

import Icon from './Icon';
import CustomForm from './Form/CustomForm';
import Table from './Table/Table';
import Graphs from './Graphs/Graphs'



const ICON_STYLE = {
	width: '33%',
	display: 'flex',
	justifyContent: 'center'
};

const APPBAR_STYLE = {
	top: 'auto',
	bottom: 0,
	backgroundColor: '#1B3448'
};


class Swiper extends React.Component {
	state = {
		swiperPosition: 0,
	};

	handleSwipe = index => {
		this.setState({ swiperPosition: index });
	}

	render() {
		const { swiperPosition } = this.state;
		let reactSwipeEl;
		return (
			<div>
				<ReactSwipe
					className="carousel"
					swipeOptions={{ continuous: false, callback: this.handleSwipe }}
					ref={el => { (reactSwipeEl = el); }}
				>
					<div>
						<CustomForm />
					</div>
					<div>
						<Table />
					</div>
					<div>
						<Graphs />
					</div>
				</ReactSwipe>

				<AppBar position="fixed" style={APPBAR_STYLE} >
					<Toolbar style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
						<div
							onClick={() => { reactSwipeEl.slide(0) }}
							style={ICON_STYLE}
						>
							<Icon
								Icon={CreateIcon}
								isSelected={swiperPosition === 0 ? true : false}
							/>
						</div>
						<div
							onClick={() => { reactSwipeEl.slide(1) }}
							style={ICON_STYLE}
						>
							<Icon
								Icon={FilterDramaIcon}
								isSelected={swiperPosition === 1 ? true : false}
							/>
						</div>
						<div
							onClick={() => { reactSwipeEl.slide(2) }}
							style={ICON_STYLE}
						>
							<Icon
								Icon={StarIcon}
								isSelected={swiperPosition === 2 ? true : false}
							/>
						</div>
					</Toolbar>
				</AppBar>


			</div >
		);
	}
}

export default Swiper;