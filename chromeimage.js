const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const override = Object.assign(page.viewport(), {width: 612, height:792});
  await page.setViewport(override);

  await page.goto('file:///D:/VSCODE/hmtl-to-pdf/test/chrome.html');
  
  
  await page.screenshot({ path: 'chromepng.png' });

  await browser.close();
})();