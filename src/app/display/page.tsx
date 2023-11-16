// import GrabData from "@/components/GrabData";
import puppeteer from "puppeteer";
import SendEmail from "@/components/SendEmail";
// import ShowPhotos from "@/components/ShowPhotos";

interface DisplayProps {
    searchParams: { query: string }
}

export default async function Display({ searchParams: { query } }: DisplayProps) {

    const browser = await puppeteer.connect({
        browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    })


    // const browser = await puppeteer.launch({
    //     headless: "new",
    //     // `headless: true` (default) enables old Headless;
    //     // `headless: 'new'` enables new Headless;
    //     // `headless: false` enables “headful” mode.
    // });

    const url = query;

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

    console.log(bbcData)

    const bodyCredits = bbcData.map((item: any, index: any) => {
        const thisPhoto = 1 + index;
        return (`${thisPhoto}. ${item.credit}%0D%0A`)
    });

    // Formatting data for email
    const bodyNoCommas = bodyCredits.toString().replaceAll(",", "");
    const bodyEmail = "Crédito das fotos:%0D%0A" + bodyNoCommas;
    const urlString = url.toString() + "%0D%0A%0D%0A%0D%0A"
    const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL;
    const bccEmails = process.env.NEXT_PUBLIC_BCC_EMAILS;
    const email = "mailto:" + myEmail + "?subject=BBC News Brasil: " + bbcData[0].headline + "&BCC=" + bccEmails + "&body=" + urlString + bodyEmail;

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div>
                <SendEmail data={email} url={url} />
                {/* <ShowPhotos data={bbcData} /> */}
            </div>
        </main>
    )
}