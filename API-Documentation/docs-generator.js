// OLD CODE FROM DEC 14, 2021
// FROM: `Ray-Adams/NitroType-API-Docs`

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

// Static content prepended to docs
const staticContent = `
----

## Base URL
\`https://www.nitrotype.com/api/\`

----
`;

// Generate section quick links
const generateSectionLinks = (data) => {
	let sectionLinks = '\n## Endpoints\n';

	for (let name of Object.keys(data)) {
		const quickLink = `  * [${capitalize(name)}](#${name})`;
		sectionLinks += '\n' + quickLink;
	}

	return sectionLinks;
};

// Generate section content (endpoint quick links + docs)
const generateSection = (name, schemas) => {
	let endpointLinks = `\n## ${capitalize(name)}`;
	let endpointDocs = '';
	
	for (let schema of schemas) {
		const params = schema.parameters
			? `\n\n**Params:** ${schema.parameters.join(', ')}`
			: '';
		const hash = schema.endpoint.replace(/[<>?|/]/g, '').toLowerCase();

		endpointDocs += `
### <code>${schema.endpoint.replace(/</g, '\\<')}</code>
${schema.description}

<table>
	<tr>
		<th>method</th>
		<th>uhash</th>
		<th>apiScope</th>
	</tr>
	<tr>
		<td>${schema.method}</td>
		<td><code>${schema.uhash}</code></td>
		<td><code>"${schema.apiScope}"</code></td>
	</tr>
</table>${params}
`;
		endpointLinks += `\n  * [\`${schema.endpoint}\`](#${hash})`;
	}

	return endpointLinks + '\n' + endpointDocs;
};

// Generate full documentation from JSON string
const generateDocs = (json) => {
	const data = JSON.parse(json);

	// Sort schemas alphabetically by endpoint
	for (let schemas of Object.values(data)) {
		schemas.sort((a, b) => a.endpoint > b.endpoint);
	}

	let docs = staticContent + generateSectionLinks(data) + '\n';

	for (let [sectionName, schemasArray] of Object.entries(data)) {
		docs += generateSection(sectionName, schemasArray);
	}

	return docs;
};
