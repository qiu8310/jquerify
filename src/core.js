define([
	"./var/author",
	"./var/toString"
], function(author, toString) {

	var xxx = function(name) {
		return new xxx.fn.init(name);
	};

	xxx.fn = xxx.prototype = {
		constructor : xxx,
		init : function(name) {
			this.name = toString.call(name);
			return this;
		},
		getName : function() {
			return this.name;
		},
		getAuthor : function() {
			return author;
		}
	};
	xxx.fn.init.prototype = xxx.fn;  // 这是最重要的一行

	return xxx;
});
