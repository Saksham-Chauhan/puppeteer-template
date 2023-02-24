const puppeteer = require("puppeteer");


const placeUrl ="https://github.com/BasuDevTyagi10"



async function getLocalPlaceReviews() {
  try {
    let browser =  await puppeteer.launch({
        headless:false,
        executablePath:
          "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(60000);
    await page.goto(placeUrl);
while (true) {
    await page.reload();
}

    // await browser.close();

  } catch (error) {
    // logger.error("Error in func getLocalPlaceReviews and error is:", error);
  }
}

function sleep (time) {
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    })
}

getLocalPlaceReviews();