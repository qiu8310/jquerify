module('bar');
test('.bar', function() {
  var a = jquerify();
  equal(a.bar(), 'I\'m the bar');
});