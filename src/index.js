// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if (currency <= 0) {
		return {};
	}
	var values = {
		'H': 50,
		'Q': 25,
		'D': 10,
		'N': 5,
		'P': 1
		// 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the strings H, Q, D, N and P.
	}
	var coinsCollection = {};
	var result = 0, counter = 0;

	function findCoins(currency, coinsValue) {
			for (var key in values) {
				if (currency % values[key] !== 0) {
					if (Math.floor(currency/values[key]) !== 0) {
						coinsCollection[key] = Math.floor(currency/values[key]);
						currency = currency - values[key]*coinsCollection[key];
					}
				} else {
					coinsCollection[key] = currency / values[key];
					return coinsCollection;
				}

		}
	}
	return findCoins(currency, values);
}
