import GoogleSpreadsheet from 'google-spreadsheet';
import async from 'async';



const doc = new GoogleSpreadsheet('1r7wShmfQVb8SNAOu_GrMIuEP2ixhxFWS8zaXXbQ0wLI');

const spreadsheet = 1;

let sheet;

const addRowCallback = (error, row) => {
	console.log(error);
};

const authCallback = (error) => {
	console.log(error);
};
const getLastTenRowsCallback = (error, rows) => {
	console.log(error);
	const nameOfRows = rows.map((row) => {
		return row.name
	})
	console.log(nameOfRows);
};


export const newData = (newRow) => {
	async.series([
		function setAuth(step) {
			// see notes below for authentication instructions!
			var creds = require('./credentials.json');

			doc.useServiceAccountAuth(creds, step);
			console.log('logged in');

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
			doc.addRow(spreadsheet, newRow, addRowCallback);
			step();
		}
	], function (err) {
		if (err) {
			console.log('Error: ' + err);
		}
	});
};


export const getData = () => {
	async.series([
		function setAuth(step) {
			// see notes below for authentication instructions!
			var creds = require('./credentials.json');

			doc.useServiceAccountAuth(creds, step);
			console.log('logged in');

		},
		function getLastTenRows(step) {
			doc.getRows(spreadsheet, getLastTenRowsCallback);
			step();
		}
	], function (err) {
		if (err) {
			console.log('Error: ' + err);
		}
	});
};


