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
//import creds from '../../credentials.json';


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

const doc = new GoogleSpreadsheet('1r7wShmfQVb8SNAOu_GrMIuEP2ixhxFWS8zaXXbQ0wLI', null, { gzip: false });

const spreadsheet = 1;

let sheet;

const creds_heroku = {
	'client_email': process.env.React_App_SHEET_EMAIL,
	'private_key': "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+zOSff2Byv+Oc\nJ8iuX3oCHhEY38Lh+kGU27KAN41dDEtJY7Tfmy2Bkok1QPOJHoFTvGSBjCxV9zWU\nd27sE7AusITV91aWhDUhcXP8oOC8sxEviPa/EVDnz9QDA1y05CWTWVdAV0J+Vd+D\nQDj9kB7uhIgxqTA5T/Uc8LT+0QY8prebv2XYzzFDixz66wq5k1kZVg6SeTOIXKkj\n9mimi8+PKRW/s08zfK0+E/rIWM241oJv9LRNetDgQzCnC//FbaEMILQjFOcVSqPr\n6vr0ssPjOMvRbbpe7LkHptHPAqnLWFtUb02A+QvWePeZKtHKYucvCKcU68v9DUpe\nlsR1VBKZAgMBAAECggEAHJLFmCc0s+qNtQh2MrrkpCWJjO6RmlLmeFrwX+gx2OHq\n8momn6f3CCUAPEPmVL4HQxl++bGawCL92KaMK3mFVHCl6/8W7gKNjF0XsBkNnuS4\nKaS6wwFeWuDSUMMzonlaMTdbbCzFLfNBPkAjaMGpCDI7zSgXqzWQsQ1RJan646EX\ng+QGYJSwPK/BNdMyGDnd22Lc46xeeMNAXtIyBKdQTMXilA+aQmM0GxT18T+/fKZh\nHQmzAhgXHlRNOq9jRvC3XarrUebxqMI2vfDTU9hrTQgW38R+FPx8y7tz9L2p+U63\nQxfUAoiyEGuheP8M3iX3mB9hLhvOCAUD7y17+DVdSQKBgQDw7jrUX3bOeDBFyfv1\n0qidiMGMynhP+6CiPU+uounsVviX7VeExlmW+b2wvnKqQyv5hwNrPEX03rdtJ2Gp\nLGdQvyypzIUSyaXgwuYwZYHk9E8sMqOjKCyszX5pTzGbezPgMeHIO0L7bSA4qKTf\nskLaZYwa5BVdlcE/TrIK9wQprQKBgQDKu/r0tRACCiA4Re8SGZymA03gsxB/C5MP\nDOAdg9bCwYDIDspGCbgrX9c771Pd/OoYI3du+PIoTax7/XpRoh10gg11nNaAe5bL\nX2OFVA1n8KMRs6Wdx/G0PZgsMDf200Yt9TQkPnRbN4wo8OadsdrN1NIU7DLHCoCk\ne3ckeKgCHQKBgQCGwMfYpng9rM1bC0jISgWS7r1KcKfwHE3Q0Dfz9hyd2lr6Jn5P\nvdy364DkDPD3N9CtpI0N+k0qUzMGcwNVaodyiyqA4eoAAxaq6ndy1CNdmiN6Feye\nQccS83BjmC6nxrXSDDQ7GKIzG+rspa5pizuHCUrec3lbuXm3Xd2I8nW6lQKBgA47\nnkW5xHLwNQzeVAdoRugcyUXiLGFO9bcTx1QrIlOv9BOXfjnmish4xQqPJcsq62Bg\ndQ0UayPLODXIOOMsR3cbfkhoh2KjypVikAEXQo2uhjRC8XifRefKfzly9Srd8Epf\nsZZt0AtrXeqt5vLhPqQ+sbUIVBRHN3rUtCuaUOk9AoGAG2BgXk9ranikjxPyLN3I\nLSSXFdCs3IyJ6d09XEA6Qft2xwjxCVwAPm3kNMo5o0DwkVb+I3hVTusyDL2VoNuv\naauEYUMekHKzgIwLzXkjwWN7i+Clp5BL1cD+CxbdrDODjt88ESJT3MOWMAuC9qN6\n9g9A+0d3H7/7dXgarddmW3I=\n-----END PRIVATE KEY-----\n"
};


const uploadData = (newRow) => {
	async.series([
		function setAuth(step) {
			console.log(creds_heroku)
			doc.useServiceAccountAuth(creds_heroku, function (error) { console.log(error) });
		},
		function getInfoAndWorksheets(step) {
			doc.getInfo(function (err, info) {
				if (err) {
					console.log(err);
				}
				else {
					console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
					sheet = info.worksheets[0];
					console.log('sheet 1: ' + sheet.title + ' ' + sheet.rowCount + 'x' + sheet.colCount);
					step();
				}
			});
		},
		function addRow(step) {
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

class Swiper extends React.Component {
	state = {
		swiperPosition: 0,
		isTableLoaded: false,
		data: []
	};

	getLastTenRowsCallback = (error, rows) => {
		const { loaded } = this.state;
		const data = rows.map((row) => {
			return { name: row.name, amount: row.amount, date: row.date };
		});
		this.setState({ data: data.reverse() });
		this.setState({ loaded: !loaded });
	};

	getData = () => {
		const callback = this.getLastTenRowsCallback;
		async.series([
			function setAuth(step) {
				doc.useServiceAccountAuth(creds_heroku, step);
			},
			function getLastTenRows(step) {
				doc.getRows(spreadsheet, { limit: 10 }, callback);
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

	render() {
		const { swiperPosition, isTableLoaded, data } = this.state;

		let reactSwipeEl;
		return (
			<div>
				<ReactSwipe
					className="carousel"
					swipeOptions={{
						continuous: false,
						callback: this.handleSwipe
					}}
					ref={el => { (reactSwipeEl = el); }}
				>
					<div>
						<CustomForm uploadData={uploadData} />
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