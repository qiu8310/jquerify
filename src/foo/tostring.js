define([
	"../core",
	"./var/obj"
], function(xxx, obj) {
	xxx.tostring = function(o) {
		obj.prototype.toString.call(o);
	};
});
