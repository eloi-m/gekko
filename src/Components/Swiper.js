/* eslint-disable no-unused-vars */
import React from 'react';
import ReactSwipe from 'react-swipe';
import CustomForm from './CustomForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateIcon from '@material-ui/icons/Create';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import StarIcon from '@material-ui/icons/Star';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blueGrey';

import Icon from './Icon';


const THEME = createMuiTheme({
	palette: {
		primary: blue,
	},
});


const ICON_STYLE = {
	width: '33%',
	display: 'flex',
	justifyContent: 'center'
};

class Swiper extends React.Component {
	state = {
		swiperPosition: 0,
	}
	render() {
		const { swiperPosition } = this.state
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

				<MuiThemeProvider theme={THEME}>
					<AppBar position="fixed" style={{ top: 'auto', bottom: 0, }} >
						<Toolbar style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
							<div
								onClick={() => {
									reactSwipeEl.slide(0);
									this.setState({ swiperPosition: reactSwipeEl.getPos() })
								}}
								style={ICON_STYLE}
							>
								<Icon
									Icon={CreateIcon}
									isSelected={swiperPosition === 0 ? true : false}
								/>
							</div>
							<div
								onClick={() => {
									reactSwipeEl.slide(1);
									this.setState({ swiperPosition: reactSwipeEl.getPos() })
								}}
								style={ICON_STYLE}
							>
								<Icon
									Icon={FilterDramaIcon}
									isSelected={swiperPosition === 1 ? true : false}
								/>
							</div>
							<div
								onClick={() => {
									reactSwipeEl.slide(2);
									this.setState({ swiperPosition: reactSwipeEl.getPos() })
								}}
								style={ICON_STYLE}
							>
								<Icon
									Icon={StarIcon}
									isSelected={swiperPosition === 2 ? true : false}
								/>
							</div>
						</Toolbar>
					</AppBar>
				</MuiThemeProvider>


			</div >
		);
	}
}

export default Swiper;