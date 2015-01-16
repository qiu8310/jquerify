define([
	'./core',
	'./foo/isFoo'
], function(jquerify, isFoo) {

  jquerify.isFoo = isFoo;

	return jquerify;

});
