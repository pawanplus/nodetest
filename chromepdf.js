const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///D:/VSCODE/hmtl-to-pdf/test/chrome.html', { waitUntil: 'networkidle2' });
  await page.pdf({
    path: 'hn.pdf', 
    format: 'Letter', 
    margin: {
      top: 37,
      bottom: 37
    }
  });

  await browser.close();
})();