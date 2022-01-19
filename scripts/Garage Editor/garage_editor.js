// v2.1.0

(async () => {	
	const numOfSections = prompt('Number of garage sections (~30 max):');
	if (!numOfSections) return;

	const garage = JSON.parse(JSON.parse(localStorage['persist:nt']).user).garage;
	const token = localStorage.player_token;
	const logoutBtn = document.querySelector('a.dropdown-link[href="/"]');

	let requestBody = '';
	for (let i = 0; i < numOfSections * 30; i++) {
		const carID = garage[i] || '';
		requestBody += `garage%5B${i}%5D=${carID}&`;
	}
	requestBody = requestBody.slice(0, -1);

	await fetch('api/v2/loot/arrange-cars', {
		'credentials': 'include',
		'headers': {
			'Authorization': 'Bearer ' + token,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		'body': requestBody,
		'method': 'POST',
		'mode': 'cors'
	});

	alert('Logging you out... Please log back in to see changes.');
	logoutBtn.click();
})();
