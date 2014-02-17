define([
	"./var/rQuery"
], function(rQuery) {

	function query(search) {
		var params = {};
		search.replace(rQuery, function(_, key, val) {
			if (!params[key]) {
				params[key] = decodeURIComponent(val);
			}
		});
		return params;
	}

	return query;
});
