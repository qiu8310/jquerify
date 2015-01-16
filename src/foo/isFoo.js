define([
	'./var/rFoo'
], function(rFoo) {
	function isFoo(str) {
		return rFoo.test(str);
	}

  return isFoo;
});
