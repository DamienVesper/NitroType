const SAMPLE_SIZE = 250; // Number of characters in each sample.
const REGEX = /(?<=")\/api\/.*?(?=")/g;
const FILE_PATH = '/dist/site/js/ga.js';

const output = (async () => {
	const source = await fetch(FILE_PATH).then(res => res.text());
	const found = [...source.matchAll(REGEX)].sort();
	const iterator = found[Symbol.iterator]();
	const allMatches = found.map(match => match[0]);
	const uniqueMatches = [...new Set(allMatches)];

	let data = {};
	uniqueMatches.forEach(match => {
		const matches = allMatches.filter(e => e === match).length;
		let samples = [];

		for (let i = matches; i > 0; --i) {
			const idx = iterator.next().value.index;
			const samp = source.slice(idx - SAMPLE_SIZE/2, idx + SAMPLE_SIZE/2);

			samples.push(samp);
		}

		data[match] = { samples };
	});

	return data;
})();

const download = async (prefix = 'output') => {
	const data = await output;
	const a = document.createElement('a');
	const file = new Blob([JSON.stringify(data)], {type: 'application/json'});
	
	a.href = URL.createObjectURL(file);
	a.download = `${prefix}_${Date.now()}.json`;
	a.click();
};
