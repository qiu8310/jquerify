define([
	'./var/author',
	'./var/toString'
], function(author, toString) {

	var jquerify = function(name) {
		return new jquerify.fn.init(name);
	};


  jquerify.fn = jquerify.prototype = {

    version: '$VERSION',
    author: author,

		constructor: jquerify,


		init: function(name) {
			this.name = toString.call(name);
			return this;
		}


	};


  jquerify.fn.init.prototype = jquerify.fn;  // 这是最重要的一行，实现继承

	return jquerify;
});
