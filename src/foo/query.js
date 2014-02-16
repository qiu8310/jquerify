define([
	"./var/rQuery"
], function(rQuery) {

	function query() {
		var params = {};
		window.location.search.slice(1).replace(rQuery, function(_, key, val) {
			if (!params[key]) {
				params[key] = decodeURIComponent(val);
			}
		});
		return query;
	}

	return query;
});
