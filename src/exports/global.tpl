
  var
  // Map over $PROJECT_NAME in case of overwrite
    _$PROJECT_NAME = window.$PROJECT_NAME;


  $PROJECT_NAME.noConflict = function( deep ) {

    if ( deep && window.$PROJECT_NAME === $PROJECT_NAME ) {
      window.$PROJECT_NAME = _$PROJECT_NAME;
    }

    return $PROJECT_NAME;
  };

  // Expose $PROJECT_NAME identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if ( !noGlobal ) {
    window.$PROJECT_NAME = $PROJECT_NAME;
  }
