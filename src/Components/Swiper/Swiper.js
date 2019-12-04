/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactSwipe from 'react-swipe';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateIcon from '@material-ui/icons/Create';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import StarIcon from '@material-ui/icons/Star';
import GoogleSpreadsheet from 'google-spreadsheet';
import async from 'async';

import Icon from './Icon';
import CustomForm from './Form/CustomForm';
import Graphs from './Graphs/Graphs';
import Table2 from './Table/Table2';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


const ICON_STYLE = {
	width: '33%',
	display: 'flex',
	justifyContent: 'center'
};

const APPBAR_STYLE = {
	marginBot: '1000px',
	top: 'auto',
	bottom: 0,
	backgroundColor: '#1B3448'
};

const doc = new GoogleSpreadsheet('1r7wShmfQVb8SNAOu_GrMIuEP2ixhxFWS8zaXXbQ0wLI', null, { gzip: false });

const spreadsheet = 1;

let sheet;


const isRunningOnHeroku = process.env.React_App_HEROKU === 'true' ? true : false;

const creds = isRunningOnHeroku
	? {
		'client_email': process.env.React_App_SHEET_EMAIL,
		'private_key': process.env.React_App_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
	}
	: require('../../credentials.json')



class Swiper extends React.Component {
	state = {
		swiperPosition: 0,
		isTableLoaded: false,
		data: []
	};

	uploadData = (newRow) => {
		async.series([
			function setAuth(step) {
				doc.useServiceAccountAuth(creds, step);
			},
			function addRow(step) {
				const today = new Date();
				const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
				const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
				newRow['time'] = date + ' ' + time
				doc.addRow(spreadsheet, newRow, function (err) {
					if (err) {
						console.log('Error : ' + err);
					}
				});
				step();
			}
		], function (err) {
			if (err) {
				console.log('Error: ' + err);
			}
		});
	};

	getLastTenRowsCallback = (error, rows) => {
		const { loaded } = this.state;
		const data = rows.map((row) => {
			return { name: row.name, amount: row.amount, date: row.date };
		});
		this.setState({ data });
	};

	getData = () => {
		const callback = this.getLastTenRowsCallback;
		async.series([
			function setAuth(step) {
				doc.useServiceAccountAuth(creds, step);
			},
			function getLastTenRows(step) {
				doc.getRows(spreadsheet, { limit: 10, orderby: 'time', reverse: true }, callback);
				step();
			}
		], function (err) {
			if (err) {
				console.log('Error: ' + err);
			}
		});
	};

	componentDidMount() {
		this.getData();
	}
	handleSwipe = index => {
		this.setState({ swiperPosition: index });
	}

	handleFormSubmit = (childData) => {
		this.setState({ data: [] })
	}

	render() {
		const { swiperPosition, data } = this.state;

		let reactSwipeEl;
		return (
			<div >
				<ReactSwipe
					className="carousel"
					swipeOptions={{
						continuous: false,
						callback: this.handleSwipe
					}}
					ref={el => { (reactSwipeEl = el); }}
				>
					<div>
						<CustomForm sendDataToSwiper={this.handleFormSubmit} />
					</div>
					<div>
						<Table2 data={data} />
					</div>
					<div>
						<Graphs data={data} />
					</div>
				</ReactSwipe>
				<AppBar position="fixed" style={APPBAR_STYLE} >
					<Toolbar style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
						<div
							onClick={() => { reactSwipeEl.slide(0); }}
							style={ICON_STYLE}
						>
							<Icon
								Icon={CreateIcon}
								isSelected={swiperPosition === 0 ? true : false}
							/>
						</div>
						<div
							onClick={() => { reactSwipeEl.slide(1); }}
							style={ICON_STYLE}
						>
							<Icon
								Icon={FilterDramaIcon}
								isSelected={swiperPosition === 1 ? true : false}
							/>
						</div>
						<div
							onClick={() => { reactSwipeEl.slide(2); }}
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