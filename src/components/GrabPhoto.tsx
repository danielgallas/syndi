"use server";

// import Image from 'next/image';
import puppeteer from 'puppeteer';

interface GrabPhotoProps {
    urlInput: string;
}

export default async function GrabPhoto(prop: GrabPhotoProps) {

    const browser = await puppeteer.launch({
        headless: "new",
        // `headless: true` (default) enables old Headless;
        // `headless: 'new'` enables new Headless;
        // `headless: false` enables “headful” mode.
    });

    const url = prop.urlInput;

    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: "networkidle0",
    });

    await page.click(".bbc-1wfjd8u");
    await page.click(".bbc-1wfjd8u");

    const bbcData = await page.evaluate(() => {
        const headline: any = document.querySelector(".bbc-14gqcmb")?.textContent;
        const allImagesDiv: any = Array.from(document.querySelectorAll(".bbc-fa0wmp .bbc-1qn0xuy"));
        const allImages = allImagesDiv.map((item: any) => {
            const img = item.querySelector(":scope > div > picture > img");
            const credit: any = item.querySelector(":scope > div > p > span:nth-child(2)")?.textContent || "BBC";
            const imgSrc = img.getAttribute("src");
            const urlBegin: string = "https://ichef.bbci.co.uk/news/800";
            const urlEnd: string = imgSrc.slice(urlBegin.length);
            const urlFinal: string = urlBegin + urlEnd;
            return { urlFinal, credit, headline };
        })

        return allImages;
    })
    await browser.close();

    return (
        <div className='p-1'>
            {bbcData.map((item: any, index: number) => {
                return (
                    <p className='mt-3' key={index}><img src={item.urlFinal} alt={item.credit} /><br></br><br></br></p>)
            })}
        </div>
    )

}