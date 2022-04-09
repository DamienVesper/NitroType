// Generate full documentation from JSON string
const generateDocs = (data) => {
	const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

	// Sort schemas alphabetically by endpoint name
	Object.values(data).forEach(schemas => {
		schemas.sort((a, b) => a.endpoint > b.endpoint);
	});

	// Generate section quick links
	let sectionLinks = (() => {
		const heading = '\n## Endpoints\n';
		let links = '';

		Object.keys(data).forEach(name => {
			links += `\n  * [${capitalize(name)}](#${name})`;
		});
	
		return heading + links + '\n';
	})();

	// Generate section content (endpoint quick links + doc)
	const generateSection = (name, schemas) => {
		const heading = `\n## ${capitalize(name)}`;
		let links = '', doc = '';
		
		const createTable = ({ method, apiScope }) => {
			if (apiScope) return `| method | apiScope |
| :---: | :---: |
| ${method} | ${apiScope || ''} |`;
			else return `| method |
| :---: |
| ${method} |`;
		};
	
		schemas.forEach(schema => {
			const { endpoint, description, method, apiScope, parameters } = schema;
			const params = parameters ? `\n\n**Params:** ${parameters.join(', ')}` : '';
			const hash = endpoint.replace(/[<>?|/]/g, '').toLowerCase();

			links += `\n  * [\`${endpoint}\`](#${hash})`;

			doc += `
### <code>${endpoint.replace(/</g, '\\<')}</code>
${description}

${createTable(schema)}${params}
`;
		});
	
		return heading + links + '\n' + doc;
	};

	let contents = '';
	for (let [sectionName, schemasArray] of Object.entries(data)) {
		contents += generateSection(sectionName, schemasArray);
	}

	return sectionLinks + contents;
};

const txt = document.getElementById('txt');
txt.addEventListener('input', () => {
	const data = JSON.parse(txt.value);
	txt.value = generateDocs(data);
});
