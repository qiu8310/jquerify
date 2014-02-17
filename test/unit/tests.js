module("core");
test("core", function() {
	var a = xxx("some name"),
		b = xxx();

	expect(4);
	equal(a.getAuthor(), "Zhonglei Qiu");
	equal(a.getName(), "[object String]");

	equal(a.getAuthor(), "Zhonglei Qiu");
	equal(b.getName(), "[object Undefined]");
});

module("foo");
test("foo method", function() {
	deepEqual(xxx.foo("a=aa&b=bb"), { a: "aa", b: "bb" });
});

module("bar");
test("bar prototype", function() {
	var a = xxx("some name");
	equal(a.bar(), "bar");
});
