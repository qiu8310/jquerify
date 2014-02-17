/*!
 * xxx JavaScript Library v0.0.0
 *
 * Date: 2014-02-17T07:03Z
 */

(function( global, factory ) {
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = factory( global, true );
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//

	var author = "Zhonglei Qiu";

	var class2type = {};

	var toString = class2type.toString;



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
	var rQuery = /([^&=]+)=([^&]*)/g;



	function query(search) {
		var params = {};
		search.replace(rQuery, function(_, key, val) {
			if (!params[key]) {
				params[key] = decodeURIComponent(val);
			}
		});
		return params;
	}


	xxx.foo = query;


	xxx.fn.bar = function() {
		return "bar";
	};


	

	// Register as a named AMD module, since xxx can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. AMD module names are
	// derived from file names, and xxx should normally delivered in right case
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of xxx, it will work.
	if ( typeof define === "function" && define.amd ) {
		define("xxx", [], function() {
			return xxx;
		});
	}

	
	var strundefined = typeof undefined;



	// Map over xxx in case of overwrite
	var	_xxx = window.xxx;

	xxx.noConflict = function( deep ) {

		if ( deep && window.xxx === xxx ) {
			window.xxx = _xxx;
		}

		return xxx;
	};

	// Expose xxx identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.xxx = xxx;
	}



	return xxx;
}));
