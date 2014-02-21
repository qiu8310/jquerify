module.exports = function( grunt ) {

	"use strict";

	grunt.registerTask( "testswarm", function( commit ) {
		var jobName,
			testswarm = require( "testswarm" ),
			runs = {},
			done = this.async(),
			pull = /PR-(\d+)/.exec( commit ),
			config = grunt.file.readJSON( "testswarm.json" ).scaffold,
			tests = grunt.config([ this.name, "tests" ]);

		if ( pull ) {
			jobName = "Pull <a href='https://github.com/qiu8310/js-scaffold/pull/" +
				pull[ 1 ] + "'>#" + pull[ 1 ] + "</a>";
		} else {
			jobName = "Commit <a href='https://github.com/qiu8310/js-scaffold/commit/" +
				commit + "'>" + commit.substr( 0, 10 ) + "</a>";
		}

		tests.forEach(function( test ) {
			// runs[ test ] = config.testUrl + commit + "/test/index.html?module=" + test;
			runs[ test ] = config.testUrl + "/test/index.html?module=" + test;
		});

		testswarm.createClient( {
			url: config.swarmUrl,
			pollInterval: 10000,
			timeout: 1000 * 60 * 30
		} )
		.addReporter( testswarm.reporters.cli )
		.auth( {
			id: config.authUsername,
			token: config.authToken
		})
		.addjob(
			{
				name: jobName,
				runs: runs,
				runMax: config.runMax,
				browserSets: [ "Mobile-Browers", "PC-Browers" ]
			}, function( err, passed ) {
				if ( err ) {
					grunt.log.error( err );
				}
				done( passed );
			}
		);
	});
};
