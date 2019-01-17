/* eslint-disable no-unused-vars */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const ROOT_STYLE = {
	flexGrow: 1,
	boxShadow: 'none',
	backgroundColor: '#1B3448'
};

const TEXT_STYLE = {
	flexGrow: 1,
};

const BUTTON_STYLE = {
	marginLeft: -12,
	marginRight: 20,
};


class Header extends React.Component {
	render() {
		return (
			<AppBar position="static" style={ROOT_STYLE} >
				<Toolbar>
					<IconButton color="inherit" aria-label="Menu" style={BUTTON_STYLE}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" style={TEXT_STYLE}>
						Gekko
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}



export default Header;
