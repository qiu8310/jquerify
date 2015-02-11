// https://www.browserstack.com/automate/node

var webdriver = require('browserstack-webdriver'),

	// Input capabilities
  // 所有支持的浏览器和系统的配置： https://www.browserstack.com/list-of-browsers-and-platforms?product=automate
	capabilities = {
		'browserName' : 'firefox',
		'browserstack.user' : 'zhongleiqiu',
		'browserstack.key' : 'GDB89zAsZyygLWtdoYMd'
	},

  // run on BrowserStack
  browserStackServer = 'http://hub.browserstack.com/wd/hub',

  // Running selenium-server.jar at port 4444
  //localServer = 'http://localhost:4444',

	driver = new webdriver.Builder().
		usingServer(browserStackServer).
		withCapabilities(capabilities).
		build();



driver.get('http://www.google.com/ncr');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
	console.log(title);
});

driver.quit();
