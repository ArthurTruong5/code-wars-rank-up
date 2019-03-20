function findOutlier(integers) {
	let evens = [];
	let odds = [];

	for (let i = 0; i < integers.length; i++) {
		// evens
		if (integers[i] % 2 == 0) {
			evens.push(integers[i]);
			// odds
		} else {
			odds.push(integers[i]);
		}
	}

	if (evens.length == 1) {
		console.log("Identified that length is one an odd number = " + evens);
		evens = evens.toString();
		console.log(evens);
		return evens;
	} else {
		if (odds.length == 1) {
			console.log("Identified that length is one an odd number = " + odds);
			odds = odds.toString();
			console.log(odds);
			return odds;
		} else {
			return;
		}
	}
}

findOutlier([-2, -6, -8, -10, -3]);
