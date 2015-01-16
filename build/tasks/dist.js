module.exports = function( grunt ) {

	'use strict';

	var fs = require( 'fs' ),
		prijectName = grunt.config( 'pkg.name' ),
		distpaths = [
			'dist/'+prijectName+'.js',
			'dist/'+prijectName+'.min.map',
			'dist/'+prijectName+'.min.js'
		];

	// Process files for distribution
	grunt.registerTask( 'dist', function() {
		var stored, flags, paths, nonascii;

		// Check for stored destination paths
		// ( set in dist/.destination.json )
		stored = Object.keys( grunt.config( 'dst' ) );

		// Allow command line input as well
		flags = Object.keys( this.flags );

		// Combine all output target paths
		paths = [].concat( stored, flags ).filter(function( path ) {
			return path !== '*';
		});

		// Ensure the dist files are pure ASCII
		nonascii = false;


    if (paths.length === 0) {
      grunt.log.warn('No path to dist.');
    } else {
      distpaths.forEach(function( filename ) {
        var i, c,
          text = fs.readFileSync( filename, 'utf8' );

        // Ensure files use only \n for line endings, not \r\n
        if ( /\x0d\x0a/.test( text ) ) {
          grunt.log.writeln( filename + ': Incorrect line endings (\\r\\n)' );
          nonascii = true;
        }

        // Ensure only ASCII chars so script tags don't need a charset attribute
        // 中文也会被禁用了，取消这个检查
        if ( false && text.length !== Buffer.byteLength( text, 'utf8' ) ) {
          grunt.log.writeln( filename + ': Non-ASCII characters detected:' );
          for ( i = 0; i < text.length; i++ ) {
            c = text.charCodeAt( i );
            if ( c > 127 ) {
              grunt.log.writeln( '- position ' + i + ': ' + c );
              grunt.log.writeln( '-- ' + text.substring( i - 20, i + 20 ) );
              break;
            }
          }
          nonascii = true;
        }

        // Optionally copy dist files to other locations
        paths.forEach(function( path ) {
          var created;

          if ( !/\/$/.test( path ) ) {
            path += '/';
          }

          created = path + filename.replace( 'dist/', '' );
          grunt.file.write( created, text );
          grunt.log.writeln( 'File "' + created + '" created.' );
        });
      });
    }

		return !nonascii;
	});
};
