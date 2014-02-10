	define([
		"../core"
	], function( $NAME ) {

	// Register as a named AMD module, since $NAME can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. AMD module names are
	// derived from file names, and $NAME should normally delivered in right case
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of $NAME, it will work.
	if ( typeof define === "function" && define.amd ) {
		define("AMDNAME", [], function() {
			return $NAME;
		});
	}

	});
