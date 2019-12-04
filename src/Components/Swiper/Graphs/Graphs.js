import React from 'react';
import Chart from "react-apexcharts";

const chartContent = {
	options: {
		chart: {
			id: "basic-bar"
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
		}
	},
	series: [
		{
			name: "series-1",
			data: [30, 40, 45, 50, 49, 60, 70, 91]
		}
	]
};


class Graphs extends React.Component {
	state = {
		categories: [],
		data: []
	}

	organizeData = (rawData) => {
		if (rawData) {
			const dates = rawData.map((row) => {
				return (row.date)
			})
			const categories = Array.from(new Set(dates));
			let data = [];
			for (const date of categories) {
				let amountSpentThatDay = 0;
				for (const row of rawData) {
					if (row.date == date) {
						amountSpentThatDay = amountSpentThatDay + parseFloat(row.amount)
					}
				}
				data.push(amountSpentThatDay);
			}
			this.setState({ categories, data })
			const currentOptions = chartContent.options;
			const currentSeries = chartContent.series;
			currentOptions.xaxis.categories = categories;
			currentSeries.data = data;
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) {
			const rawData = this.props.data
			this.organizeData(rawData)
		}
	}

	componentDidMount() {
		const rawData = this.props.data
		this.organizeData(rawData)
	}

	render() {
		const { options, series } = chartContent;
		console.log(this.state)
		console.log(chartContent)
		return (
			<div className="app">
				<div className="row">
					<div className="mixed-chart">
						<Chart
							options={options}
							series={series}
							type="bar"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Graphs;
