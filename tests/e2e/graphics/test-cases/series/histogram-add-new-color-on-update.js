/*
	End result should have a purple histogram bar (value of 499) as
	the last visible bar.
*/
function generateData() {
	const colors = [
		'#013370',
		undefined,
	];

	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
			color: colors[i % colors.length],
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}

	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, { layout: { attributionLogo: false } });

	const mainSeries = chart.addSeries(LightweightCharts.HistogramSeries, {
		color: '#ff0000',
	});

	const data = generateData();
	const lastItem = data.splice(-1, 1)[0];
	mainSeries.setData(data);

	lastItem.color = '#ccaaee';
	mainSeries.update(lastItem);
}
