QUnit.test( "a test", function( assert ) {
	console.log(result);
	function square( x ) {
		return x * x;
	}

	var result = square( 2 );

	assert.equal( result, 4, "square(2) equals 4" );
});
