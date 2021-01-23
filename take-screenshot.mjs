import puppeteer from "puppeteer";
import path from "path";

main();

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto("http://localhost:1234", { waitUntil: "networkidle0" });
    await page.screenshot({
      path: path.join(process.cwd(), "output.png"),
      fullPage: true,
    });
  } finally {
    page.close();
    browser.close();
  }
}
