define([
	"../core",
	"../var/strundefined"
], function( $NAME, strundefined ) {

	// Map over $NAME in case of overwrite
	var	_$NAME = window.$NAME;

	$NAME.noConflict = function( deep ) {

		if ( deep && window.$NAME === $NAME ) {
			window.$NAME = _$NAME;
		}

		return $NAME;
	};

	// Expose $NAME identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.$NAME = $NAME;
	}

});
