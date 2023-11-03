import puppeteer from 'puppeteer';

export default async function GrabData() {

    const browser = await puppeteer.launch({
        headless: false,
        // `headless: true` (default) enables old Headless;
        // `headless: 'new'` enables new Headless;
        // `headless: false` enables “headful” mode.
    });

    const url = "https://www.bbc.com/portuguese/articles/cgelrdknqwlo";
    const url2 = "https://books.toscrape.com"

    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: "networkidle0",
    });

    await page.click(".bbc-1wfjd8u");
    await page.click(".bbc-1wfjd8u");

    const bbcData = await page.evaluate(() => {
        const allImagesDiv: any = Array.from(document.querySelectorAll(".bbc-sni631"));
        const allImages = allImagesDiv.map((item: any) => {
            const img = item.querySelector(":scope > picture > img");
            const credit: any = item.querySelector(":scope > p > span:nth-child(2)")?.innerText;
            const imgSrc = img.getAttribute("src");
            const urlBegin: string = "https://ichef.bbci.co.uk/news/800";
            const urlEnd: string = imgSrc.slice(urlBegin.length);
            const urlFinal: string = urlBegin + urlEnd;
            return { urlFinal, credit };
        })

        // const imageDivs = Array.from(document.querySelectorAll(".bbc-sni631")?.innerHTML);
        return allImages;
    })
    await browser.close();

    console.log(bbcData)

    // const bookData = await page.evaluate((url) => {
    //     const bookPods = Array.from(document.querySelectorAll(".product_pod"));
    //     const data = bookPods.map((book: any) => ({
    //         title: book.querySelector("h3 a").getAttribute("title"),
    //         price: book.querySelector(".price_color").innerText,
    //         imgSrc: url + book.querySelector("img").getAttribute("src"),
    //     }))
    //     return data
    // }, url)

    // console.log(bookData);

    // await page.click(".bbc-1wfjd8u");
    // await page.click(".bbc-1wfjd8u");

    // const imageUrl = await page.evaluate(() => {
    //     const segment = document.querySelector(".bbc-sni631");
    //     const image = segment?.getAttribute("img");
    //     // const image = document.querySelector('img');
    //     return image;
    // });

    // console.log(imageUrl)

    // const getInfo = await page.evaluate(() => {
    //     const headline = document.querySelector(".bbc-14gqcmb")?.innerHTML;

    //     console.log(headline)


    //     return { headline }
    // })

    // console.log(getInfo)

    // …


    return <div>Grabbed it!</div>

}