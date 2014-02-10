/*!
 * xxx JavaScript Library v0.0.0
 *
 * Date: 2014-02-10T11:52Z
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

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var trim = "".trim;

	var support = {};



	function xxx() {
		console.log("TODO");
	}


	var obj = {};


	xxx.tostring = function(o) {
		obj.prototype.toString.call(o);
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
