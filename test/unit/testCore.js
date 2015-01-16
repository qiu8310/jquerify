module('core');
test('core', function() {
  var a = jquerify('Wonderfully'),
    b = jquerify();

  expect(5);

  equal(a.author, 'Zhonglei Qiu');
  equal(a.name, '[object String]');
  notStrictEqual(a.version, true);

  equal(b.author, 'Zhonglei Qiu');
  equal(b.name, '[object Undefined]');
});


test('#noConflict', function() {
  notStrictEqual(jquerify.noConflict, true);

  var oldJ = jquerify;
  window.jquerify = 'others';

  var newJ = oldJ.noConflict(true);
  equal(window.jquerify, 'others');
  equal(newJ, oldJ);
  window.jquerify = newJ;

});