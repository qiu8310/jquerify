module('foo');
test('#foo', function() {
  equal(jquerify.isFoo('Foo'), true);
  equal(jquerify.isFoo('aFoo'), false);
  equal(jquerify.isFoo('fooB'), false);
});