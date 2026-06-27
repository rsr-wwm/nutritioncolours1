import puppeteer from 'puppeteer-core';

async function test() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  page.on('pageerror', (err) => {
    console.error('PAGE ERROR STACK:', err.stack || err);
  });
  page.on('console', (msg) => {
    console.log('CONSOLE:', msg.text());
  });
  
  await page.goto('http://localhost:4173/herb/turmeric', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  const data = await page.evaluate(() => {
    return {
      bodyLength: document.body.innerText.length,
      text: document.body.innerText
    };
  });

  console.log('Result:', JSON.stringify(data, null, 2));
  await browser.close();
}

test().catch(console.error);
