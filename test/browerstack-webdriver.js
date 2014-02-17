// https://www.browserstack.com/automate/node

var webdriver = require("browserstack-webdriver"),

	// Input capabilities
	capabilities = {
		"browserName" : "firefox",
		"browserstack.user" : "zhongleiqiu",
		"browserstack.key" : "GDB89zAsZyygLWtdoYMd"
	},

	driver = new webdriver.Builder().
		usingServer("http://hub.browserstack.com/wd/hub").
		withCapabilities(capabilities).
		build();

driver.get("http://www.google.com/ncr");
driver.findElement(webdriver.By.name("q")).sendKeys("BrowserStack");
driver.findElement(webdriver.By.name("btnG")).click();

driver.getTitle().then(function(title) {
	console.log(title);
});

driver.quit();
