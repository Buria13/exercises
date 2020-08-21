const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    await page.waitFor(1000);

    await page.click("div.image_container");
    //const books = await page.$x("//div[@class='image_container']");
    //await books[0].click();

    const result = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let price = document.querySelector('.price_color').innerText;

        return {
            title,
            price
        };
    });

    await browser.close();
    return JSON.stringify(result, null, 2)  ;
};

scrape().then(data => {
    console.log(data);
});