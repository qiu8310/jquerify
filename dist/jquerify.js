/*!
 * jquerify JavaScript Library v0.0.1
 *
 * Date: 2015-01-16T07:36Z
 */

(function( global, factory ) {
	if ( typeof module === 'object' && typeof module.exports === 'object' ) {
		module.exports = factory( global, true );
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== 'undefined' ? window : this, function( window, noGlobal ) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through 'use strict' call chains. (#13335)
	// Support: Firefox 18+
	//

	var author = 'Zhonglei Qiu';

	var obj = {};

	var toString = obj.toString;



	var jquerify = function(name) {
		return new jquerify.fn.init(name);
	};


  jquerify.fn = jquerify.prototype = {

    version: '0.0.1',
    author: author,

		constructor: jquerify,


		init: function(name) {
			this.name = toString.call(name);
			return this;
		}


	};


  jquerify.fn.init.prototype = jquerify.fn;  // 这是最重要的一行，实现继承
	var rFoo = /^foo$/i;


	function isFoo(str) {
		return rFoo.test(str);
	}


  jquerify.isFoo = isFoo;


  jquerify.fn.bar = function() {
		return 'I\'m the bar';
	};




  // Register as a named AMD module, since $NAME can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. AMD module names are
  // derived from file names, and $NAME should normally delivered in right case
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of $NAME, it will work.
  if ( typeof define === 'function' && define.amd ) {
    define('jquerify', [], function() {
      return jquerify;
    });
  }



  var
  // Map over jquerify in case of overwrite
    _jquerify = window.jquerify;


  jquerify.noConflict = function( deep ) {

    if ( deep && window.jquerify === jquerify ) {
      window.jquerify = _jquerify;
    }

    return jquerify;
  };

  // Expose jquerify identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if ( !noGlobal ) {
    window.jquerify = jquerify;
  }


}));
